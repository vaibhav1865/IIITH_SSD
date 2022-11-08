import csv

data = []
with open('lab_11_data.csv', 'r') as f:
    reader = csv.reader(f)
    next(reader)
    data = [row[:-6] for row in reader]

data = list(filter(lambda x: float(x[6]) > -3, data))

open_avg = sum(map(lambda x: float(x[1].replace(',', '')), data)) / len(data)
low_avg = sum(map(lambda x: float(x[3].replace(',', '')), data)) / len(data)
high_avg = sum(map(lambda x: float(x[2].replace(',', '')), data)) / len(data)
print('Average of open: ', open_avg)

avg = [str(open_avg), str(low_avg), str(high_avg)]
# saving output of data to csv file
with open('average_output.txt', 'a') as f:
    writer = csv.writer(f)
    writer.writerow(avg)

output_avg_fd = open('average_output.txt', 'w')

output_avg_fd.write(str(open_avg)+'\n')
output_avg_fd.write(str(low_avg)+'\n')
output_avg_fd.write(str(high_avg)+'\n')
c = input(
    "Enter any Character from A-Z to list all stock data starting with that character: ")
output_stock_fd = open('stock output.txt', 'w')

list_stocks = []
for it in data:
    if it[0][0] == c:
        output_stock_fd.write(str(" ".join(it))+'\n')
