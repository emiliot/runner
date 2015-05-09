require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "should not save user without name" do
    user = User.new
    user.password = "123456"
	user.email = "emilio.tirado57@gmail.com"
    assert_not user.save, "Saved the user without name"
  end

  test "should not save user without password" do
  	user = User.new
  	user.name = "Juanito"
	user.email = "emilio.tirado57@gmail.com"
  	assert_not user.save, "Saved user without password"
  end

  test "should not save user without email" do
  	user = User.new
  	user.name = "Juanito"
  	user.password = "123456"
  	assert_not user.save, "Saved user without email"
  end

  test "password should have length between 6 and 20 characters" do
  	user = User.new
  	user.name = "Juanito"
  	user.password = "12345"
  	user.email = "emilio.tirado57@gmail.com"
  	assert_not user.save, "Saved without password with length correct"
  end

  test "saving correct user" do
  	user = User.new
  	user.name = "Juanito"
  	user.password = "123456"
  	user.email = "emilio.tirado57@gmail.com"
  	assert user.save, "User not saved"
  end
end
