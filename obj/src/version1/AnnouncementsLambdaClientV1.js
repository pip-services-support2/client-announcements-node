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
exports.AnnouncementsLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class AnnouncementsLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('announcements');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getAnnouncements(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'announcements.get_announcements');
            try {
                return yield this.callCommand('get_announcements', correlationId, {
                    filter: filter,
                    paging: paging
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getRandomAnnouncement(correlationId, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'announcements.get_random_announcement');
            try {
                return yield this.callCommand('get_random_announcement', correlationId, {
                    filter: filter
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getAnnouncementById(correlationId, announcementId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'announcements.get_announcement_by_id');
            try {
                return yield this.callCommand('get_announcement_by_id', correlationId, {
                    announcement_id: announcementId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    createAnnouncement(correlationId, announcement) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'announcements.create_announcement');
            try {
                return yield this.callCommand('create_announcement', correlationId, {
                    announcement: announcement,
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateAnnouncement(correlationId, announcement) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'announcements.update_announcement');
            try {
                return yield this.callCommand('update_announcement', correlationId, {
                    announcement: announcement,
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteAnnouncementById(correlationId, announcementId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'announcements.delete_announcement_by_id');
            try {
                return yield this.callCommand('delete_announcement_by_id', correlationId, {
                    announcement_id: announcementId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.AnnouncementsLambdaClientV1 = AnnouncementsLambdaClientV1;
//# sourceMappingURL=AnnouncementsLambdaClientV1.js.map