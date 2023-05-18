import { Project } from "./project";
import { User } from "./user";

export class ProjectUserAssignment {

    id : number = 0;
    project : Project = new Project();
    user : User = new User();
    workDescription : String = '';
    startOfWork : Date = new Date();
    endOfWork : Date = new Date();

    public constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.project = obj.project;
            this.user = obj.user;
            this.workDescription = obj.workDescription;
            this.startOfWork = obj.startOfWork;
            this.endOfWork = obj.endOfWork;
        }
    }
}