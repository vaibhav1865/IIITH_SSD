#! /bin/bash

n=$(wc -l < $1)

if [ `expr $n % 2` == 0 ]
then
    n=$((n/2))
else
    n=$((n/2+1))
fi
awk -v line=$n 'NR==line{print $0}' $1

