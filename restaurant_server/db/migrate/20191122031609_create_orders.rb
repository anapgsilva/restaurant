class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.float :total_price
      t.integer :user_id, :optional
      t.string :type

      t.timestamps
    end
  end
end
