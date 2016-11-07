const elasticSearch = require('elasticsearch');
const uuid = require('uuid');

class ElasticSearchService {
    constructor() {
        let config = null;

        try {
            config = require('../../server_config.json');
            console.log('==== config: ', config);
            console.log('file loaded')
        } catch (err) {
            console.log('Failed to load server config! \n' +
                'Ensure environment variables are set at least!');
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
            id: uuid.v4()
        });
    }

    get(type, id) {
        return this.client.get({
            index: this.serverIndex,
            type: type,
            id: id
        });
    }

    update(type, id, data) {
        return this.client.update({
            index: this.serverIndex,
            type: type,
            id: id,
            body: {
                doc: data
            }
        });
    }

}

module.exports = ElasticSearchService;