#!/usr/bin/env bash

function config () {
    cd ./client
    cp config.example.json config.json
    sed -i -e "s/server_host/$SERVER_HOST/g" config.json
    sed -i -e "s/server_port/$PORT/g" config.json
}

eval $1;