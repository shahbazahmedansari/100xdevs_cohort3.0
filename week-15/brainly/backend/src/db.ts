// create user models and schemas here
import mongoose, { Types } from 'mongoose';

const mongodbConnectionString =
	'mongodb+srv://admin:shahbaz7890@cluster0.cktkc6b.mongodb.net/brainly';

mongoose
	.connect(mongodbConnectionString)
	.then(() => console.log('DB Connected'))
	.catch((err) => console.error('Error in connecting to DB', err));

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

export const User = mongoose.model('User', userSchema);

const tagsSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true,
	},
});

export const Tag = mongoose.model('Tag', tagsSchema);

const contentEnums = ['image', 'video', 'audio', 'article'];

const contentSchema = new mongoose.Schema({
	link: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
		enum: contentEnums,
	},
	title: {
		type: String,
		required: true,
	},
	usreId: {
		type: Types.ObjectId,
		required: true,
		ref: 'User',
	},
	tags: [
		{
			type: Types.ObjectId,
			ref: 'Tag',
		},
	],
});

export const Content = mongoose.model('Content', contentSchema);

const linkSchema = new mongoose.Schema({
	hash: {
		type: String,
		required: true,
		unique: true,
	},
	userId: {
		type: Types.ObjectId,
		required: true,
		ref: 'User',
	},
});

export const LinkModel = mongoose.model('Link', linkSchema);
