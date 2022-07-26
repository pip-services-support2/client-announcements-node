"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const AnnouncementsDirectClientV1_1 = require("../version1/AnnouncementsDirectClientV1");
const AnnouncementsHttpClientV1_1 = require("../version1/AnnouncementsHttpClientV1");
class AnnouncementsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(AnnouncementsClientFactory.DirectClientV1Descriptor, AnnouncementsDirectClientV1_1.AnnouncementsDirectClientV1);
        this.registerAsType(AnnouncementsClientFactory.HttpClientV1Descriptor, AnnouncementsHttpClientV1_1.AnnouncementsHttpClientV1);
    }
}
exports.AnnouncementsClientFactory = AnnouncementsClientFactory;
AnnouncementsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-announcements', 'factory', 'default', 'default', '1.0');
AnnouncementsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-announcements', 'client', 'direct', 'default', '1.0');
AnnouncementsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-announcements', 'client', 'http', 'default', '1.0');
//# sourceMappingURL=AnnouncementsClientFactory.js.map