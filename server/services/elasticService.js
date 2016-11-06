const elasticSearch = require('elasticsearch');

class ElasticSearchService {
    constructor() {
        let config = null;

        try {
            config: require('../../server_config.json');
        } catch (err) {
            console.log('Failed to load config fail! \n:', err);
            process.exit(1);
        }

        this.client = new elasticSearch.Client({
            host: process.env.ELASTIC_SEARCH_HOST || config.elasticSearch.host,
            log: process.env.ELASTIC_SEARCH_LOG_LEVEL || config.elasticSearch.logLevel
        });
        this.serverIndex = 'order-app';
    }

    add(type, data) {
        return this.client.create({
            index: this.serverIndex,
            type: type,
            body: data,
            refresh: true
        }).then((response) => {
            return response._id;
        });
    }
}

module.exports = ElasticSearchService;