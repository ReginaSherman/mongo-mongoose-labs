/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/' + 'vampires';
const db = mongoose.connection;

// Connect to Mongo and fix deprecation warnings
mongoose.connect(
	mongoURI,
	{
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log('connection with MongoDB is established');
	}
);
// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on('open', () => {
	console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
//This is an array of Vampires for you to insert into your database.

// Vampire.insertMany(seedData, (err, vampires) => {
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log('added provided vampire data', vampires);
// 	db.close();
// });

// const moreVampires = [
// 	{
// 		name: 'Bathsheba',
// 		title: 'Queen',
// 		hair_color: 'black',
// 		eye_color: 'brown',
// 		dob: new Date(388, 2, 14, 8, 08),
// 		loves: ['cats', 'mead', 'milk baths'],
// 		location: 'Petra, Syria',
// 		gender: 'f',
// 		victims: 3028,
// 	},
// 	{
// 		name: 'Ulrike the Red',
// 		title: 'Empress',
// 		hair_color: 'red',
// 		eye_color: 'blue',
// 		dob: new Date(1788, 2, 14, 10, 48),
// 		loves: ['German opera', 'Wagner', 'Rhinish wine'],
// 		location: 'Munich, Germany',
// 		gender: 'f',
// 		victims: 4223,
// 	},
// 	{
// 		name: 'Saladin the Meek',
// 		title: 'Conqueror',
// 		hair_color: 'brown',
// 		eye_color: 'green',
// 		dob: new Date(1492, 4, 24, 10, 19),
// 		loves: ['swords', 'war', 'military campaigns'],
// 		location: 'Kirkuk, Iraq',
// 		gender: 'm',
// 		victims: 213,
// 	},
// 	{
// 		name: 'Joel',
// 		title: 'Preacher of the South',
// 		hair_color: 'black',
// 		eye_color: 'brown',
// 		dob: new Date(1965, 10, 01, 5, 55),
// 		loves: ['old cathedrals', 'congregations', 'the Bible'],
// 		location: 'Houston, Texas',
// 		gender: 'm',
// 		victims: 14,
// 	},
// ];

// Vampire.insertMany(moreVampires, (error, vampires) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log(vampires);
// 	}
// 	db.close();
// });

/**********************************************************************
Select by comparison
**********************************************************************/

//1. find all the female vampires in the db
// Vampire.find({ gender: 'f' }, (err, vampires) => {
// 	console.log(vampires);
// 	db.close();
// });

//2. greater than 500 victims
// Vampire.find({  victims: {  $gt: 500  } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//3. fewer than or equal to 150 victims
// Vampire.find({  victims: {  $lte: 150  } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//4. victim count not equal to 210234
// Vampire.find({  victims: {  $ne: 210234  } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//5. have greater than 150 AND fewer than 500 victims
// Vampire.find({  $and: [ {victims: { $gt: 150}}, {victims: { $lt: 500}}]}, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

/**********************************************************************
Select by exists or does not exist
**********************************************************************/

//1. have a key of title
// Vampire.find({  title: {  $exists: true } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//2. do not have a key of 'victims'
// Vampire.find({  victims: {  $exists: false } }, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//3. have a title AND no victims
// Vampire.find(
// 	{ $and: [{ title: { $exists: true } }, { victims: { $exists: false } }] },
// 	(err, vampires) => {
// 		console.log(vampires);
// 		db.close();
// 	}
// );

//4. have victims and victims are greater than 1000
// Vampire.find({ $and: [
//   {victims: {  $exists: true }},
//   {victims: {  $gt: 1000 }}
// ]}, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

/**********************************************************************
Select with OR
**********************************************************************/

//1. are from New York, New York, US or New Orleans, Louisiana, US -- USE OR OPERATOR
// Vampire.find({ $or: [
//   {location: "New York, New York, US"},
//   {location: "New Orleans, Louisiana, US"}
// ]}, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//2. love brooding or being tragic -- USE OR OPERATOR
// Vampire.find(
// 	{ $or: [{ loves: { $in: 'brooding' } }, { loves: { $in: 'being tragic' } }] },
// 	(err, vampires) => {
// 		console.log(vampires);
// 		db.close();
// 	}
// );

//3. have more than 1000 victims or love marshmallows
// Vampire.find({ $or: [
//   {victims: { $gt: 1000}},
//   {loves: { $in: "marshmallows"}}
// ]}, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//4. red hair or green eyes
// Vampire.find({ $or: [
//   {hair_color: "red"},
//   {eye_color: "green"}
// ]}, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

/**********************************************************************
Select objects that match one of several values
**********************************************************************/

//1. love either frilly shirtsleeves or frilly collars
//can use $or operator as above examples, or $in operator as below
// Vampire.find(
// 	{ loves: { $in: ['frilly shirtsleeves', 'frilly collars'] } },
// 	(err, vampires) => {
// 		console.log(vampires);
// 		db.close();
// 	}
// );

//2. love brooding
// Vampire.find({ loves: 'brooding' }, (err, vampires) => {
// 	console.log(vampires);
// 	db.close();
// });

//3. love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
// Vampire.find(
// 	{
// 		loves: {
// 			$in: [
// 				'appearing innocent',
// 				'trickery',
// 				'lurking in rotting mansions',
// 				'R&B music',
// 			],
// 		},
// 	},
// 	(err, vampires) => {
// 		console.log(vampires);
// 		db.close();
// 	}
// );

/**********************************************************************
Negative Selection
**********************************************************************/

//1. love ribbons but do not have brown eyes
// Vampire.find({ $and: [
//   {loves: {  $in: "ribbons" }},
//   {eye_color: {  $ne: "brown" }}
// ]}, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//2. are not from rome
// Vampire.find({ location: { $ne: "Rome, Italy"}}, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//3. do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// Vampire.find(
// 	{
// 		loves: {
// 			$nin: [
// 				'fancy cloaks',
// 				'frilly shirtsleeves',
// 				'appearing innocent',
// 				'being tragic',
// 				'brooding',
// 			],
// 		},
// 	},
// 	(err, vampires) => {
// 		console.log(vampires);
// 		db.close();
// 	}
// );

//4. have not killed more than 200 people
// Vampire.find({ victims: { $lte: 200}}, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })
// });

/**********************************************************************
Replace
**********************************************************************/

//1. replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'
// Vampire.findOneAndUpdate(
// 	{ name: 'Claudia' },
// 	{ $set: { name: 'Eve', portrayed_by: 'Tilda Swinton' } },
// 	{ returnNewDocument: true, new: true, strict: false },
// 	(err, vampires) => {
// 		console.log(vampires);
// 		db.close();
// 	}
// );

//2. replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
// Vampire.findOneAndUpdate(
// 	{ gender: 'm' },
// 	{ $set: { name: 'Guy Man', is_actually: 'were-lizard' } },
// 	{ returnNewDocument: true, new: true, strict: false },
// 	(err, vampires) => {
// 		console.log(vampires);
// 		db.close();
// 	}
// );

/**********************************************************************
Update
**********************************************************************/

//1. update eve to have gender m
// Vampire.findOneAndUpdate(
//   {name: "Eve"},
//   {$set: {gender: "m"}},
//   {new: true},
//   (err, vampires) => {
//     console.log(vampires);
//     db.close();
//   })

//2. Rename 'Eve's' name field to 'moniker'
// Vampire.findOneAndUpdate(
// 	{ name: 'Eve' },
// 	{ $rename: { name: 'moniker' } },
// 	{ new: true },
// 	(err, vampires) => {
// 		console.log(vampires);
// 		db.close();
// 	}
// );

//3. We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".
// Vampire.updateMany(
// 	{ gender: 'f' },
// 	{ $set: { gender: 'fems' } },
// 	{ new: true },
// 	(err, vampires) => {
// 		console.log(vampires);
// 		db.close();
// 	}
// );

//check if fems worked
// Vampire.find({ gender: 'fems' }, (err, vampires) => {
// 	console.log(vampires);
// 	db.close();
// });

/**********************************************************************
Remove
**********************************************************************/

//1. Remove a single document wherein the hair_color is 'brown'
// Vampire.findOneAndRemove({hair_color: "brown"}, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })

//2. We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.
// Vampire.deleteMany({eye_color: "blue"}, (err, vampires) => {
//   console.log(vampires);
//   db.close();
// })
