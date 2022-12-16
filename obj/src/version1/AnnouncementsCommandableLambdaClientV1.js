"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementsCommandableLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class AnnouncementsCommandableLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('announcements');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getAnnouncements(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_announcements', correlationId, {
                filter: filter,
                paging: paging
            });
        });
    }
    getRandomAnnouncement(correlationId, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_random_announcement', correlationId, {
                filter: filter
            });
        });
    }
    getAnnouncementById(correlationId, announcementId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_announcement_by_id', correlationId, {
                announcement_id: announcementId
            });
        });
    }
    createAnnouncement(correlationId, announcement) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('create_announcement', correlationId, {
                announcement: announcement,
            });
        });
    }
    updateAnnouncement(correlationId, announcement) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('update_announcement', correlationId, {
                announcement: announcement,
            });
        });
    }
    deleteAnnouncementById(correlationId, announcementId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('delete_announcement_by_id', correlationId, {
                announcement_id: announcementId
            });
        });
    }
}
exports.AnnouncementsCommandableLambdaClientV1 = AnnouncementsCommandableLambdaClientV1;
//# sourceMappingURL=AnnouncementsCommandableLambdaClientV1.js.map