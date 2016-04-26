Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }
  resources :pins do 
  	get 'profile', action: 'profile'
  end

  root "pins#index"
  end



#   CarrierWaveExample::Application.routes.draw do
#    resources :resumes, only: [:index, :new, :create, :destroy]
#    root "resumes#index"
# end
