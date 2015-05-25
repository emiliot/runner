class CreateRuns < ActiveRecord::Migration
	def change
		create_table :runs do |t|
			t.datetime :date_run, null: false, :default => DateTime.now.to_date
			t.integer :time_run, null: false, :default => 0
			t.float :distance_run, null: false, :default => 0.0
			t.integer :user_id

			t.belongs_to :user, index:true
			t.timestamps null: false
		end
	end
end
