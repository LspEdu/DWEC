#!/bin/sh



echo Introduce primer num de act

read pact

echo Introduce ultimo numero de act

read uact

echo $pact

c=$pact

while [$pact < $uact]
do
    echo $c
    let c=$c+1
    
done