class CreateRecreationalAreas < ActiveRecord::Migration[6.0]
  def change
    create_table :recreational_areas do |t|
      t.string :facility_name
      t.string :facility_description
      t.string :facility_id
      t.string :facility_directions
      t.string :facility_email
      t.string :facility_phone
      t.integer :user_id

      t.timestamps
    end
  end
end
