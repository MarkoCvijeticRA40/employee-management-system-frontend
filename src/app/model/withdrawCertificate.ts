import { CertificateType } from "../enum/certificateType";
import { CertificateWithdrawnReason } from "../enum/certificateWithdrawnReason";

export class WithdrawCertificate {
    
    public subjectEmail: string;
    public certificateType: CertificateType;
    public certificateSerialNumber: string;
    public reason: CertificateWithdrawnReason;

    constructor(subjectEmail: string, certificateType: CertificateType, certificateSerialNumber: string, reason: CertificateWithdrawnReason) {
        this.subjectEmail = subjectEmail;
        this.certificateType = certificateType;
        this.certificateSerialNumber = certificateSerialNumber;
        this.reason = reason;
    
    }
}