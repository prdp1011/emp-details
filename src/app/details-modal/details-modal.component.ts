import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmpDetails } from '../models/details.interface';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit {
  @ViewChild('gal') gal: ElementRef;
  data: EmpDetails;
  constructor() { }

  ngOnInit(): void {
  }


  showElement(state){
    this.gal.nativeElement.style.display = state ? 'block' : 'none';
  }

  currentDetails(data: EmpDetails){
    this.data = data;
    this.showElement(true);
  }


}
