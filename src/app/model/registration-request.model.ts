import { Address } from "./address";
import { RegistrationRequestStatus } from "./registration-request-status.enum";

export class RegistrationRequest {
    id: number = 0;
    email: string = '';
    password: string = '';
    name: string = '';
    surname: string = '';
    address: Address = new Address();
    phoneNum: string = '';
    title: string = '';
    roleName: string = '';
    status: RegistrationRequestStatus = RegistrationRequestStatus.PENDING;
    sendTime: Date = new Date();

    public constructor(obj?: any) {
        if (obj) {
            this.email = obj.email;
            this.password = obj.password;
            this.name = obj.name;
            this.surname = obj.surname;
            this.address = obj.address;
            this.phoneNum = obj.phoneNum;
            this.title = obj.title;
            this.roleName = obj.roleName;
            this.status = obj.status;
            this.sendTime = obj.sendTime;
        }
    }
}
