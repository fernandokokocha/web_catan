Rails.application.routes.draw do
  root 'home#index'
  resource :game, only: [:create, :update]
end
