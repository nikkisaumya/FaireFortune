class Pin < ActiveRecord::Base
	belongs_to :user

  has_attached_file :image, :styles => { :medium => "300x300>"}
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

	has_attached_file :resume,
                :storage => :s3,
                :s3_credentials => Proc.new{|a| a.instance.s3_credentials }

  def s3_credentials
    {:bucket => "fairefortune", :access_key_id => "AKIAI44RTN66PGIVZ4LQ", :secret_access_key => "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"}
  end

end

