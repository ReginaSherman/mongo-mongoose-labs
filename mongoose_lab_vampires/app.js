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

// Vampire.create(newVampires, (error, vampire) => {
//  if (error) {
//    //if there is an error console log it
//    console.log(error);
//  } else {
//    // else show us the created tweet
//    console.log(vampire);
//  }
//  // get control of terminal back
//  // else just use control c
//  db.close();
// });

// Vampire.find({ gender: 'f'}, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find({victims: { $gte: 500 } }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find({ victims: { $lte: 150} }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find({ victims: { $ne: 210234 } }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find({ victims: { $gte: 150, $lte: 500 } }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// // })

// Vampire.find( { title: { $exists: true} }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find( { victims: { $exists: false} }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find( { title: { $exists: true}, victims: { $exists: false} }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find( { victims: { $exists: true}, victims: { $gt: 1000} }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find( { $or: [ {location: 'New York, New York, US'}, {location: 'New Orleans, Louisiana, US'} ] }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find( { $or: [ {loves: 'brooding'}, {loves: 'being tragic'} ] }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find( { $or: [ { victims: { $gt: 1000 } }, {loves: 'marshmallows'} ] }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find( { $or: [ {hair_color: 'red'}, {eye_color: 'green'} ] }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find( { $or: [ {loves: 'frilly shirtsleeves'}, {loves: 'frilly collars'} ] }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find( { loves: 'brooding' }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find( { loves: { $in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music'] } }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find(  { loves: 'ribbons' }, { $not: { eye_color: 'brown' } } , (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find(  { $not: { location: 'Rome, Italy' } } , (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find(  { $not: { loves: { $in: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']}}} , (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.find( { victims: { $not: { $gt: 200 } } }, (err, vampire) => {
//   console.log(vampire)
//   db.close()
// })

// Vampire.findOneAndUpdate( 
//   { name: 'Claudia'},
//   { $set: { name: 'Eve', portrayed_by: 'Tilda Swinton'} },
//   { new: true, strict: false }, 
//   (err, vampire) => {
//     console.log(vampire)
//     db.close()
//   })

// Vampire.findOneAndUpdate( 
//   { gender: 'm'},
//   { $set: { name: 'Guy-Man', is_actually: 'were-lizard'} },
//   { new: true, strict: false }, 
//   (err, vampire) => {
//     console.log(vampire)
//     db.close()
//   })

// Vampire.findOneAndUpdate( 
//   { name: 'Eve'},
//   { $set: { gender: 'm' } },
//   { new: true, strict: false }, 
//   (err, vampire) => {
//     console.log(vampire)
//     db.close()
//   })
    
// Vampire.findOneAndUpdate( 
//   { _id: '61f469115e82a40ce965dd4c' },
//   { $rename: { 'name' : 'moniker' } },
//   (err, vampire) => {
//     console.log(vampire)
//     db.close()
//   })

// Vampire.find( 
//   { gender: 'f' },
//   { $set: { gender: 'fems' } },
//   (err, vampire) => {
//     console.log(vampire)
//     db.close()
//   })

// Vampire.findOneAndRemove( { hair_color: 'brown'}, (err, vampire) => { 
//   console.log(vampire)
//   db.close() 
// })

// Vampire.updateMany( { gender: 'f' }, { $set: { gender: 'fems' } }, (err, vampire) => {
//     console.log(vampire)
//     db.close()
//   })

Vampire.deleteMany( { eye_color: 'blue' }, (err, vampire) => {
    console.log(vampire)
    db.close()
  })