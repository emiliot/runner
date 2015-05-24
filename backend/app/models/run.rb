class Run < ActiveRecord::Base
	validates :date_run, presence: true
	validates :time_run, presence: true
	validates :distance_run, presence: true
end
