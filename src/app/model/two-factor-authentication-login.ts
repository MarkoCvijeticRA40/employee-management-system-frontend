export class TwoFactorAuthenticationLoginData {
    
    email: string = '';
    password: string = '';
    oneTimeCode: number = 0;

    public constructor(obj?: any) {
        if (obj) {
            this.email = obj.email;
            this.password = obj.password;
            this.oneTimeCode = obj.oneTimeCode;
        }
    }
}
