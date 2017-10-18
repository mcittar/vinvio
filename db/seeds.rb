# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_1 = User.create({ email: 'test@gmail.com', password: 'password', password_confirmation: 'password' })

twenty = Wine.create(name: 'Twenty Grand', price: 2300, description: 'Hot horse flavor', permalink: 'https://res.cloudinary.com/ddy9eynci/image/upload/v1508346319/twenty_grand_ghfykl.png')
alida = Wine.create(name: 'Chateau de Sainte-Alida', price: 3300, description: 'Cold and deadly', permalink: 'https://res.cloudinary.com/ddy9eynci/image/upload/v1508346315/sainte_alida_qckox1.png')
blank = Wine.create(name:'Blank Slate', price: 4500, description: 'Approved', permalink: 'https://res.cloudinary.com/ddy9eynci/image/upload/v1508346310/blank_slate_u0u9fr.png')