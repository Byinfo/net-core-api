var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var RoleDataService = /** @class */ (function () {
    function RoleDataService(http) {
        this.http = http;
        this.url = "/api/roles";
        this.alert = document.querySelector('.alert');
        if (this.alert !== null) {
            this.alert.parentElement.removeChild(this.alert);
        }
    }
    RoleDataService.prototype.getRoles = function () {
        return this.http.get(this.url);
    };
    RoleDataService.prototype.getRole = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    RoleDataService.prototype.createRole = function (role) {
        return this.http.post(this.url, role);
    };
    RoleDataService.prototype.updateRole = function (role) {
        return this.http.put(this.url, role);
    };
    RoleDataService.prototype.deleteRole = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    RoleDataService.prototype.showError = function () {
        if (this.alert !== null) {
            this.alert.parentElement.removeChild(this.alert);
        }
        var alert = document.createElement('div');
        alert.className = "alert alert-danger";
        alert.textContent = "Ops Error!";
        var body = document.querySelector('.body-content');
        body.insertBefore(alert, body.firstChild);
    };
    RoleDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], RoleDataService);
    return RoleDataService;
}());
export { RoleDataService };
//# sourceMappingURL=data.service.js.map