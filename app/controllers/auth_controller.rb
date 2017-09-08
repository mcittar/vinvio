class AuthController < ApplicationController

	 def is_signed_in?
	 	p current_user
	 	
    if user_signed_in?
      render :json => {"signed_in": true, "user": current_user}.to_json()
    else
      render :json => {"signed_in": false}.to_json()
    end
 
  end
end
