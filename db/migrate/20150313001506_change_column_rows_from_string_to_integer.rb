class ChangeColumnRowsFromStringToInteger < ActiveRecord::Migration
  def change
    change_column :planes, :rows, 'integer USING CAST(rows AS integer)'
  end
end
