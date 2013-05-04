/// <reference path="base.ts" />

module KMaps {
    export class Game {
        constructor(_players: Person[]) {
            this.Turn = 0;
            this.moves = 0;
            this.grid = new Grid(8, 4);
            this.players = _players;
        }

        public Turn: number;
        private moves: number;
        private grid: Grid;
        private players: Person[];

        public CurrentTurn(): string {
            return this.players[this.Turn].Name + "'s Turn: " + this.Turn;
        }

        public MakeMove(cell: Cell): void {
            this.grid.SetVal(cell, this.Turn);
            this.Turn = this.Turn == 0 ? 1 : 0;
            this.moves++;
        }

        public IsFinished(): bool {
            return this.moves == 32;
        }

        public Reset(): void {
            this.grid.Clear();
            this.moves = 0;
            this.Turn = 0;
            this.players = [];
        }
    }

    export class Cell {
        constructor(public X: number, public Y: number) { }
    }

    class Grid {
        constructor(private xDim: number, private yDim: number) {
            this.grid = createArray(yDim, xDim);
            this.Clear();
        }

        public GetVal(cell: Cell): number {
            return this.grid[cell.Y][cell.X];
        }

        public SetVal(cell: Cell, val: number): void {
            this.grid[cell.Y][cell.X] = val;
        }

        public Clear(): void {
            for (var i = 0; i < this.yDim; i++)
                for (var j = 0; j < this.xDim; j++)
                    this.grid[i][j] = null;
        }

        public grid: number[][];
    }

    export class Person {
        constructor(name: string) { this.Name = name; }

        public Name: string;
    }
}