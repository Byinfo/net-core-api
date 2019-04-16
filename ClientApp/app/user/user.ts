export interface IUser {
    id?: number,
    name?: string,
    firstName?: string,
    lastName?: string,
    age?: number,
    login?: string,
    userRoles?: []
}

export class IndexUser implements IUser {
    constructor(
        public id?: number,
        public name?: string,
        public age?: number,
    ) { }
}

export class CreateUser implements IUser {
    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        public login: string,
        public userRoles?: []
    ) { }
}

export class EditUser implements IUser {
    constructor(
        public id: number,
        public name: string,
        public age: number,
        public login: string,
        public userRoles?: []
    ) { }
}

