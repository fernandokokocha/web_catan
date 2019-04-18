class GamesController < ApplicationController
  def new
    generate_new_game
  end

  private

  def generate_new_game
    @game = Game.new
    players = [
      { name: 'Bartek', color: :orange },
      { name: 'John', color: :red }
    ]
    setup_game = SetupGame.new(players_params: players)
    @game.handle(setup_game)

    @tiles = @game.tiles.sort_by { |tile| tile.index.to_i }
    @places = [nil] * 54
    @state = GameSerializer.new(@game).call
  end
end
