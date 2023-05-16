export class Ticket {

    id: string = "";
    userId : string = '';
    flightId : string = '';
  
    constructor(obj?: any) {
      if (obj) {
        this.id = obj.id;
        this.userId = obj.userId;
        this.flightId = obj.flightId;
      }
    }
  }
  