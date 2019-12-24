#!/bin/bash

# ping google
# if fail, reconnect
# if can't reconnect, then the internet is dead

while true;
do
  ping -c1 google.com
  # if ping isn't successful
  if [ $? -ne 0 ]
  then

    protonvpn c -r

    while [ $? -ne 0 ];
    do
        protonvpn c -r
    done
  fi
done
