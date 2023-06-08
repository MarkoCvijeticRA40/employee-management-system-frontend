export class ProjectUserAssignmentDTO {
  projectId: number = 0;
  userId: number = 0;
  workDescription: String = '';
  startOfWork: Date = new Date();
  endOfWork: Date = new Date();

  public constructor(obj?: any) {
    if (obj) {
      this.projectId = obj.projectId;
      this.userId = obj.userId;
      this.workDescription = obj.workDescription;
      this.startOfWork = obj.startOfWork;
      this.endOfWork = obj.endOfWork;
    }
  }
}
