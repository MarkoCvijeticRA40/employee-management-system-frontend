import { Data } from "@angular/router";
import { CertificateType } from "../enum/certificateType";
import { ExtendedKeyUsage } from "../enum/extendedKeyUsage";

export class Certificate {
    private subjectData: Data;
    private issuerData: Data;
    private serialNumber: string;
    private startDate: Date;
    private endDate: Date;
    private keyUsages: KeyUsage[];
    private extendedKeyUsages: ExtendedKeyUsage[];
    private certificateType: CertificateType;
    private isRevoked: boolean;

    constructor(subjectData: Data, issuerData: Data, serialNumber: string, startDate: Date,
        endDate: Date, keyUsages: KeyUsage[], extendedKeyUsages: ExtendedKeyUsage[],
        certificateType: CertificateType, isRevoked: boolean) {
        this.subjectData = subjectData;
        this.issuerData = issuerData;
        this.serialNumber = serialNumber;
        this.startDate = startDate;
        this.endDate = endDate;
        this.keyUsages = keyUsages;
        this.extendedKeyUsages = extendedKeyUsages;
        this.certificateType = certificateType;
        this.isRevoked = isRevoked;
    }
}