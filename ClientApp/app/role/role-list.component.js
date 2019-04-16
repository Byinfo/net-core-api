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
import { RoleDataService } from './data.service';
var RoleListComponent = /** @class */ (function () {
    function RoleListComponent(dataService) {
        this.dataService = dataService;
    }
    RoleListComponent.prototype.ngOnInit = function () {
        this.load();
    };
    RoleListComponent.prototype.load = function () {
        var _this = this;
        this.dataService.getRoles()
            .subscribe(function (data) { return _this.roles = data; }, function (error) { return _this.dataService.showError(); });
    };
    RoleListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dataService.deleteRole(id)
            .subscribe(function (data) { return _this.load(); }, function (error) { return _this.dataService.showError(); });
    };
    RoleListComponent = __decorate([
        Component({
            selector: 'role-list',
            templateUrl: './template/role-list.component.html',
        }),
        __metadata("design:paramtypes", [RoleDataService])
    ], RoleListComponent);
    return RoleListComponent;
}());
export { RoleListComponent };
//# sourceMappingURL=role-list.component.js.map