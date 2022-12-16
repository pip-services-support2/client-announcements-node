import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { AnnouncementsMemoryPersistence } from 'service-announcements-node';
import { AnnouncementsController } from 'service-announcements-node';
import { AnnouncementsCommandableHttpServiceV1 } from 'service-announcements-node';
import { AnnouncementsCommandableHttpClientV1 } from '../../src/version1/AnnouncementsCommandableHttpClientV1';
import { AnnouncementsClientFixtureV1 } from './AnnouncementsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('AnnouncementsCommandableHttpClientV1', ()=> {
    let service: AnnouncementsCommandableHttpServiceV1;
    let client: AnnouncementsCommandableHttpClientV1;
    let fixture: AnnouncementsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new AnnouncementsMemoryPersistence();
        let controller = new AnnouncementsController();

        service = new AnnouncementsCommandableHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-announcements', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-announcements', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-announcements', 'service', 'commanadable-http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new AnnouncementsCommandableHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new AnnouncementsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
