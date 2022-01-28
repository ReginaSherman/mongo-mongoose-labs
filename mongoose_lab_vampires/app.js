/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require("mongoose");
const seedData = require("./models/seed_vampires.js");
const Vampire = require("./models/vampire.js");
require("dotenv").config()

// Configuration
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(
	mongoURI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log('connection with MongoDB is established');
	}
);

// Connection Error/Success
db.on("error", err => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

db.on("open", () => {
  console.log("Connection made!");
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
// Vampire.insertMany(seedData, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("added provided vampire data", vampires);
//   mongoose.connection.close();
// });

const newVampires = [
  {
    name: "Jane Doe",
    hair_color: "brown",
    eye_color: "green",
    dob: new Date(1995, 7, 14, 4, 40),
    loves: ["oranges", "apples"],
    location: "Portland, Oregon",
    gender: "f",
    victims: "5214"
  },
  {
    name: "John Doe",
    hair_color: "blonde",
    eye_color: "blue",
    dob: new Date(1875, 9, 25, 7, 63),
    loves: ["trees", "roads", "pillows"],
    location: "Dallas, Texas",
    gender: "m",
    victims: "965"
  },
  {
    name: "Jamison",
    hair_color: "red",
    eye_color: "green",
    dob: new Date(1258, 6, 7, 3, 21),
    loves: ["chairs", "ice", "air", "plants"],
    location: "Newark, New Jersey",
    gender: "m",
    victims: "68"
  },
  {
    name: "Jill Ann",
    hair_color: "black",
    eye_color: "brown",
    dob: new Date(1589, 7, 14, 4, 40),
    loves: ["oranges", "apples"],
    location: "Portland, Oregon",
    gender: "f",
    victims: "5214"
  }
]

Vampire.create(newVampires, (error, vampire) => {
 if (error) {
   //if there is an error console log it
   console.log(error);
 } else {
   // else show us the created tweet
   console.log(vampire);
 }
 // get control of terminal back
 // else just use control c
 db.close();
});

