import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { AnnouncementsMemoryPersistence } from 'service-announcements-node';
import { AnnouncementsController } from 'service-announcements-node';
import { AnnouncementsHttpServiceV1 } from 'service-announcements-node';
import { AnnouncementsHttpClientV1 } from '../../src/version1/AnnouncementsHttpClientV1';
import { AnnouncementsClientFixtureV1 } from './AnnouncementsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('AnnouncementsHttpClientV1', ()=> {
    let service: AnnouncementsHttpServiceV1;
    let client: AnnouncementsHttpClientV1;
    let fixture: AnnouncementsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new AnnouncementsMemoryPersistence();
        let controller = new AnnouncementsController();

        service = new AnnouncementsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-announcements', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-announcements', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-announcements', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new AnnouncementsHttpClientV1();
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
