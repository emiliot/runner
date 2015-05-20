# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create([
	{ 	
		name: 'Emilio Tirado', 
	    birthday: '1995-20-10',
	    gender: 1,
	    email: 'emilio.tirado@gmail.com',
	    password: '123456',
	},
	{ 	
		name: 'Elizabeth Usaqui', 
	    birthday: '1996-20-10',
	    gender: 2,
	    email: 'elizabethusaqui@gmail.com',
	    password: '123456',
	},
])
