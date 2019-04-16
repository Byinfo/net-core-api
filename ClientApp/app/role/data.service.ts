import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from './role';

@Injectable()

export class RoleDataService {
    private url = "/api/roles";
    public alert: any;

    constructor(private http: HttpClient) {
        this.alert = document.querySelector('.alert');
        if (this.alert !== null) {
            this.alert.parentElement.removeChild(this.alert);
        }
    }

    getRoles() {
        return this.http.get(this.url);
    }

    getRole(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createRole(role: Role) {
        return this.http.post(this.url, role);
    }

    updateRole(role: Role) {

        return this.http.put(this.url, role);
    }

    deleteRole(id: number) {
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