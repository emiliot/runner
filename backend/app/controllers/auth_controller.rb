class AuthController < ApplicationController
	skip_before_action :authenticate_request
	
	def authenticate
	    user = User.find_by_credentials(params[:email], params[:password])
	    if user
	    	render_authenticated_user(user)
	    else
	    	render json: { error: 'Invalid email or password' }, status: :unauthorized
	    end
	end
end
