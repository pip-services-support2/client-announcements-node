const assert = require('chai').assert;

import { MultiString } from 'pip-services3-commons-nodex';

import { IAnnouncementsClientV1 } from '../../src/version1/IAnnouncementsClientV1';
import { PartyReferenceV1 } from '../../src/version1/PartyReferenceV1';
import { AnnouncementV1 } from '../../src/version1/AnnouncementV1';

let ANNOUNCEMENT1 = <AnnouncementV1>{
    id: '1',
    category: 'maintenance',
    creator: <PartyReferenceV1>{
        id: '1',
        name: 'Test User'
    },
    title: new MultiString({ en: 'Announcement 1' }),
    content: new MultiString({ en: 'Sample Announcement #1' })
};
let ANNOUNCEMENT2 = <AnnouncementV1>{
    id: '2',
    tags: ['TAG 1'],
    category: 'maintenance',
    creator: <PartyReferenceV1>{
        id: '1',
        name: 'Test User'
    },
    title: new MultiString({ en: 'Announcement 2' }),
    content: new MultiString({ en: 'Sample Announcement #2' })
};

export class AnnouncementsClientFixtureV1 {
    private _client: IAnnouncementsClientV1;
    
    constructor(client: IAnnouncementsClientV1) {
        this._client = client;
    }
        
    public async testCrudOperations() {
        let announcement1, announcement2;

        // Create one announcement
        let announcement = await this._client.createAnnouncement(null, ANNOUNCEMENT1);

        assert.isObject(announcement);
        assert.equal(announcement.category, ANNOUNCEMENT1.category);
        // assert.equal(announcement.content.get('en'), ANNOUNCEMENT1.content.get('en'));

        announcement1 = announcement;

        // Create another announcement
        announcement = await this._client.createAnnouncement(null, ANNOUNCEMENT2);

        assert.isObject(announcement);
        assert.equal(announcement.category, ANNOUNCEMENT2.category);
        // assert.equal(announcement.content.get('en'), ANNOUNCEMENT2.content.get('en'));

        announcement2 = announcement;

        // Get all announcements
        let page = await this._client.getAnnouncements(null, null, null);
        
        assert.isObject(page);
        assert.lengthOf(page.data, 2);

        // Update the announcement
        announcement1.content = new MultiString({ en: 'Updated Content 1' });

        assert.isObject(announcement);
        // assert.equal(announcement.content.get('en'), 'Updated Content 1');
        assert.equal(announcement.category, ANNOUNCEMENT1.category);

        announcement1 = announcement;

        // Delete announcement
        await this._client.deleteAnnouncementById(null, announcement1.id);

        // Try to get delete announcement
        announcement = await this._client.getAnnouncementById(null, announcement1.id);

        assert.isNull(announcement || null);
    }
}
