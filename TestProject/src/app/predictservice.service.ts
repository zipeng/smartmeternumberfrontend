import { Injectable , Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PredictserviceService {
  items = [
    

  ];

  constructor(private http: HttpClient) { }

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  PredictPossibleNumber(number) {

    this.http.post("http://127.0.0.1:5000/predict/api/predictnumbers",
        {"wrongNumber":number})
        .subscribe(
            (val) => {
              console.log(val)
                    this.items =val['ProposedNumbers'];


      this.change.emit(true);
      return this.items;
            },
            response => {
              this.items=[
    {ProposedNumber: '345', Conficence: 234, last: 'Otto', handle: '@mdo'},

  ];
                console.log("POST call in error", response);
                this.change.emit(true);
      return this.items;
            },
            () => {
                console.log("The POST observable is now completed.");
                this.change.emit(true);
      return this.items;
            });
  
  
  

  }
  clear() {
    this.items = [];
    return this.items;
  }
  
}
