#!/usr/bin/env bash

function config () {

    echo '=== Generating client config file ==='
    cd ./client
    cp client_config.example.json client_config.json
    sed -i -e "s/server_host/$SERVER_HOST/g" client_config.json

}

eval $1;