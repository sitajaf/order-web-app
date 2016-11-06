#!/usr/bin/env bash

function config () {
    cd ./client
    cp config.example.json config.json
    sed -i -e "s/app_port/$PORT/g" config.json
}

eval $1;