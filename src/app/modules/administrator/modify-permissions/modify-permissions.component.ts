import { Component, OnInit } from '@angular/core';
import { RolePermission } from 'src/app/model/role-permission.model';
import { RoleService } from 'src/app/service/role.service';

@Component({
  selector: 'app-modify-permissions',
  templateUrl: './modify-permissions.component.html',
  styleUrls: ['./modify-permissions.component.css']
})
export class ModifyPermissionsComponent implements OnInit {
  roles = [
    {value: 'Software engineer', viewValue: 'Software engineer'},
    {value: 'Project manager', viewValue: 'Project manager'},
    {value: 'HR manager', viewValue: 'HR manager'},
    {value: 'Administrator', viewValue: 'Administrator'}
  ];

  permissions: string[] = [
    "swe_delete",
    "swe_update",
    "swe_create",
    "swe_read",
    "pm_delete",
    "pm_update",
    "pm_create",
    "pm_read",
    "hr_delete",
    "hr_update",
    "hr_create",
    "hr_read",
    "admin_read",
    "admin_create",
    "admin_update",
    "admin_delete"
  ];

  rolePermission: RolePermission = new RolePermission();

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
  }

  add() {
    this.roleService.addPermission(this.rolePermission).subscribe(res => {
      if (res.report.valid) {
        alert("Permission is added to the role");
      }
      else {
        const errorMessages = JSON.stringify(res.report.errorMessages);
        alert(errorMessages);
      }
    })
  }

  remove() {
    this.roleService.removePermission(this.rolePermission).subscribe(res => {
      if (res.report.valid) {
        alert("Permission is removed from the role");
      }
      else {
        const errorMessages = JSON.stringify(res.report.errorMessages);
        alert(errorMessages);
      }
    })
  }

}
