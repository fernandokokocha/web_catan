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
    when 'Gain'
      perform_gain_resources
    else
      raise StandardError, "Cannot process action: #{params[:commit]}"
    end
  end

  private

  def perform_settle_with_road
    settlement_spot = Integer(params[:settlement][:spot_index])
    road_extension_spot = Integer(params[:road][:to])
    interactor = SettleWithRoad.new(settlement_spot: settlement_spot, road_extension_spot: road_extension_spot)
    handle_interactor(interactor)
  end

  def perform_end_turn
    interactor = EndTurn.new
    handle_interactor(interactor)
  end

  def perform_gain_resources
    chit = Integer(params[:tile][:chit])
    interactor = GainResources.new(chit: chit)
    handle_interactor(interactor)
  end

  def handle_interactor(interactor)
    state = JSON.parse(params[:state])
    game = GameDeserializer.new(state).call
    @result = game.handle(interactor)
    render_game(game)
  end

  def render_game(game)
    spots = (1..54).map { |index| { owner: nil, color: nil, builing: nil, index: index } }
    game.settlements.each do |settlement|
      spots[settlement.spot_index - 1][:builing] = :settlement
      spots[settlement.spot_index - 1][:owner] = settlement.owner.name
      spots[settlement.spot_index - 1][:color] = settlement.owner.color
    end
    players = game.players.sort_by { | player| player.index }.map do |player|
      OpenStruct.new(index: player.index, name: player.name, color: player.color, resources: player.resources, score: game.score(player))
    end
    render :game, locals: {
      error: error_message,
      tiles: game.tiles.sort_by { |tile| tile.index.to_i },
      places: spots,
      roads: game.roads,
      state: GameSerializer.new(game).call.to_json,
      turn: game.turn,
      players: players,
      current_player: game.current_player,
      action_taken: game.action_taken?
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
