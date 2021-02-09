class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:user][:email])

        if user && user.authenticate(params[:user][:password])
            session[:user_id] = user.id

            render json: 
            { 
                status: :created, 
                logged_in: true, 
                user: user 
            }
        else
            render json:
            { 
                status: 401,
                message: "Unable to log in to account. Please try again."
            }
        end
    end
end