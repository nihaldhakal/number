def is_prime(number)
  (2...number).each do |num|
    if (number%num==0)
      return false
    end
  end
  return true
end

def check_prime()
  prime_num=Array.new
  input_num=gets.chomp()
  (2...input_num.to_i).each do |num|
    if (is_prime(num)==true)
      prime_num.push(num)
      puts num
      continue?()
    end
  end
end

def continue?()
  puts "Do you want to continue?"
  input_num = gets.chomp()
  if (input_num !="y")
    Kernel.exit(true)
  end
end

check_prime()