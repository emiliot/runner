class UsersController < ApplicationController
	
	def index
		@users = User.all
		render :index, format: :json, status: :ok
	end

	def create
		@user = User.create(user_params)
		if @user.save
			render :create, format: :json, status: :created
		else
			puts @user.errors.messages
			render :create, format: :json, status: :bad_request
		end
	end

	def update
		if User.exists?(params[:id])
			@user = User.find(params[:id])
			if @user.update(user_params)
				render :update, format: :json, status: :ok
			else
				render :update, format: :json, status: :bad_request
			end
		else
			puts "test #{params[:id]}"
			render :update, status: :not_found
		end
		
	end

	def destroy
		if User.exists?(params[:id])
			@user = User.find(params[:id])
			if @user.destroy
				render :destroy, status: :no_content
			else
				render :destroy, status: :internal_server_error
			end
		else
			render :destroy, status: :not_found
		end
	end

	def login
	end

	private
		def user_params
			params.require(:user).permit(:name, :email, :password, :gender, :birthday)
		end
end
