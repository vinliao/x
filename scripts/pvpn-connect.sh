#!/bin/bash

while true;
do
  ping -c 1 -W 3 -q google.com
  # if ping isn't successful
  if [ $? -ne 0 ]
  then

    protonvpn c -r
    # if first connect isn't succesful
    # then connect again
    while [ $? -ne 0 ];
    do
        protonvpn c -r
    done
  fi
done
