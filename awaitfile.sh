deathclock=60

printf "Waiting for file $1 "
while [ ! -f $1 ];
do
  if [ "$deathclock" == 0 ]; then
    echo " ERROR: Timeout while waiting for file $1"
    exit 1
  fi

  sleep 1
  printf '.'

  ((deathclock--))
done
