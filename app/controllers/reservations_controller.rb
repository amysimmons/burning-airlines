class ReservationsController < ApplicationController
  
  # GET /posts/:post_id/comments
  def index
    @flight = Flight.find params[:flight_id]
    render :json => @flight.comments
  end

  # POST /posts/:post_id/comments
  def create
    comment = Comment.create comment_params
    render :json => comment
  end

  private
  def comment_params
    params.require(:reservation).permit(:seat, :user_id, :flight_id)
  end

end
