class SessionController < ApplicationController
    def create
        user = User.find_by(email: params[:user][:email]).try(:authenticat, params[:user][:password])

        if user
            session[:user_id] = user.id
        end
    end
end