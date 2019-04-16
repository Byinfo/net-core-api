import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserDataService } from './data.service';
import { IUser, IndexUser } from './user';

@Component({
    templateUrl: './template/user-create.component.html'
})

export class UserCreateComponent {
    create: boolean = true;
    user: IUser = new IndexUser();

    constructor(private dataService: UserDataService, private router: Router) {
    }

    save() {
        this.dataService.createUser(this.user).subscribe(data => this.router.navigateByUrl("/"), error => this.dataService.showError());
    }
}