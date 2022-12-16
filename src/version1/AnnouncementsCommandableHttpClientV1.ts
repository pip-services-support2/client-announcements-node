import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { AnnouncementV1 } from './AnnouncementV1';
import { IAnnouncementsClientV1 } from './IAnnouncementsClientV1';

export class AnnouncementsCommandableHttpClientV1 extends CommandableHttpClient implements IAnnouncementsClientV1 {

    constructor(config?: any) {
        super('v1/announcements');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public async getAnnouncements(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<AnnouncementV1>> {
        return await this.callCommand(
            'get_announcements',
            correlationId,
            {
                filter: filter,
                paging: paging
            }
        );
    }

    public async getRandomAnnouncement(correlationId: string, filter: FilterParams): Promise<AnnouncementV1> {
        return await this.callCommand(
            'get_random_announcement',
            correlationId,
            {
                filter: filter
            }
        );
    }

    public async getAnnouncementById(correlationId: string, announcementId: string): Promise<AnnouncementV1> {
        return await this.callCommand(
            'get_announcement_by_id',
            correlationId,
            {
                announcement_id: announcementId
            }
        );
    }

    public async createAnnouncement(correlationId: string, announcement: AnnouncementV1): Promise<AnnouncementV1> {
        return await this.callCommand(
            'create_announcement',
            correlationId,
            {
                announcement: announcement,
            }
        );
    }

    public async updateAnnouncement(correlationId: string, announcement: AnnouncementV1): Promise<AnnouncementV1> {
        return await this.callCommand(
            'update_announcement',
            correlationId,
            {
                announcement: announcement,
            }
        );
    }

    public async deleteAnnouncementById(correlationId: string, announcementId: string): Promise<AnnouncementV1> {
        return await this.callCommand(
            'delete_announcement_by_id',
            correlationId,
            {
                announcement_id: announcementId
            }
        );
    }

}
