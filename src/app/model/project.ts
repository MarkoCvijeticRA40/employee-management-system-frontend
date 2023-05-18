import { User } from "./user";

export class Project {

    id : number = 0;
    name : string = '';
    duration : string = '';
    users : User[] = [];

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.name = obj.name;
            this.duration = obj.duration;
            this.users = obj.users;
        }
    }
}