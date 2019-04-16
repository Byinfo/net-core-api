import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleDataService } from './data.service';
import { Role } from './role';

@Component({
    templateUrl: './template/role-edit.component.html'
})

export class RoleEditComponent implements OnInit {
    id: number;
    role: Role;
    loaded: boolean = false;

    constructor(private dataService: RoleDataService, private router: Router, activeRoute: ActivatedRoute) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id) {
            this.dataService.getRole(this.id)
                .subscribe((data: Role) => {
                    this.role = data;
                    if (this.role != null) {
                        this.loaded = true;
                    } 
                }, error => this.dataService.showError());
        }
    }

    save() {
        this.dataService.updateRole(this.role).subscribe(data => this.router.navigateByUrl("/"), error => this.dataService.showError());
    }
}