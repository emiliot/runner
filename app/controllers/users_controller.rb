class UsersController < ApplicationController
	
	def index
		User.all
	end

	def create
		@user = User.create(user_params)
	end

	def update
		@user = User.find(params[:id])
		@user.update(user_params)
	end

	def destroy
		@user = User.find(params[:id])
		@user.destroy
	end

	def login
	end

	private
		def user_params
			params.permit(:name, :email, :password, :gender, :birthday)
		end
end
