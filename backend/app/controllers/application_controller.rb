class ApplicationController < ActionController::API
	before_action :set_current_user, :authenticate_request

	rescue_from Exceptions::NotAuthenticatedError do
		render json: { error: 'Not Authorized' }, status: :unauthorized
	end
	rescue_from Exceptions::AuthenticationTimeoutError do
	   render json: { error: 'Auth token is expired' }, status: 419 # unofficial timeout status code
	end

	private

	# Based on the user_id inside the token payload, find the user.
	def set_current_user
		if decoded_auth_token
			@current_user ||= User.find(decoded_auth_token[:user_id])
		end
	end

	# Check to make sure the current user was set and the token is not expired
	def authenticate_request
		if auth_token_expired?
			fail Exceptions::AuthenticationTimeoutError
		elsif !@current_user
			fail Exceptions::NotAuthenticatedError
		end
	end

	def decoded_auth_token
		@decoded_auth_token ||= AuthToken.decode(http_auth_header_content)
	end

	def auth_token_expired?
		decoded_auth_token && decoded_auth_token.expired?
	end

	# JWT's are stored in the Authorization header using this format:
	# Bearer somerandomstring.encoded-payload.anotherrandomstring
	def http_auth_header_content
		return @http_auth_header_content if defined? @http_auth_header_content
		@http_auth_header_content = begin
			if request.headers['Authorization'].present?
				request.headers['Authorization'].split(' ').last
			else
				nil
			end
		end
	end

	def render_authenticated_user(user)
		render json: { 
    		auth_token: user.generate_auth_token,
    		user: {
    			name: user.name,
    			role: user.admin ? 'admin' : 'runner'
    		}
    	}, status: :ok
	end
end
