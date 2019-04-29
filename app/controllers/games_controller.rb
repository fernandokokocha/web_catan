class GamesController < ApplicationController
  def new
    render_game
  end

  def show
    render_game
  end

  def update
    settlement_spot = Integer(params[:settlement][:spot_index])
    road_extension_spot = Integer(params[:road][:to])
    @result = game.handle(SettleWithRoad.new(settlement_spot: settlement_spot, road_extension_spot: road_extension_spot))
    render_game
  end

  private

  def game
    @game ||= generate_new_game
  end

  def render_game
    spots = [{ owner: nil, color: nil, builing: nil }] * 54
    game.settlements.each do |settlement|
      spots[settlement.spot_index - 1] = {
        builing: :settlement,
        owner: settlement.owner.name,
        color: settlement.owner.color
      }
    end
    render :game, locals: {
      error: error_message,
      tiles: game.tiles.sort_by { |tile| tile.index.to_i },
      places: spots,
      roads: game.roads,
      state: GameSerializer.new(game).call,
      current_player: game.current_player
    }
  end

  def error_message
    return nil if @result.nil?
    message = @result.message
    return nil if message.empty?
    return message
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
