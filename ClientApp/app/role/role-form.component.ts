import { Component, Input } from '@angular/core';
import { Role } from './role';

@Component({
    selector: "role-form",
    templateUrl: './template/role-form.component.html'
})

export class RoleFormComponent {
    @Input() role: Role;
}