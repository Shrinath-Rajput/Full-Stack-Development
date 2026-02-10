# def evenno(a):
#     a=int(input("Enter your Number "))
#     if a%2==0:
#         print("EVeno no")
#     else:
#         print('Odd no')

# evenno(10)

# import random
# no=random.randint(0,6)
# print(no)

class vote:
    def __init__(self):
        self.name=(input("Enter your name "))
        self.age=int(input("Enter your age "))

    def votting(self):
        if self.age>=18:
            print("You go forward and give your vote")
        else:
            print('go to home')

    def average(self,d):
        self.a=int(input('First No'))
        self.b=int(input('second no'))
        self.c=int(input('third no'))
        self.d=d
        
        self.d=self.a + self.b + self.c /3
        print(self.d)
    
    def table(self):
        a=int(input('Number'))
        for n in range(1,11):
            print(a*n)

    def sum(self):
        self.n=int(input('Your No'))
        for i in self.n:
            while i==7:
                print(i)
                i+=1
                

            
                
        
s1=vote()
s1.votting()
s1.average(8)
s1.table()
s1.sum()
