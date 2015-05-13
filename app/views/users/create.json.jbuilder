if @user.save
	json.id @user.id
	json.name @user.name
	json.birthday @user.birthday
	json.gender @user.gender
	json.email @user.email
else
	json.array! @user.errors
end