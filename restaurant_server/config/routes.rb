Rails.application.routes.draw do

  post 'user/token' => 'user_token#create'
  get 'users/current' => 'users#current'
  
  root :to => "products#index"
  resources :sessions, only:[:create]
  get: logged_in, to: "session#logged_in"
  resources :users
  resources :orders
  resources :line_items
  resources :products
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
