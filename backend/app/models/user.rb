class User < ActiveRecord::Base
	validates :name, presence: true, length: { maximum: 50}
	validates :email, presence: true, length: { maximum: 50}
	validates :password, presence: true, length: { in: 6..20 }

	has_many :runs, dependent: :destroy

	def generate_auth_token
		payload = { user_id: self.id }
		AuthToken.encode(payload)
	end

	def self.find_by_credentials(email, password)
		User.where("email = ? AND password = ?", email, password).first
	end
end
