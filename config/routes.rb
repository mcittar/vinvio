Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  post '/buy/:permalink', to: 'transactions#create', as: :buy
  scope :auth do
	  get 'is_signed_in', to: 'auth#is_signed_in?'
	end

	namespace :api, defaults: { format: :json } do
		resources :wines
	end

	devise_for :users
	
	# , :skip => [:registrations]

	# as :user do
	# 	patch '/users' => 'devise/registrations#update', as: 'user_registration'
	# 	put '/users' => 'devise/registrations#update'
	# 	delete '/users' => 'devise/registrations#destroy'
	# 	post '/users' => 'devise/registrations/#create'
	# end

end
