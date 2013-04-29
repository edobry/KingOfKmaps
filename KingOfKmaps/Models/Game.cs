using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;

namespace KingOfKmaps.Models
{
    public class Game
    {
        public ObjectId PlayerOne { get; set; }
        public ObjectId PlayerTwo { get; set; }

        public IEnumerable<Move> Moves { get; set; }
    }

    public class Move
    {
        public int Player { get; set; }
        public Tuple<int, int> Position { get; set; }
        public DateTime Timestamp { get; set; }
    }
}