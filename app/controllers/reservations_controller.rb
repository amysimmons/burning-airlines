class ReservationsController < ApplicationController
  
  # GET /reservations
  def index
    flight = Flight.find params[:flight_id]
    reservations = Reservation.where(:flight_id => params[:flight_id])
    @result = reservations.map{|r| [User.find(r.user_id).name, r.seat]}
    render :json => @result
  end

  # POST /reservations
  def create
    user = User.create(name: params[:user_name])
    @reservation = Reservation.create(flight_id: params[:flight_id], user_id: user.id, seat: params[:seat])
    render :json => @reservation
  end

  private
  def reservation_params
    params.require(:reservation).permit(:seat, :user_name, :flight_id)
  end

end
