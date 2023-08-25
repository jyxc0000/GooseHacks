#Temperature: larger than 5, given 1
#Wind: between 5 and 19:2, 19 and 33: 4, 33 and 47: 8
#Relative Humidity: <30: 2 points
import os
f = open("data/data.txt", "w")
def run(d):
    directory = d
    max = 0
    for filename in os.listdir(directory):
        if filename.endswith(".txt"):
            file_path = os.path.join(directory, filename)
            file = open(file_path, 'r')
            i = 0
            id = 0
            for line in file:
                content = float(line.strip())
                if i == 0:
                    if content > 5:
                        id += 1
                elif i == 1:
                    if content>=0 and content<5:
                        id += 0 
                    elif content>=5 and 19>content:
                        id += 2
                    elif content >= 19 and content < 33:
                        id += 4
                    else:
                        id += 8
                elif i == 2:
                    if content < 30:
                        id += 2
                i+=1
                if id>max:
                    max = id
            f.write(filename + ": " + str(id))
            f.write("\n")
            
        
    f.write(str(directory) + " overall: " + str(max))
    f.write("\n")
    f.write("---------------------")
    f.write("\n")
run("data/BC Rockies")
run("data/Northern BC")
run("data/The Islands")
run("data/Thompson Okanagon")
run("data/Vancouver Coast & Mountains")
run("data/Alberta")
run("data/Manitoba")
run("data/New Brunswick")
run("data/Nova Scotia")
run("data/Ontario")
f.close()

