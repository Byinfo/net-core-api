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
import { Router, ActivatedRoute } from '@angular/router';
import { RoleDataService } from './data.service';
var RoleEditComponent = /** @class */ (function () {
    function RoleEditComponent(dataService, router, activeRoute) {
        this.dataService = dataService;
        this.router = router;
        this.loaded = false;
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }
    RoleEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.id) {
            this.dataService.getRole(this.id)
                .subscribe(function (data) {
                _this.role = data;
                if (_this.role != null) {
                    _this.loaded = true;
                }
            }, function (error) { return _this.dataService.showError(); });
        }
    };
    RoleEditComponent.prototype.save = function () {
        var _this = this;
        this.dataService.updateRole(this.role).subscribe(function (data) { return _this.router.navigateByUrl("/"); }, function (error) { return _this.dataService.showError(); });
    };
    RoleEditComponent = __decorate([
        Component({
            templateUrl: './template/role-edit.component.html'
        }),
        __metadata("design:paramtypes", [RoleDataService, Router, ActivatedRoute])
    ], RoleEditComponent);
    return RoleEditComponent;
}());
export { RoleEditComponent };
//# sourceMappingURL=role-edit.component.js.map