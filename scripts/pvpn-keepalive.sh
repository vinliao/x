#!/bin/bash

while true;
do
  echo "Checking status..."
  ping -c1 protonvpn.com >/dev/null 2>&1

  # if ping isn't successful
  if [ $? -ne 0 ]
  then
    echo
    echo "===PING FAILED==="
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
  echo "Your internet is fine"
  echo
  sleep 5
done
