Rails.application.routes.draw do
  # creating users
  resources :users, only: [:create]
  
  # session routes
  resources :sessions, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"

  # search
  get "/search" => "search#search"
end
