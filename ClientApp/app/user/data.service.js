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
var UserDataService = /** @class */ (function () {
    function UserDataService(http) {
        this.http = http;
        this.url = "/api/users";
        this.alert = document.querySelector('.alert');
        if (this.alert !== null) {
            this.alert.parentElement.removeChild(this.alert);
        }
    }
    UserDataService.prototype.getUsers = function () {
        return this.http.get(this.url);
    };
    UserDataService.prototype.getUser = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    UserDataService.prototype.createUser = function (user) {
        return this.http.post(this.url, user);
    };
    UserDataService.prototype.updateUser = function (id, user) {
        return this.http.put(this.url + '/' + id, user);
    };
    UserDataService.prototype.deleteUser = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    UserDataService.prototype.showError = function () {
        if (this.alert !== null) {
            this.alert.parentElement.removeChild(this.alert);
        }
        var alert = document.createElement('div');
        alert.className = "alert alert-danger";
        alert.textContent = "Ops Error!";
        var body = document.querySelector('.body-content');
        body.insertBefore(alert, body.firstChild);
    };
    UserDataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], UserDataService);
    return UserDataService;
}());
export { UserDataService };
//# sourceMappingURL=data.service.js.map