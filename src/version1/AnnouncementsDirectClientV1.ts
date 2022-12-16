import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { AnnouncementV1 } from './AnnouncementV1';
import { IAnnouncementsClientV1 } from './IAnnouncementsClientV1';

export class AnnouncementsDirectClientV1 extends DirectClient<any> implements IAnnouncementsClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-announcements", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getAnnouncements(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<AnnouncementV1>> {
        let timing = this.instrument(correlationId, 'announcements.get_announcements');

        try {
            let res = await this._controller.getAnnouncements(correlationId, filter, paging);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
        
    }

    public async getRandomAnnouncement(correlationId: string, filter: FilterParams): Promise<AnnouncementV1> {
        let timing = this.instrument(correlationId, 'announcements.get_random_announcement');

        try {
            let res = await this._controller.getRandomAnnouncement(correlationId, filter);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getAnnouncementById(correlationId: string, announcementId: string): Promise<AnnouncementV1> {
        let timing = this.instrument(correlationId, 'announcements.get_announcement_by_id');
        
        try {
            let res = await this._controller.getAnnouncementById(correlationId, announcementId);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async createAnnouncement(correlationId: string, announcement: AnnouncementV1): Promise<AnnouncementV1> {
        let timing = this.instrument(correlationId, 'announcements.create_announcement');
        
        try {
            let res = await this._controller.createAnnouncement(correlationId, announcement);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async updateAnnouncement(correlationId: string, announcement: AnnouncementV1): Promise<AnnouncementV1> {
        let timing = this.instrument(correlationId, 'announcements.update_announcement');

        try {
            let res = await this._controller.updateAnnouncement(correlationId, announcement);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async deleteAnnouncementById(correlationId: string, announcementId: string): Promise<AnnouncementV1> {
        let timing = this.instrument(correlationId, 'announcements.delete_announcement_by_id');
        
        try {
            let res = await this._controller.deleteAnnouncementById(correlationId, announcementId);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

}