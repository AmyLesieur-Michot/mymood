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
exports.Blacklist = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Blacklist = class Blacklist extends typeorm_1.BaseEntity {
    id;
    student;
    supervisor;
};
exports.Blacklist = Blacklist;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Blacklist.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.students),
    __metadata("design:type", User_1.User)
], Blacklist.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.supervisors),
    __metadata("design:type", User_1.User)
], Blacklist.prototype, "supervisor", void 0);
exports.Blacklist = Blacklist = __decorate([
    (0, typeorm_1.Entity)()
], Blacklist);
