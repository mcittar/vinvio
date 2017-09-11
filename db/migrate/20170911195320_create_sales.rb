class CreateSales < ActiveRecord::Migration[5.1]
  def change
    create_table :sales do |t|
    	t.string :email, null: false
    	t.string :guid, null: false
    	t.string :stripe_id, null: false
      t.timestamps
    end
  end
end
