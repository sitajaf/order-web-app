#!/usr/bin/env bash

function config () {
    cd ./client
    cp client_config.example.json config.json
    sed -i -e "s/server_host/$SERVER_HOST/g" config.json

    cd ..

    cp server_config.example.json server_config.json
        sed -i -e "s/elastic_search_host/$ELASTIC_SEARCH_HOST/g" config.json
        sed -i -e "s/elastic_search_log_level/$ELASTIC_SEARCH_LOG_LEVEL/g" config.json
}

eval $1;