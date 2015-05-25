class RunsController < ApplicationController
	before_action :set_run, only: [:show, :update, :destroy]

	# GET /runs
	# GET /runs.json
	def index
		@runs = @current_user.runs

		render json: @runs
	end

	# GET /runs/1
	# GET /runs/1.json
	def show
		render json: @run
	end

	# POST /runs
	# POST /runs.json
	def create
		@run = Run.new(run_params)

		if @run.save
			render json: @run, status: :created
		else
			render json: @run.errors, status: :unprocessable_entity
		end
	end

	# PATCH/PUT /runs/1
	# PATCH/PUT /runs/1.json
	def update
		@run = Run.find(params[:id])

		if @run.update(run_params)
			render json: @run, status: :ok
		else
			render json: @run.errors, status: :unprocessable_entity
		end
	end

	# DELETE /runs/1
	# DELETE /runs/1.json
	def destroy
		@run.destroy

		head :no_content
	end

	private

	def set_run
		@run = Run.find(params[:id])
	end

	def run_params
		params.permit(:date_run, :time_run, :distance_run, :user_id)
	end
end
