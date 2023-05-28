export class RefreshTokenRequest {
    refreshToken: string | null = '';

    public constructor(obj?: any) {
        if (obj) {
            this.refreshToken = obj.refreshToken;
        }
    }
}
