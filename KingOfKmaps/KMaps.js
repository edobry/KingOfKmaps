var KMaps;
(function (KMaps) {
    var Game = (function () {
        function Game(_players) {
            this.Turn = 0;
            this.grid = new Grid(8, 4);
            this.players = _players;
        }
        Game.prototype.CurrentTurn = function () {
            return this.players[this.Turn].Name + "'s Turn: " + this.Turn;
        };
        Game.prototype.MakeMove = function (cell) {
            this.grid.SetVal(cell, this.Turn);
            this.Turn = this.Turn == 0 ? 1 : 0;
        };
        Game.prototype.Reset = function () {
            this.grid.Clear();
            this.Turn = 0;
            this.players = [];
        };
        return Game;
    })();
    KMaps.Game = Game;    
    var Cell = (function () {
        function Cell(X, Y) {
            this.X = X;
            this.Y = Y;
        }
        return Cell;
    })();
    KMaps.Cell = Cell;    
    var Grid = (function () {
        function Grid(xDim, yDim) {
            this.xDim = xDim;
            this.yDim = yDim;
            this.grid = createArray(yDim, xDim);
            this.Clear();
        }
        Grid.prototype.GetVal = function (cell) {
            return this.grid[cell.Y][cell.X];
        };
        Grid.prototype.SetVal = function (cell, val) {
            this.grid[cell.Y][cell.X] = val;
        };
        Grid.prototype.Clear = function () {
            for(var i = 0; i < this.yDim; i++) {
                for(var j = 0; j < this.xDim; j++) {
                    this.grid[i][j] = null;
                }
            }
        };
        return Grid;
    })();    
    var Person = (function () {
        function Person(name) {
            this.Name = name;
        }
        return Person;
    })();
    KMaps.Person = Person;    
})(KMaps || (KMaps = {}));
