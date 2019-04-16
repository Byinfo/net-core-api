import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, EditUser } from './user';

@Injectable()

export class UserDataService {
    private url = "/api/users";
    public alert: any;

    constructor(private http: HttpClient) {
        this.alert = document.querySelector('.alert');
        if (this.alert !== null) {
            this.alert.parentElement.removeChild(this.alert);
        }
    }

    getUsers() {
        return this.http.get(this.url);
    }

    getUser(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createUser(user: IUser) {
        return this.http.post(this.url, user);
    }

    updateUser(id: number, user: IUser) {

        return this.http.put(this.url + '/' + id, user);
    }

    deleteUser(id: number) {
        return this.http.delete(this.url + '/' + id);
    }

    showError() {
        if (this.alert !== null) {
            this.alert.parentElement.removeChild(this.alert);
        }

        let alert = document.createElement('div');
        alert.className = "alert alert-danger";
        alert.textContent = "Ops Error!";

        let body = document.querySelector('.body-content');
        body.insertBefore(alert, body.firstChild);
    }
}