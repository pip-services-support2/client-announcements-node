import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { AnnouncementV1 } from './AnnouncementV1';
import { IAnnouncementsClientV1 } from './IAnnouncementsClientV1';

export class AnnouncementsLambdaClientV1 extends CommandableLambdaClient implements IAnnouncementsClientV1 {

    constructor(config?: any) {
        super('announcements');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
       
    public async getAnnouncements(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<AnnouncementV1>> {
        let timing = this.instrument(correlationId, 'announcements.get_announcements');

        try {
            return await this.callCommand(
                'get_announcements',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch(err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getRandomAnnouncement(correlationId: string, filter: FilterParams): Promise<AnnouncementV1> {
        let timing = this.instrument(correlationId, 'announcements.get_random_announcement');

        try {
            return await this.callCommand(
                'get_random_announcement',
                correlationId,
                {
                    filter: filter
                }
            );
        } catch(err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getAnnouncementById(correlationId: string, announcementId: string): Promise<AnnouncementV1> {
        let timing = this.instrument(correlationId, 'announcements.get_announcement_by_id');

        try {
            return await this.callCommand(
                'get_announcement_by_id',
                correlationId,
                {
                    announcement_id: announcementId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createAnnouncement(correlationId: string, announcement: AnnouncementV1): Promise<AnnouncementV1> {
        let timing = this.instrument(correlationId, 'announcements.create_announcement');

        try {
            return await this.callCommand(
                'create_announcement',
                correlationId,
                {
                    announcement: announcement,
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateAnnouncement(correlationId: string, announcement: AnnouncementV1): Promise<AnnouncementV1> {
        let timing = this.instrument(correlationId, 'announcements.update_announcement');

        try {
            return await this.callCommand(
                'update_announcement',
                correlationId,
                {
                    announcement: announcement,
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteAnnouncementById(correlationId: string, announcementId: string): Promise<AnnouncementV1> {
        let timing = this.instrument(correlationId, 'announcements.delete_announcement_by_id');

        try {
            return await this.callCommand(
                'delete_announcement_by_id',
                correlationId,
                {
                    announcement_id: announcementId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}
