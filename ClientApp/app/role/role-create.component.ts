import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { RoleDataService } from './data.service';
import { Role } from './role';

@Component({
    templateUrl: './template/role-create.component.html'
})

export class RoleCreateComponent {
    create: boolean = true;
    role: Role = new Role();
    constructor(private dataService: RoleDataService, private router: Router) { }

    save() {
        this.dataService.createRole(this.role).subscribe(data => this.router.navigateByUrl("/"), error => this.dataService.showError());
    }
}