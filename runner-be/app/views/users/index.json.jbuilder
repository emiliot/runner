json.array! @users do |user|
	json.id user.id
	json.name user.name
	json.email user.email
	json.birthday user.birthday
	json.gender user.gender
end