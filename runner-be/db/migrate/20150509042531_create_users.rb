class CreateUsers < ActiveRecord::Migration
	def change
		create_table :users do |t|
			t.string :name, limit: 50
			t.string :email, limit: 50
			t.date :birthday
			t.string :password
			t.integer :gender, limit: 1
			t.timestamps null: false
		end
	end
end
