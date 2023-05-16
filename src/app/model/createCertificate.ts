import { CertificateType } from "../enum/certificateType";
import { ExtendedKeyUsage } from "../enum/extendedKeyUsage";

export class CreateCertificate {
    private issuerEmail: string;
    private issuerCertificateSerialNumber: string;
    private issuerCertificateType: CertificateType;
    private subjectEmail: string;
    private start: Date;
    private end: Date;
    private keyUsages: KeyUsage[];
    private extendedKeyUsages: ExtendedKeyUsage[];
    private subjectCertificateType: CertificateType;

    constructor(issuerEmail: string, issuerCertificateSerialNumber: string,
        issuerCertificateType: CertificateType, subjectEmail: string, start: Date,
        end: Date, keyUsages: KeyUsage[], extendedKeyUsages: ExtendedKeyUsage[],
        subjectCertificateType: CertificateType) {
        this.issuerEmail = issuerEmail;
        this.issuerCertificateSerialNumber = issuerCertificateSerialNumber;
        this.issuerCertificateType = issuerCertificateType;
        this.subjectEmail = subjectEmail;
        this.start = start;
        this.end = end;
        this.keyUsages = keyUsages;
        this.extendedKeyUsages = extendedKeyUsages;
        this.subjectCertificateType = subjectCertificateType;
    }
}