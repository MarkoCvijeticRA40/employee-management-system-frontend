import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-new-notifications',
  templateUrl: './new-notifications.component.html',
  styleUrls: ['./new-notifications.component.css']
})
export class NewNotificationsComponent implements OnInit {
  displayedColumns: string[] = ['Log Level', 'Name', 'Message'];
  notifications: any[] = [];

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNewNotifications().subscribe(res => {
      this.notifications = res;
    })
  }

  read() {
    this.notificationService.setRead().subscribe(res => {
      alert('Marked as read!');
    });
  }

}
