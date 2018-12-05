require 'byebug'

def binary_to_decimal(number)
  number = number.to_i(2)
  puts number
end

def decimal_to_binary(number)
  number=number.to_i
  number=number.to_s(2)
  puts number
end


def user_input
  puts"Enter a number to be converted"
  number=gets.chomp()
  puts"Enter b to convert binary to decimal and enter d to covert decimal to binary"
  user_data=gets.chomp()
  if user_data=="b"
    return binary_to_decimal(number)
  else if user_data == "d"
         return decimal_to_binary(number)
       end
  end
end

user_input




# Test

# def user_input
#   gets.chomp().to_i
#   # return binary_to_decimal(number)
# end
#
# decimal_to_binary


#
# def decimal_to_binary
# number=gets.chomp()
# number=number.split("").map{|s| s.to_i.to_s(2)}.join
# puts number
# end
#   decimal_to_binary
#
#


# return binary_to_decimal(number), decimal_to_binary(number)