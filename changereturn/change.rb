require 'byebug'
def change_return
  cost, money_given = user_input
  quarter, dime, nickel, pennies = change_to_be_made
  if money_given<cost
    puts"less money is given"
  else
    change= (money_given-cost)

    if(change/quarter!=0)
      quarter_change=change/quarter
      change = change-(quarter_change*quarter)
    end

    if  change/dime!= 0
      dime_change= change/dime
      change =change-(dime_change*dime)
    end

    if change/nickel != 0
      nickel_change=change/nickel
      change=change-(nickel_change*nickel)
    end

    if change/pennies != 0
      pennies_change=change/pennies
    end
    puts"You will receive\n #{quarter_change} quarter,\n #{dime_change} dime,\n #{nickel_change} nickel,\n #{pennies_change} pennies"
  end
end

def user_input
  puts"Enter the cost of the item"
  cost=gets.chomp().to_f
  cost = (cost*100).to_i
  puts "Enter the money given by the customer"
  money_given=gets.chomp().to_f
  money_given=(money_given*100).to_i
  return cost, money_given
end

def change_to_be_made
  quarter=25
  dime=10
  nickel=5
  pennies=1
  return quarter, dime, nickel, pennies
end

change_return