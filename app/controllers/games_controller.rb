class GamesController < ApplicationController
  def new
    generate_new_game
  end

  private

  def generate_new_game
    players = [
      { name: 'Bartek', color: :orange },
      { name: 'John', color: :red }
    ]
    response = SetupGame.new(players: players).invoke

    @catan = Catan.new
    @catan.map = response[:map]
    @catan.players = response[:players]
    @catan.current_player = response[:current_player]
    @catan.turn = response[:turn]
  end
end
