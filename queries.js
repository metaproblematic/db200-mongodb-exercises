//CREATE
//use mongo_exercises
//switched to db mongo_exercises
db.movies.insert({"title": "Star Wars", "writer": "George Lucas", "year": 1977, "actors": ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Chushing", "James Earl Jones"]})

db.movies.insert({"title": "Raiders of the Lost Ark", "writer": "George Lucas", "year": 1981, "actors": ["Harrison Ford"]})

db.movies.insert({"title": "Fight Club", "writer": "Chuck Palahniuk", "year": 1999, "actors": ["Brad Pitt", "Edward Norton"]}) 

db.movies.insert({"title": "Pulp Fiction", "writer": "Quentin Tarantino", "year": 1994, "actors": ["John Travolta", "Uma Thurman"]}) 

db.movies.insert({"title": "Inglorious Bastards", "writer": "Quentin Tarantino", "year": 2009, "actors": ["Brad Pitt", "Diane Kruger","Eli Roth"]}) 

db.movies.insert({"title": "The Hobbit: An Unexpected Journey", "writer": "J.R.R Tolkien", "year": 2012, "franchise": "The Hobbit"})

db.movies.insert({"title": "The Hobbit: TheDesolation of Smaug", "writer": "J.R.R. Tolkien", "year": 2013, "franchise": "The Hobbit"})

db.movies.insert({"title": "The Hobbit: The Battle of the Five Armies", "writer": "J.R.R. Tolkien", "year": 2014, "franchise": "The Hobbit", "synopsis": "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."})

db.movies.insert({"title": "Pee Wee Herman's Big Adventure", "writer": "Phil Hartman", "year": 1985}) 

db.movies.insert({"title": "Avatar"})

//READ

db.movies.find({})
db.movies.find({"writer": "Quentin Tarantino"})
db.movies.find({"actors": "Brad Pitt"})
db.movies.find({"franchise": "The Hobbit"})
db.movies.find({"year": {$gt: 1990, $lt: 2000} })
db.movies.find({$or: [{year: {$lt: 2000}}, {year: {$gt: 2010}}]})

//UPDATE

db.movies.update({title: "The Hobbit: An Unexpected Journey"}, {synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."})
db.movies.update({title: "The Hobbit: The Desolation of Smaug"}, {synopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."})
db.movies.update({title: "Pulp Fiction"}, {$push: {actors: "Samuel L. Jackson"}})

//TEXT SEARCH

db.movies.find({$text: {$search: "Bilbo"}})
db.movies.find({$text: {$search: "Gandalf"}})
db.movies.find({$text: {$search: "Bilbo-Gandalf"}})
db.movies.find({$text: {$search: "dwarves hobbit"}})
db.movies.find({$text: {$search: "gold dragon"}})

//DELETE

db.movies.deleteOne({title: "Pee Wee Herman's Big Adventure"})
db.movies.deleteOne({title: "Avatar"})

//CREATE new collections

db.users.insert({username: "SallySmith", first_name: "Sally", last_name: "Smith"})
db.users.insert({username: "JimmyHagen", first_name: "Jimmy", last_name: "Hagen"})