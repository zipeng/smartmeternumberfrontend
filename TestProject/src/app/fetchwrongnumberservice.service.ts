import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders().set("Authorization", "Basic Y2xpZW50I0lCTVJlc3RUZXN0OjJFN1I5cEdSQ3lieVE3U3E=");
var dataurl="http://gamma.powercloud.de/rest:client/aef7391b33d0016f3cc549ad7317c246/getContractById?id=1000088";

@Injectable({
  providedIn: 'root'
})
export class FetchwrongnumberserviceService {

  Wrongnumber="test";
  @Output() wrongnumber: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) { }

  fetchwrongnumber(){
    this.Wrongnumber=this.checknumber("isk2340000045644");
    //this.wrongnumber.emit(true);
    //return "from1235";
    this.http
      .get(dataurl, {headers})
      .subscribe(
        (data: any) => {
          var sMeterNumber=data.data.data.counterNumber;
          this.Wrongnumber=this.checknumber(sMeterNumber);
          this.wrongnumber.emit(true);
          console.log (data.data.data.counterNumber)
        },
        (error: any) => console.log('oops', error)
      ); 


    
  }

  checknumber(sNumber){
  var tNumber=sNumber+"00000000000000";
  var rNumber=tNumber.substring(0,14);
  return rNumber; 
     
  }
  
}
