import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { User } from 'src/app/model/user';
import { SkillService } from 'src/app/service/skill.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-software-engineer-home',
  templateUrl: './software-engineer-home.component.html',
  styleUrls: ['./software-engineer-home.component.css'],
})
export class SoftwareEngineerHomeComponent implements OnInit {
  user: User = new User();
  skills: any[] = [];
  flag: boolean = false;
  skill: Skill = new Skill();

  constructor(
    private skillService: SkillService,
    private userService: UserService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.userService.getById(1).subscribe((res) => {
      this.user = res;
      this.skillService.findByUserId(this.user.id).subscribe((res) => {
        this.skills = res.payload.ArrayList;
      });
    });
  }

  public formatDate(date: any): string {
    if (date && Array.isArray(date) && date.length >= 6) {
      const [year, month, day, hour, minute, second] = date;
      return new Date(
        year,
        month - 1,
        day,
        hour,
        minute,
        second
      ).toDateString();
    }
    return '';
  }

  public editSkill(skill: any) {
    this.skill.id = skill.id;
    this.skill.name = skill.name;
    this.skill.level = skill.level;
    this.skill.user = skill.user;
    this.flag = true;
  }

  public updateSkill() {
    this.skillService
      .updateSkill(this.skill.id, this.skill)
      .subscribe((res) => {
        this.skillService.findByUserId(this.user.id).subscribe((res) => {
          this.skills = res.payload.ArrayList;
        });
        alert('Skill is edited succesfully!');
        this.flag = false;
      });
  }

  public deleteSkill(id: any) {
    this.skillService.deleteSkill(id).subscribe((res) => {
      this.skillService.findByUserId(this.user.id).subscribe((res) => {
        this.skills = res.payload.ArrayList;
      });
      alert('Skill is deleted succesfully!');
    });
  }
}
