class CreateWines < ActiveRecord::Migration[5.1]
  def change
    create_table :wines do |t|	
    	t.string :name, null: false
    	t.integer :price, null: false
    	t.text :description, null: false
    	t.string :permalink, null: false
      t.timestamps
    end
  end
end
