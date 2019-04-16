import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserDataService } from './data.service';
import { IUser } from './user';



@Component({
    templateUrl: './template/user-edit.component.html'
})

export class UserEditComponent implements OnInit {
    id: number;
    user: IUser;
    create: boolean = false;
    loaded: boolean = false;

    constructor(private dataService: UserDataService, private router: Router, activeRoute: ActivatedRoute) {
        this.id = Number.parseInt(activeRoute.snapshot.params["id"]);
    }

    ngOnInit() {
        if (this.id) {
            this.dataService.getUser(this.id)
                .subscribe((data: IUser) => {
                    this.user = data;

                    if (this.user != null) {
                        this.loaded = true;
                    } 
                }, error => this.dataService.showError());
        }
    }

    save() {
        this.dataService.updateUser(this.id, this.user).subscribe(data => this.router.navigateByUrl("/"), error => this.dataService.showError());
    }
}