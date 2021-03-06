// ***************************************************************

// ***************************************************************

// var mongoose = require('../connect');

// ***************************************************************
const mongoose = require('mongoose');

const db = mongoose.connection;
// Read - MongooseJS Connections Docs:
// https://mongoosejs.com/docs/connections.html
// https://mongoosejs.com/docs/api.html#mongoose_Mongoose-connection

const Schema = mongoose.Schema;
// Read - MongooseJS Schema Doc:
// https://mongoosejs.com/docs/guide.html

const ObjectId = mongoose.Types.ObjectId;
// Read - MongooseJS ObjectId Docs:
// https://mongoosejs.com/docs/schematypes.html#objectids

// ***************************************************************

db.on("error", function (err) {
	console.log("Mongoose DB Connection Error:");
	console.log(err);
});

db.once("open", function () {
	console.log("Mongoose DB Connection - Connected Successfully:");

});


// ***************************************************************

// 1. Table users: (Signup with email)
// 1.1 Tables Schema (Structure)

const UserSchema = new Schema({

	user_name: {
		type: String,
		required: true,
		unique: true
	},

	email: {
		type: String,
		required: true,
		unique: true
	},

	password: {
		type: String,
		required: true
	},

	first_name: String,

	middle_names: String,

	last_name: String,

	gender: {
		type: String, 
		enum: ['Male', 'Female', 'Other']
	},

	phone_number: {
		type: String,
		required: true
	}
});

// 1.2 Model Constructor:
const User = mongoose.model("User", UserSchema);

module.exports = User;

// *** NOT WORKING YET *** Object Moduling:
// module.exports = {
// 	// 1.2 Model Constructor:
// 	User:  mongoose.model("User", UserSchema),
// }

// ***************************************************************
