# DsaPractice

Namaste DSA practice

# findMissingNumber.js

Find missing number from array sequence upto n
used a formula to calculate the total of 0 to n number (n \* (n +1)) / 2
here n we consider as length of array
Then get the addition of all array elements;
By substracting addition of array elements from the total calculated by formula
we get the missing number

# findSingleNumber.js

Finding the single number from array which have all elemets twice except 1.
eg. [2, 2, 1, 1, 3, 3, 4, 4, 7]; // output should be 7

**1st approach**
Creating hash list and adding number and count of appearance in it.
If number is not present in hash list assign value as 1 else increase counter.
Next for loop the elements and check which element have value 1 and return that number

**2nd approach**
Use xor (^)
loop through elements and xor. It will return the number if it is single.
Logic two similar numbers returns 0;
