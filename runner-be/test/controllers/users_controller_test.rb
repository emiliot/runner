require 'test_helper'

class UsersControllerTest < ActionController::TestCase
	test "should get users" do
		get :index, format: :json
		assert_response :success
	end

	test "should create user" do
		assert_difference('User.count') do
			post :create, user: {
				name: "Test",
				email: "emilio.tirado@gmail.com",
				birthday: '2000-1-1',
				password: '123456',
				gender: 1
			}, format: :json
		end
		assert_response :success
	end

	test "should update user" do
		@user = User.new
		@user.name = "Test"
		@user.email = "test@test.com"
		@user.birthday = Date.new(2000, 1,1)
		@user.password = "123456"
		@user.gender = 1
		@user.save

		put :update, :id => @user.id, :user => {name: 'tester'}, format: :json

		@user2 = User.find(@user.id)
		assert_response :success
		assert_equal "tester", @user2.name
	end

	test "should delete user" do
		@user = User.new
		@user.name = "Test"
		@user.email = "test@test.com"
		@user.birthday = Date.new(2000, 1,1)
		@user.password = "123456"
		@user.gender = 1
		@user.save

		delete :destroy, :id => @user.id, format: :json

		assert_response :success
		assert_not User.exists?(@user.id)
	end
end
