import { ExtendedKeyUsage } from "../enum/extendedKeyUsage";
import { KeyUsage } from "../enum/keyUsage";

export class CreateRootCertificateDto {
    
    adminEmailAddress: string = '';
    start: string = '';
    end: string = '';
    keyUsages: KeyUsage[] = [];
    extendedKeyUsages: ExtendedKeyUsage[] = [];

    public constructor(obj?: any) {
        if (obj) {
            this.adminEmailAddress = obj.adminEmailAddress;
            this.start = obj.start;
            this.end = obj.end;
            this.keyUsages = obj.keyUsages;
            this.extendedKeyUsages = obj.extendedKeyUsages;
        }
    }
}






