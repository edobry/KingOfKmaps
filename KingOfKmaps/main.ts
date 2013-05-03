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

    var getCell = (index) => { return $("#game table").find("td").eq(index); };

    $("#randomMoves").click(() => {
        for (var i = 0; i < 33; i++) {
            var cell = getCell(i);
            cell.text(Game.Turn);
            Game.MakeMove(new KMaps.Cell(cell.data("x")-1, cell.parent().data("y")-1));
        }
    });

    $("#clearBoard").click(function () {
        Game.Reset();
        for (var i = 0; i < 33; i++) 
            getCell(i).text("");
    });
});