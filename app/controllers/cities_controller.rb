class CitiesController < ApplicationController
  def index
    render json: CS.cities(:bc, :ca)
  end
end
