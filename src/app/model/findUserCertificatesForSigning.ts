export class FindUserCertificatesForSigningDto {
    
    public from: Date;
    public to: Date;
    public email: string;

    constructor(from: Date, to: Date, email: string) {
        this.from = from;
        this.to = to;
        this.email = email;
    }
}