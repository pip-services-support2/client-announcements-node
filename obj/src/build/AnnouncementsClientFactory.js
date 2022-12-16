"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const AnnouncementsDirectClientV1_1 = require("../version1/AnnouncementsDirectClientV1");
const AnnouncementsCommandableHttpClientV1_1 = require("../version1/AnnouncementsCommandableHttpClientV1");
const service_announcements_node_1 = require("service-announcements-node");
class AnnouncementsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(AnnouncementsClientFactory.DirectClientV1Descriptor, AnnouncementsDirectClientV1_1.AnnouncementsDirectClientV1);
        this.registerAsType(AnnouncementsClientFactory.CmdHttpClientV1Descriptor, AnnouncementsCommandableHttpClientV1_1.AnnouncementsCommandableHttpClientV1);
        this.registerAsType(AnnouncementsClientFactory.CmdLambdaClientV1Descriptor, service_announcements_node_1.AnnouncementsLambdaFunction);
    }
}
exports.AnnouncementsClientFactory = AnnouncementsClientFactory;
AnnouncementsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-announcements', 'factory', 'default', 'default', '1.0');
AnnouncementsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-announcements', 'client', 'direct', 'default', '1.0');
AnnouncementsClientFactory.CmdHttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-announcements', 'client', 'commandable-http', 'default', '1.0');
AnnouncementsClientFactory.CmdLambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-announcements', 'client', 'commandable-lambda', 'default', '1.0');
//# sourceMappingURL=AnnouncementsClientFactory.js.map