class ChangeColumnRowsFromStringToInteger < ActiveRecord::Migration
  def change
    change_column :planes, :rows, :string
  end
end
