import { Component, OnInit } from '@angular/core';
import { RoleDataService } from './data.service';
import { Role } from './role';

@Component({
    selector: 'role-list',
    templateUrl: './template/role-list.component.html',
})

export class RoleListComponent implements OnInit {
    roles: Role[];

    constructor(private dataService: RoleDataService) { }

    ngOnInit() {
        this.load();
    }

    load() {
        this.dataService.getRoles()
            .subscribe((data: Role[]) => this.roles = data, error => this.dataService.showError());
    }

    delete(id: number) {
        this.dataService.deleteRole(id)
            .subscribe(data => this.load(), error => this.dataService.showError());
    }
}