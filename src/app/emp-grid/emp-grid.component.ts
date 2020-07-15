import { EmpDetails } from './../models/details.interface';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { take, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const LOAD_STATE = {
  LOADING: 'loading',
  LOADED: 'loaded',
  EMPTY: 'empty'

};

@Component({
  selector: 'app-emp-grid',
  templateUrl: './emp-grid.component.html',
  styleUrls: ['./emp-grid.component.scss']
})
export class EmpGridComponent implements AfterViewInit {
  empDetails: EmpDetails[];
  private originalData: EmpDetails[];
  isView = true;
  searchText = '';
  dataState =  LOAD_STATE.LOADING;
  isDesc: boolean;
  @ViewChild('searchTest') searchTest: ElementRef;
  constructor(
    private api: ApiService) {
  }

  ngAfterViewInit(): void {
    this.getDetailsforUi();
  }

  getDetailsforUi(){
    this.api.getDataFromApi().pipe(take(1)).subscribe((res: any) => {
     this.loadUiData(res);
    });

    fromEvent(this.searchTest.nativeElement, 'keyup')
    .pipe(debounceTime(300),
      map((e: any) => e.target.value), distinctUntilChanged()).subscribe(res => {
      this.empDetails  = this.searchInputText(res);
    });
  }

  loadUiData(res){
    this.empDetails = res.data;
    this.originalData = [...res.data];
    this.dataState =  LOAD_STATE.LOADED;
  }

  searchInputText(searchText){
    if (!searchText) {
      return [...this.originalData];
   }
    return this.originalData.filter(ele => ele.employee_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
  }

  trackByItemId(i, {id}){
    return id;
  }

  sort(property) {
    this.isDesc = !this.isDesc;
    const direction = this.isDesc ? 1 : -1;
    this.originalData.sort((a, b)  => {
      const  l = isNaN(a[property]) ? a[property] : +a[property];
      const  r = isNaN(b[property]) ? b[property] : +b[property];
      if (l < r) {
        return -1 * direction;
      }
      if (l > r) {
        return 1 * direction;
      }
      return 0;
    });
    this.empDetails = [...this.originalData];
  }
}
