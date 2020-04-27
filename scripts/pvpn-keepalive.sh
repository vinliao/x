#!/bin/bash

# check if root or not
if [ `id -u` -ne 0 ]
then
  echo "Please run as root."
  exit 1
fi

while true;
do
  echo "Checking status..."
  protonvpn status | grep Connected >/dev/null 2>&1

  # if vpn status isn't connected
  if [ $? -ne 0 ]
  then
    echo
    echo "===VPN DISCONNECTED==="
    echo "Reconnecting to vpn..."
    echo
    protonvpn c -f >/dev/null

    # if first connect isn't succesful
    # then connect again
    while [ $? -ne 0 ];
    do
        protonvpn c -f >/dev/null
    done
    protonvpn status
  fi
  echo "You are connected"
  echo
  sleep 5
done
