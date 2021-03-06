var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home.component';
import { NotFoundComponent } from './common/not-found.component';
import { RoleListComponent } from './role/role-list.component';
import { RoleDetailComponent } from './role/role-detail.component';
import { RoleCreateComponent } from './role/role-create.component';
import { RoleEditComponent } from './role/role-edit.component';
import { RoleFormComponent } from './role/role-form.component';
import { UserListComponent } from './user/user-list.component';
import { UserDetailComponent } from './user/user-detail.component';
import { UserCreateComponent } from './user/user-create.component';
import { UserEditComponent } from './user/user-edit.component';
import { UserFormComponent } from './user/user-form.component';
import { UserDataService } from './user/data.service';
import { RoleDataService } from './role/data.service';
var appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'role/:id', component: RoleDetailComponent },
    { path: 'role-create', component: RoleCreateComponent },
    { path: 'role-edit/:id', component: RoleEditComponent },
    { path: 'user/:id', component: UserDetailComponent },
    { path: 'user-create', component: UserCreateComponent },
    { path: 'user-edit/:id', component: UserEditComponent },
    { path: '**', component: NotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
            declarations: [
                AppComponent,
                HomeComponent,
                NotFoundComponent,
                RoleListComponent,
                RoleDetailComponent,
                RoleCreateComponent,
                RoleEditComponent,
                RoleFormComponent,
                UserListComponent,
                UserDetailComponent,
                UserCreateComponent,
                UserEditComponent,
                UserFormComponent
            ],
            providers: [UserDataService, RoleDataService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map