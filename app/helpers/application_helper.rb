module ApplicationHelper
  def box_class(player)
    case player.color
    when :orange
      'has-background-warning'
    when :red
      'has-background-danger'
    else
      'has-background-white'
    end
  end
end
