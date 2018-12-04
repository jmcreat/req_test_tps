#!/bin/bash
if [ "$1" -gt "-1" ]
  then echo hi
  echo $1 tps 를 15 초간 유지
else echo ./request.sh '숫자' 를 입력 ex ./request.sh 10 - tps 10 요청
fi

for i in `seq 1 $1`
do
echo "looping ... number $i"
nohup node request.js &
done
