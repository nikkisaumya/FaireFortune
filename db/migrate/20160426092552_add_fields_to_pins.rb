class AddFieldsToPins < ActiveRecord::Migration
  def change
    add_column :pins, :skills, :string
    add_column :pins, :location, :string
    add_column :pins, :resume, :string
  end
end
