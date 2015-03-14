class AddColumnToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :seat, :string
  end
end
