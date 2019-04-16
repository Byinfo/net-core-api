var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { User } from './user';
var UserComponent = /** @class */ (function () {
    function UserComponent(dataService) {
        this.dataService = dataService;
        this.user = new User();
        this.table = true;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    UserComponent.prototype.loadUsers = function () {
        var _this = this;
        this.dataService.getUsers()
            .subscribe(function (data) { return _this.users = data; });
    };
    UserComponent.prototype.editUser = function (u) {
        this.user = u;
    };
    UserComponent.prototype.save = function () {
        var _this = this;
        if (this.user.id == null) {
            this.dataService.createUser(this.user)
                .subscribe(function (data) { return _this.users.push(data); });
        }
        else {
            this.dataService.updateUser(this.user)
                .subscribe(function (data) { return _this.loadUsers(); });
        }
        this.cancel();
    };
    UserComponent.prototype.delete = function (u) {
        var _this = this;
        this.dataService.deleteUser(u.id)
            .subscribe(function (data) { return _this.loadUsers(); });
    };
    UserComponent.prototype.add = function () {
        this.cancel();
        this.table = false;
    };
    UserComponent.prototype.cancel = function () {
        this.user = new User();
        this.table = true;
    };
    UserComponent = __decorate([
        Component({
            templateUrl: './template/user.components.html',
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], UserComponent);
    return UserComponent;
}());
export { UserComponent };
//# sourceMappingURL=user.component.js.map