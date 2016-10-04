Rails.application.routes.draw do

    # Need to find a way to do pattern matching that maps to a controller/action
    get '/core/' => 'core#index', :as => :index

    get '/core/bem' => 'core#bem', :as => :bem

    get '/core/grid' => 'core#grid', :as => :grid

    get '/core/typography' => 'core#typography', :as => :typography
    
    get '/core/header-box' => 'core#headerBox', :as  => :headerBox

    get '/core/toggle-box' => 'core#toggleBox', :as  => :toggleBox

    get '/core/link-block' => 'core#linkBlock', :as => :linkBlock

    get '/core/media-object' => 'core#mediaObject', :as => :mediaObject

    get '/core/icons' => 'core#icons', :as => :icons

    get '/core/colors' => 'core#colors', :as => :colors
end
