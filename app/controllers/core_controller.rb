class CoreController < ApplicationController
  
  def index
    
    render 'index'
  end

  def bem
    
    render 'bem'
  end

  def typography
    
    render 'typography'
  end

  def headerBox

    render 'header-box'
  end

  def linkBlock

    render 'linkBlock'
  end

  def toggleBox

    render 'toggle-box'
  end

  def mediaObject
  
    render 'media-object'
  end

  def grid
  
    render 'grid'
  end

  def icons

    render 'icons'
  end

  def colors

    render 'colors'
  end

  def link_handler
    render 'link-handler'
  end

  def buttons
    render 'buttons'
  end

  def modal
    render 'modal'
  end

  def input
    render 'input-elements'
  end

end
