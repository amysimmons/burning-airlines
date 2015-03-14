Rails.application.routes.draw do
  
  root :to => 'planes#landing'
  
  resources :reservations

  resources :users

  resources :flights 

  resources :planes

  get '/search' => 'flights#search'


end
