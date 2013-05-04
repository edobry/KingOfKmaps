/// <reference path="jquery.d.ts" />
/// <reference path="kmaps.ts" />

$(function () {
    var Game = new KMaps.Game([new KMaps.Person("Eugene"), new KMaps.Person("Paulina")]);

    $("#game table").find("td").click((e) => {
        $("#turn").text(Game.CurrentTurn());
        var cell = $(e.target);
        if (cell.text() == "") {
            var x = cell.data("x") - 1;
            var y = cell.parent().data("y") - 1;

            cell.text(Game.Turn);
            Game.MakeMove(new KMaps.Cell(x, y));
        }
    });

    var getCell = (x: number, y: number): JQuery => {
        var secondTable = false;
        if (x > 3) {
            x -= 4;
            secondTable = true;
        }
        return $("#game table").eq(secondTable ? 1 : 0).find("tr").eq(y).children("td").eq(x);
    };

    $("#randomMoves").click(() => {
        if (Game.IsFinished()) Game.Reset();
        while (!Game.IsFinished()) {
            var y = Math.floor(Math.random() * 4);
            var x = Math.floor(Math.random() * 8);
            
            var randCell = new KMaps.Cell(x, y);
            var cell = getCell(x, y);
            if (cell.text() == "") {
                Game.MakeMove(randCell);
                cell.text(Game.Turn);
            }
        }
    });

    $("#clearBoard").click(function () {
        Game.Reset();
        for (var y = 0; y < 4; y++)
            for (var x = 0; x < 8; x++)
                getCell(x, y).text("");
    });
});