class UsersController < ApplicationController
    def create
        user = User.new(user_params)

        if user.valid? && params[:user][:password] == params[:user][:password_confirmation]
            user.save
            session[:user_id] = user.id

            render json: { status: :created, user: user, logged_in: true }
        else
            render json: { status: 500, message: "Account was not created." }
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end
end