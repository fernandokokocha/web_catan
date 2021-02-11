class GamesController < ApplicationController
  def create
    game = Game.new
    @result = game.handle(interactor)
    redirect_to({ controller: :home, action: :index }, flash: { error: error_message }) and return if error_message
    render_game(game)
  end

  def update
    handle_interactor(interactor)
  end

  private

  def sanitize_player_params
    [
      params['player_1'],
      params['player_2'],
      params['player_3'],
      params['player_4']
    ].select { |player_params| player_params[:name].present? }
  end

  def interactor
    case params[:commit]
    when 'New game'
      setup_game
    when 'Settle with road'
      settle_with_road
    when 'Gain resources'
      gain_resources
    when 'Buy card'
      buy_card
    when 'Buy road'
      buy_road
    when 'Buy settlement'
      buy_settlement
    when 'End turn'
      end_turn
    else
      raise StandardError, "Cannot process action: #{params[:commit]}"
    end
  end

  def setup_game
    SetupGame.new(players_params: sanitize_player_params)
  end

  def settle_with_road
    settlement_spot = Integer(params[:settlement][:spot_index])
    road_extension_spot = Integer(params[:road][:to])
    SettleWithRoad.new(settlement_spot: settlement_spot, road_extension_spot: road_extension_spot)
  end

  def end_turn
    EndTurn.new
  end

  def gain_resources
    chit = Integer(params[:tile][:chit])
    GainResources.new(chit: chit)
  end

  def buy_card
    BuyCard.new
  end

  def buy_settlement
    spot_index = Integer(params[:settlement][:spot_index])
    BuySettlement.new(spot_index: spot_index)
  end

  def buy_road
    from = Integer(params[:road][:from])
    to = Integer(params[:road][:to])
    BuyRoad.new(from_index: from, to_index: to)
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
end
