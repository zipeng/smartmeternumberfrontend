import { Component, OnInit } from '@angular/core';
import {PredictserviceService} from '../predictservice.service';
import { FetchwrongnumberserviceService } from "../fetchwrongnumberservice.service";
@Component({
  selector: 'app-inputwrongnumber',
  templateUrl: './inputwrongnumber.component.html',
  styleUrls: ['./inputwrongnumber.component.css']
})
export class InputwrongnumberComponent implements OnInit {

  searchValue: string;
  searchValueFromEvent: string;
  constructor(private predictserviceService: PredictserviceService,private fetchwrongnumberserviceService: FetchwrongnumberserviceService) { }

  ngOnInit(): void {
  
    this.fetchwrongnumberserviceService.wrongnumber.subscribe(changed => {
      if(changed){
        this.searchValue=this.fetchwrongnumberserviceService.Wrongnumber;

        this.predictserviceService.PredictPossibleNumber(this.checknumber(this.searchValue));
      }
    });

  }
  applyFilter(event: any) {
    console.log(event.target.value);
    this.searchValueFromEvent = event.target.value;
    this.searchValue=this.checknumber(this.searchValue);
    this.predictserviceService.PredictPossibleNumber(this.searchValue);
  }

  checknumber(sNumber){
  var tNumber=sNumber+"00000000000000";
  var rNumber=tNumber.substring(0,14);
  return rNumber; 
     
  }

}
