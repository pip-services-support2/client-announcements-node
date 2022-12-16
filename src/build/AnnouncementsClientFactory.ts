import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { AnnouncementsDirectClientV1 } from '../version1/AnnouncementsDirectClientV1';
import { AnnouncementsCommandableHttpClientV1 } from '../version1/AnnouncementsCommandableHttpClientV1';
import { AnnouncementsLambdaFunction } from 'service-announcements-node';

export class AnnouncementsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-announcements', 'factory', 'default', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-announcements', 'client', 'direct', 'default', '1.0');
	public static CmdHttpClientV1Descriptor = new Descriptor('service-announcements', 'client', 'commandable-http', 'default', '1.0');
	public static CmdLambdaClientV1Descriptor = new Descriptor('service-announcements', 'client', 'commandable-lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(AnnouncementsClientFactory.DirectClientV1Descriptor, AnnouncementsDirectClientV1);
		this.registerAsType(AnnouncementsClientFactory.CmdHttpClientV1Descriptor, AnnouncementsCommandableHttpClientV1);
		this.registerAsType(AnnouncementsClientFactory.CmdLambdaClientV1Descriptor, AnnouncementsLambdaFunction);
	}
	
}
