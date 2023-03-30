costs = [1.15,1.25,2.50,2.45,3.74,2.00]
quarters = []

for cost in costs:
    if(cost % 0.25 == 0):
        quarters.append(cost)

print(quarters)
