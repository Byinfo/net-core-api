import { Component, OnInit } from '@angular/core';
import { UserDataService } from './data.service';
import { IUser } from './user';

@Component({
    selector: 'user-list',
    templateUrl: './template/user-list.component.html',
})
export class UserListComponent implements OnInit {
    users: IUser[];

    constructor(private dataService: UserDataService) { }

    ngOnInit() {
        this.load();
    }

    load() {
        this.dataService.getUsers()
            .subscribe((data: IUser[]) => this.users = data, error => this.dataService.showError());
    }

    delete(id: number) {
        this.dataService.deleteUser(id)
            .subscribe(data => this.load(), error => this.dataService.showError());
    }
}