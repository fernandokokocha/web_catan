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
    spots = [{ owner: nil, color: nil, builing: nil }] * 54
    game.settlements.each do |settlement|
      spots[settlement.spot_index] = {
        builing: :settlement,
        owner: settlement.owner.name,
        color: settlement.owner.color
      }
    end
    render :game, locals: {
      tiles: game.tiles.sort_by { |tile| tile.index.to_i },
      places: spots,
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
