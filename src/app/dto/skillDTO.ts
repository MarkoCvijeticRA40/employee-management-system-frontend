export class SkillDTO {
  id: number = 0;
  name: string = '';
  level: number = 0;
  userId: number = 0;

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.name = obj.name;
      this.level = obj.level;
      this.userId = obj.userId;
    }
  }
}
