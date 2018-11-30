# def fib(num)
#   return  num  if ( 0..1 ).include? num
#   ( fib( num - 1 ) + fib( num - 2 ) )
# end
# puts fib(7)
# def fib(num)
# if num==1 || num==0
#   return num
# else
#   return (fib(num-1)+fib(num-2))
# end
# end
# puts fib(10)
def fib(num)
  n1=0
  n2=1
  nt=n1+n2
(1...num).each do
puts nt
n1=n2
n2=nt
nt= n1+n2
end
end
 fib(10)