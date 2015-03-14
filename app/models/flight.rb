# == Schema Information
#
# Table name: flights
#
#  id            :integer          not null, primary key
#  flight_number :integer
#  origin        :string
#  destination   :string
#  date          :datetime
#  plane_id      :integer
#  created_at    :datetime
#  updated_at    :datetime
#

class Flight < ActiveRecord::Base
  belongs_to :plane
  has_many :reservations
  has_many :users, :through => :reservations

  def self.search(query)
    where("origin ilike ? AND destination ilike ? AND date > now()", "%#{query}%", "%#{query}%", "%#{query}%") 
  end
end
