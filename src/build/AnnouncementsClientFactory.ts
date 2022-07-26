import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { AnnouncementsDirectClientV1 } from '../version1/AnnouncementsDirectClientV1';
import { AnnouncementsHttpClientV1 } from '../version1/AnnouncementsHttpClientV1';

export class AnnouncementsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-announcements', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-announcements', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-announcements', 'client', 'http', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(AnnouncementsClientFactory.DirectClientV1Descriptor, AnnouncementsDirectClientV1);
		this.registerAsType(AnnouncementsClientFactory.HttpClientV1Descriptor, AnnouncementsHttpClientV1);
	}
	
}
