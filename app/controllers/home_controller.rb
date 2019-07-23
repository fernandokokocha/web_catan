class HomeController < ApplicationController
  def index
    render :index, locals: { error: params[:error] }
  end
end
