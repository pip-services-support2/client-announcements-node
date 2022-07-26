import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';
import { AnnouncementV1 } from './AnnouncementV1';
import { IAnnouncementsClientV1 } from './IAnnouncementsClientV1';
export declare class AnnouncementsDirectClientV1 extends DirectClient<any> implements IAnnouncementsClientV1 {
    constructor(config?: any);
    getAnnouncements(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<AnnouncementV1>>;
    getRandomAnnouncement(correlationId: string, filter: FilterParams): Promise<AnnouncementV1>;
    getAnnouncementById(correlationId: string, announcementId: string): Promise<AnnouncementV1>;
    createAnnouncement(correlationId: string, announcement: AnnouncementV1): Promise<AnnouncementV1>;
    updateAnnouncement(correlationId: string, announcement: AnnouncementV1): Promise<AnnouncementV1>;
    deleteAnnouncementById(correlationId: string, announcementId: string): Promise<AnnouncementV1>;
}
