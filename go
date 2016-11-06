#!/usr/bin/env bash

function config () {
    cd ./client
    cp client_config.example.json config.json
    sed -i -e "s/server_host/$SERVER_HOST/g" config.json
}

eval $1;