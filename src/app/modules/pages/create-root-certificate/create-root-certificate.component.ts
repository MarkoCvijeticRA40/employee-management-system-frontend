import { Component, OnInit } from '@angular/core';
import { ExtendedKeyUsage } from 'src/app/enum/extendedKeyUsage';
import { KeyUsage } from 'src/app/enum/keyUsage';
import { CreateRootCertificateDto } from 'src/app/model/createRootCertificate';
import { RootCertificateService } from 'src/app/service/root-certificate.service';

@Component({
  selector: 'app-create-root-certificate',
  templateUrl: './create-root-certificate.component.html',
  styleUrls: ['./create-root-certificate.component.css']
})
export class CreateRootCertificateComponent implements OnInit {

  public createRootCertificate : CreateRootCertificateDto = new CreateRootCertificateDto();

  keyUsages: KeyUsage[] = [];

  extendedKeyUsages: ExtendedKeyUsage[] = [];
  
  constructor(private service : RootCertificateService) { }

  ngOnInit(): void {
    this.keyUsages = Object.values(KeyUsage);
    this.extendedKeyUsages = Object.values(ExtendedKeyUsage);
  }
  
  public create() {
    const dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'";
    const startIsoString = new Date(this.createRootCertificate.start).toISOString().slice(0, -1);
    const endIsoString = new Date(this.createRootCertificate.end).toISOString().slice(0, -1);

    const createRootCertificateDto = new CreateRootCertificateDto();
    createRootCertificateDto.adminEmailAddress = this.createRootCertificate.adminEmailAddress;
    createRootCertificateDto.start = startIsoString;
    createRootCertificateDto.end = endIsoString;
    createRootCertificateDto.keyUsages = this.createRootCertificate.keyUsages;
    createRootCertificateDto.extendedKeyUsages = this.createRootCertificate.extendedKeyUsages;
   
    this.service.create(createRootCertificateDto).subscribe(res => {
        alert("Uspesno");
    }, err => {
        console.log(err);
        alert("Error occurred");
    });
  }
}  
  

