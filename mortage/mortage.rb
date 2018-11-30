require 'byebug'
def calculate_mortgage()
  puts "Enter value of principle P:"
  principle=gets.chomp().to_i

  puts "Enter value of rate R:"
  rate=gets.chomp().to_i

  puts "Enter value of time T:"
  time=gets.chomp().to_i

  puts "If compound daily type d, if compound monthly type m, if compound weekly type w"
  user_input=gets.chomp()
  if user_input=="d"
    n=365
    a=principle*((1+(rate/n.to_f))**(n*time))
    puts a
  else if user_input=="m"
         n=12
         a=(principle*((1+(rate/n.to_f))**(n*time)))
         puts a
       else if user_input=="w"
              n=52
              a=principle*((1+(rate/n.to_f))**(n*time))
              puts a
            end
       end
  end
end
calculate_mortgage()