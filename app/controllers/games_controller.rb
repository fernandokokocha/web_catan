class GamesController < ApplicationController
  def new
    render_game
  end

  def show
    render_game
  end

  def update
    game.handle(SettleWithRoad.new(settlement_spot: 1, road_extension_spot: 2))
    game.handle(EndTurn.new)
    render_game
  end

  private

  def game
    @game ||= generate_new_game
  end

  def render_game
    render :game, locals: {
      tiles: game.tiles.sort_by { |tile| tile.index.to_i },
      places: [nil] * 54,
      state: GameSerializer.new(game).call,
      current_player: game.current_player
    }
  end

  def generate_new_game
    Game.new.tap do |game|
      game.handle(
        SetupGame.new(
          players_params: [
            { name: 'Bartek', color: :orange },
            { name: 'John', color: :red }
          ]
        )
      )
    end
  end
end
