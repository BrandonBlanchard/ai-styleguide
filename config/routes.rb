Rails.application.routes.draw do

    # Need to find a way to do pattern matching that maps to a controller/action
    get '/' => 'core#index'

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

    get '/core/link-handler' => 'core#link_handler', :as => :link_handler

    get '/core/tabs' => 'core#tabs', :as => :tabs

    get '/core/buttons' => 'core#buttons', :as => :buttons

    get '/core/modal' => 'core#modal', :as => :modal

    get '/core/loaders' => 'core#loader', :as => :loaders

    get '/core/input-elements' => 'core#input', :as => :input_elements

    get '/core/select-list' => 'core#selectList', :as => :select_list

    get '/core/tables' => 'core#tables', :as => :tables

    get '/core/toggle' => 'core#toggle', :as => :toggle

    get '/core/data-binder' => 'core#dataBinder', :as => :data_binder

end
