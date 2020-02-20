import { Component, OnInit } from '@angular/core';
import { FetchwrongnumberserviceService } from "../fetchwrongnumberservice.service";

@Component({
  selector: 'app-buttonfetchwrongnumber',
  templateUrl: './buttonfetchwrongnumber.component.html',
  styleUrls: ['./buttonfetchwrongnumber.component.css']
})
export class ButtonfetchwrongnumberComponent implements OnInit {

  constructor(private fetchwrongnumberserviceService: FetchwrongnumberserviceService) { }

  ngOnInit(): void {
  }

  fetchwriongnumber(){
    console.log("press")
    this.fetchwrongnumberserviceService.fetchwrongnumber();
  }

}
