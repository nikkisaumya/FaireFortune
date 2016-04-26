class ChangeResumeFieldTypeToAttachment < ActiveRecord::Migration
  def change
  	remove_column :pins, :resume
  	add_attachment :pins, :resume
  end
end
