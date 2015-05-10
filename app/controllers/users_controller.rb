class UsersController < ApplicationController
	
	def index
		User.all
	end

	def create
		@user = User.create(user_params)
	end

	private
		def user_params
			params.permit(:name, :email, :password, :gender, :birthday)
		end
end
