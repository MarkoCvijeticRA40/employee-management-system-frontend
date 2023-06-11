import { Address } from "./address";

export class User {

    id : number = 0;
    email : string = '';
    password : string = '';
    name : string = '';
    surname : string = '';
    address : Address = new Address(); 
    phoneNum : string = '';
    title : string = '';
    roleNames : string[] = [];
    startOfWork : Date = new Date();
    accountEnabled : boolean = false;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.email = obj.email;
            this.password = obj.password;
            this.name = obj.name;
            this.surname = obj.surname;
            this.address = obj.address;
            this.phoneNum = obj.phoneNum;
            this.title = obj.title;
            this.roleNames = obj.roleNames;
            this.startOfWork = obj.startOfWork;
            this.accountEnabled = obj.accountEnabled;
        }
    }
}