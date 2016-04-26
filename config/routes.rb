	Rails.application.routes.draw do
  devise_for :users
  resources :pins

  root "pins#index"
  end



#   CarrierWaveExample::Application.routes.draw do
#    resources :resumes, only: [:index, :new, :create, :destroy]
#    root "resumes#index"
# end
