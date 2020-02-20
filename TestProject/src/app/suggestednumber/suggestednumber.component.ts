import { Component, OnInit } from '@angular/core';
import {PredictserviceService} from '../predictservice.service';

@Component({
  selector: 'app-suggestednumber',
  templateUrl: './suggestednumber.component.html',
  styleUrls: ['./suggestednumber.component.css']
})
export class SuggestednumberComponent implements OnInit {


  headElements = ['PossibleNumber', 'Conficence'];
  
  constructor(private predictserviceService: PredictserviceService) { }
  elements=this.predictserviceService.items;
  ngOnInit(): void {
   
    this.predictserviceService.change.subscribe(changed => {
      if(changed){
        this.elements=this.predictserviceService.items;
      }
    });
  }

}
