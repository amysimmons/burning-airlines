class FlightsController < ApplicationController
  before_action :set_flight, only: [:show, :edit, :update, :destroy]

  # GET /flights
  # GET /flights.json
  def index
    if params[:origin] && params[:destination]
       @flights = Flight.where(:origin => params[:origin]) && Flight.where(:destination => params[:destination])
       render :json => @flights, :include => :reservations
    else
      @flights = Flight.all
      render :json => @flights, :include => :reservations
    end
  end
  
  # GET /flights/1
  # GET /flights/1.json
  def show
  end

  # GET /flights/new
  def new
    @flight = Flight.new
  end

  # GET /flights/1/edit
  def edit
  end

  # POST /flights
  # POST /flights.json
  def create
    # binding.pry
    flight = Flight.create flight_params 
    # plane = Plane.find params[:plane_id]
    # render :json => plane.flights
    render :json => flight
  end

  # PATCH/PUT /flights/1
  # PATCH/PUT /flights/1.json
  def update
    respond_to do |format|
      if @flight.update(flight_params)
        format.html { redirect_to @flight, notice: 'Flight was successfully updated.' }
        format.json { render :show, status: :ok, location: @flight }
      else
        format.html { render :edit }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /flights/1
  # DELETE /flights/1.json
  def destroy
    @flight.destroy
    respond_to do |format|
      format.html { redirect_to flights_url, notice: 'Flight was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flight
      @flight = Flight.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def flight_params
      params.require(:flight).permit(:flight_number, :origin, :destination, :date, :plane_id)
      # params.fetch(:plane, {}).permit(:name)
      # params.require(:plane).permit(:name)
    end
end
