#! /bin/bash

awk 'BEGIN { FS = "/" }/usr/ { print $4 }' /etc/shells|uniq