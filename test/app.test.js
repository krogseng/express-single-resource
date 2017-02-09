const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const connection = require('../lib/connection');
const app = require('../lib/app');

describe('tools REST HTTP API', () => {
    const DB_URI = 'mongodb://localhost:27017/tools-test';

    before(() => connection.connect(DB_URI));
    before(() => connection.db.dropDatabase());
    after(() => connection.close());

    const request = chai.request(app);

    it('GET returns empty array of tools', () => {
        return request.get('/tools')
            .then(req => req.body)
            .then(tools => assert.deepEqual(tools, []));
    });

});