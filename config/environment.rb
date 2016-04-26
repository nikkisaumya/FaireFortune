# Load the Rails application.
require File.expand_path('../application', __FILE__)
require 'aws/s3'
# Initialize the Rails application.
Rails.application.initialize!


AWS::S3::DEFAULT_HOST = "s3-us-west-1.amazonaws.com" # if using sg buckets
