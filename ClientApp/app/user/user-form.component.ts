import { Component, Input } from '@angular/core';

import { IUser } from './user';

import { RoleDataService } from '../role/data.service';
import { Role } from '../role/role';

@Component({
    selector: "user-form",
    templateUrl: './template/user-form.component.html'
})

export class UserFormComponent {
    @Input() formMode: false;
    @Input() user: IUser;
    roles: Role[];

    constructor(private dataService: RoleDataService) {
        this.dataService.getRoles().subscribe((data: Role[]) => this.roles = data);
    }
}