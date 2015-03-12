# == Schema Information
#
# Table name: planes
#
#  id         :integer          not null, primary key
#  name       :string
#  rows       :string
#  columns    :integer
#  created_at :datetime
#  updated_at :datetime
#

class Plane < ActiveRecord::Base
  has_many :flights
end
