require 'rails_helper'

RSpec.describe User, type: :model do
    before do
        @user = FactoryGirl.create(:confirmed_user)
    end

    it "has users" do
        expect(User.all).not_to be_empty
    end
end
