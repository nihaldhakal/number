def prime_factor(number)
  factor=Array.new
  (2...number).each do |num|
    if (number%num==0)
      factor.push(num)
    end
  end
  puts "Factors are"
  puts factor

  primeFactor = Array.new
  factor.each do |num|
    if (is_prime(num)==true)
      primeFactor.push(num)
    end
  end
  puts "Prime factors are"
  puts primeFactor
end

def is_prime(number)
  (2...number).each do |num|
    if (number%num==0)
      return false
    end
  end
  return true
end

puts prime_factor(100)