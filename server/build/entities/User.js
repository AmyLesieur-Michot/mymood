"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Mood_1 = require("./Mood");
const Alert_1 = require("./Alert");
const Blacklist_1 = require("./Blacklist");
const Group_1 = require("./Group");
let User = class User extends typeorm_1.BaseEntity {
    id;
    first_name;
    last_name;
    email;
    password;
    student;
    supervisor;
    admin;
    moods;
    alerts;
    students;
    supervisors;
    groups;
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], User.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], User.prototype, "supervisor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], User.prototype, "admin", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Mood_1.Mood, (mood) => mood.user),
    __metadata("design:type", Array)
], User.prototype, "moods", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Alert_1.Alert, (alert) => alert.user),
    __metadata("design:type", Array)
], User.prototype, "alerts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Blacklist_1.Blacklist, (blacklist) => blacklist.student),
    __metadata("design:type", Array)
], User.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Blacklist_1.Blacklist, (blacklist) => blacklist.supervisor),
    __metadata("design:type", Array)
], User.prototype, "supervisors", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Group_1.Group),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], User.prototype, "groups", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
