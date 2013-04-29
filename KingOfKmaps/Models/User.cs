using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace KingOfKmaps.Models
{
    public class User
    {
        public ObjectId id;
        public string username;
        public string First;
        public string Last;

        [BsonIgnore]
        public string FullName
        {
            get
            {
                var name = First + " " + Last;
                return !String.IsNullOrEmpty(name) ? name : username;
            }
        }
    }
}