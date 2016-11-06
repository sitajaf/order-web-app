#!/usr/bin/env bash

function config () {

    echo '=== Generating client config file ==='
    cd ./client
    cp client_config.example.json client_config.json
    sed -i -e "s/server_host/$SERVER_HOST/g" client_config.json

    echo '=== Generating server config file ==='
    cd ..
    cp server_config.example.json server_config.json
        sed -i -e "s/elastic_search_host/$ELASTIC_SEARCH_HOST/g" server_config.json
        sed -i -e "s/elastic_search_log_level/$ELASTIC_SEARCH_LOG_LEVEL/g" server_config.json
}

eval $1;