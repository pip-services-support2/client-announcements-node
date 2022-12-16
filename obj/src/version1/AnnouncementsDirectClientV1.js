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
exports.AnnouncementsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class AnnouncementsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_2.Descriptor("service-announcements", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getAnnouncements(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'announcements.get_announcements');
            try {
                let res = yield this._controller.getAnnouncements(correlationId, filter, paging);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getRandomAnnouncement(correlationId, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'announcements.get_random_announcement');
            try {
                let res = yield this._controller.getRandomAnnouncement(correlationId, filter);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getAnnouncementById(correlationId, announcementId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'announcements.get_announcement_by_id');
            try {
                let res = yield this._controller.getAnnouncementById(correlationId, announcementId);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    createAnnouncement(correlationId, announcement) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'announcements.create_announcement');
            try {
                let res = yield this._controller.createAnnouncement(correlationId, announcement);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    updateAnnouncement(correlationId, announcement) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'announcements.update_announcement');
            try {
                let res = yield this._controller.updateAnnouncement(correlationId, announcement);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deleteAnnouncementById(correlationId, announcementId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'announcements.delete_announcement_by_id');
            try {
                let res = yield this._controller.deleteAnnouncementById(correlationId, announcementId);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.AnnouncementsDirectClientV1 = AnnouncementsDirectClientV1;
//# sourceMappingURL=AnnouncementsDirectClientV1.js.map