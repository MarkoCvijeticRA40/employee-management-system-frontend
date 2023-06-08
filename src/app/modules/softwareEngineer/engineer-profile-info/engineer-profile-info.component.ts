import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { User } from 'src/app/model/user';
import { AccountService } from 'src/app/service/account-service.service';
import { SkillService } from 'src/app/service/skill.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-engineer-profile-info',
  templateUrl: './engineer-profile-info.component.html',
  styleUrls: ['./engineer-profile-info.component.css'],
})
export class EngineerProfileInfoComponent implements OnInit {
  user: User = new User();
  skills: any[] = [];
  flag: boolean = false;
  skill: Skill = new Skill();

  constructor(
    private skillService: SkillService,
    private userService: UserService,
    private accountService: AccountService,
    private datePipe: DatePipe,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.userService
      .getById(this.accountService.currentUser.id)
      .subscribe((res) => {
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

  downloadCV() {
    this.http
      .get(
        'https://localhost:443/cv/user/' + this.accountService.currentUser.id,
        {
          responseType: 'blob',
        }
      )
      .subscribe((data: Blob) => {
        const downloadURL = window.URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = downloadURL;
        link.download =
          this.accountService.currentUser.name +
          this.accountService.currentUser.surname +
          '.docx';
        link.click();
      });
  }
}
