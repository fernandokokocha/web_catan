class GamesController < ApplicationController
  def new
    render_game(generate_new_game)
  end

  def show
    render_game(generate_new_game)
  end

  def update
    case params[:commit]
    when 'Build'
      perform_settle_with_road
    when 'End turn'
      perform_end_turn
    else
      raise StandardError, "Cannot process action: #{params[:commit]}"
    end
  end

  private

  def perform_settle_with_road
    settlement_spot = Integer(params[:settlement][:spot_index])
    road_extension_spot = Integer(params[:road][:to])
    state = JSON.parse(params[:state])
    game = GameDeserializer.new(state).call
    @result = game.handle(SettleWithRoad.new(settlement_spot: settlement_spot, road_extension_spot: road_extension_spot))
    render_game(game)
  end

  def perform_end_turn
    state = JSON.parse(params[:state])
    game = GameDeserializer.new(state).call
    @result = game.handle(EndTurn.new)
    render_game(game)
  end

  def render_game(game)
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
      state: GameSerializer.new(game).call.to_json,
      turn: game.turn,
      players: game.players,
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
