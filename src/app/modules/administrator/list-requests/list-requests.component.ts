import { Component, OnInit } from '@angular/core';
import { RegistratioRequestService } from 'src/app/service/registratio-request.service';

@Component({
  selector: 'app-list-requests',
  templateUrl: './list-requests.component.html',
  styleUrls: ['./list-requests.component.css']
})
export class ListRequestsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'surname', 'email', 'phoneNum', 'title', 'position', 'state', 'accept', 'reject'];
  requests: any[] = [];
  rejectionReason: string = '';

  constructor(private requestService: RegistratioRequestService) { }

  ngOnInit(): void {
    this.requestService.getPendingRequest().subscribe(res=> {
      this.requests = res.payload.ArrayList;
    })
  }

  public acceptRequest(id: any) {
    this.requestService.approveRequest(id).subscribe(res => {
      alert("Approved!")
      this.requestService.getPendingRequest().subscribe(res=> {
        this.requests = res.payload.ArrayList;
      })
    })
  }

  public rejectRequest(id: any) {
    if (this.rejectionReason !== '') {
      this.requestService.rejectRequest(id, this.rejectionReason).subscribe(res => {
        alert("Rejected!");
        this.requestService.getPendingRequest().subscribe(res=> {
          this.requests = res.payload.ArrayList;
        })
      })
    } 
    else {
      alert("Enter reason for rejection!");
    }
  }
  
}



