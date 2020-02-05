#!/bin/bash

while true;
do
  ping -c 1 -W 3 -q google.com
  # if ping isn't successful
  if [ $? -ne 0 ]
  then

    protonvpn c -f
    # if first connect isn't succesful
    # then connect again
    while [ $? -ne 0 ];
    do
        protonvpn c -f
    done
  fi
done
