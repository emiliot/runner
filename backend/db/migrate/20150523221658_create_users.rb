class CreateUsers < ActiveRecord::Migration
	def change
		create_table :users do |t|
			t.boolean :admin, :default => false
			t.string :name, limit: 50, :null => false
			t.string :email, limit: 50, :null => false
			t.string :password, :null => false, :default => ""
			t.string :password_confirm, :null => false, :default => ""

			t.timestamps null: false
		end

		add_index :users, :email, :unique => true
	end
end
