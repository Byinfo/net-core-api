import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from './data.service';
import { IUser } from './user';

@Component({
    templateUrl: './template/user-detail.component.html',
})

export class UserDetailComponent implements OnInit {
    id: number;
    user: IUser;
    loaded: boolean = false;

    constructor(private dataService: UserDataService, activeRoute: ActivatedRoute) {
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
}