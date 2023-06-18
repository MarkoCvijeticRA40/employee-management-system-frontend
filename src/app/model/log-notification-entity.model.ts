export class LogNotificationEntity {
    id : number = 0;
    logLevel: string = '';
    name: string = '';
    message: string = '';
    count: number = 0;
    start: Date = new Date();
    read: boolean = false;

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.logLevel = obj.logLevel;
            this.name = obj.name;
            this.message = obj.message;
            this.count = obj.count;
            this.start = obj.start;
            this.read = obj.read;
        }
    }
}
