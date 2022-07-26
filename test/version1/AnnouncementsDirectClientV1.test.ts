import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { AnnouncementsMemoryPersistence } from 'service-announcements-node';
import { AnnouncementsController } from 'service-announcements-node';
import { AnnouncementsDirectClientV1 } from '../../src/version1/AnnouncementsDirectClientV1';
import { AnnouncementsClientFixtureV1 } from './AnnouncementsClientFixtureV1';

suite('AnnouncementsDirectClientV1', ()=> {
    let client: AnnouncementsDirectClientV1;
    let fixture: AnnouncementsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new AnnouncementsMemoryPersistence();
        let controller = new AnnouncementsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-announcements', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-announcements', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new AnnouncementsDirectClientV1();
        client.setReferences(references);

        fixture = new AnnouncementsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
