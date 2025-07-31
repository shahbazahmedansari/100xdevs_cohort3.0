// create user models and schemas here
import mongoose from 'mongoose';

const mongodbConnectionString = '';

mongoose
	.connect(mongodbConnectionString)
	.then(() => console.log('DB Connected'))
	.catch((err) => console.error('Error in connecting to DB', err));

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

export const User = mongoose.model('User', userSchema);
