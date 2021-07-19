import bcrypt from "bcryptjs";

const users = [
	{
		name     : "Admin User",
		email    : "helvin@helvinrymer.com",
		password : bcrypt.hashSync("123456", 10),
		isAdmin  : true,
	},
	{
		name     : "Mr. Rymer",
		email    : "helvin159@gmail.com",
		password : bcrypt.hashSync("123456", 10),
	},
	{
		name     : "H Rymer",
		email    : "helvin@mrrymer.com",
		password : bcrypt.hashSync("123456", 10),
	},
];

export default users;
