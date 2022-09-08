The Folder contains :
q1.sh : To execute use bash "q1.sh path_of_input_file" or "./q1.sh path_of_input_file"
q2.sh : To execute use bash "q2.sh" or "./q2.sh"


Approach for q1:To execute q1.sh,a input file path must be passed as an argument to this script.
It fetches number of lines from input file retrived from path passed as argument and stores it in a variable lets say n then checks if number of lines are odd or even, if number of lines are even it prints the middle line i.e (n/2) and if the number of lines are odd it prints the middle line i.e (n/2 +1).

Approach for q2 : This script uses a file /etc/shells that contains information about all the shells of the system,Then we use "/" as the field separator which formats the file into columns using "/" .Then we print the last column which has usr's unique shell names..

Author Name-Vaibhav Saxena
