#!/bin/bash

cat $1|grep -oEw "[Aa]\w+"
