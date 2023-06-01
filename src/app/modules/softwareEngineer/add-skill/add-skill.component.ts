import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { AccountService } from 'src/app/service/account-service.service';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css'],
})
export class AddSkillComponent implements OnInit {
  skill: Skill = new Skill();
  level: string = '';

  constructor(
    private accountService: AccountService,
    private skillService: SkillService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public addSkill() {
    this.skill.level = Number(this.level);
    if (this.validateForm()) {
      this.skill.user = this.accountService.currentUser;
      this.skillService
        .addSkill(this.accountService.currentUser.id, this.skill)
        .subscribe((res) => {
          alert('Project is added successfully!');
          this.router.navigateByUrl('softwareengineer/profile');
        });
    }
  }

  private validateForm() {
    if (this.skill.name !== '' && this.skill.level !== 0) {
      return true;
    }
    return false;
  }
}
