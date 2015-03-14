class ReservationsController < ApplicationController
  
  # GET /posts/:post_id/comments
  def index
    flight = Flight.find params[:flight_id]
    reservations = Reservation.where(:flight_id => params[:flight_id])
    @result = reservation.map{|r| [User.find(r.user_id).name, r.seat]}
    render :json => @result
  end

  # POST /posts/:post_id/comments
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
