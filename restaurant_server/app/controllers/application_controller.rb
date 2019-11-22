class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token # this is required API's

end
