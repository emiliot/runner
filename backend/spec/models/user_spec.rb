require 'rails_helper'

RSpec.describe User, type: :model do
  before do
  	@user = User.new(name: 'Emilio Tirado', email: 'emilio.tirado57@gmail.com', password: '12345678', gender: 1, birthday: '2000-1-1')
  end

  subject { @user }

  describe "when name is not present" do
  	before { @user.name = " " }
  	it { should_not be_valid }
  end
end
