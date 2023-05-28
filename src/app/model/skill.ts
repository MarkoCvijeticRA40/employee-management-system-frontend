import { User } from './user';

export class Skill {
  id: number = 0;
  name: string = '';
  level: number = 0;
  user: User = new User();

  public constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.name = obj.name;
      this.level = obj.level;
      this.user = obj.user;
    }
  }
}
