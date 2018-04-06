import { Component, OnInit } from '@angular/core';
import { GetCityDataService } from '../../core/services/cityDataService/get-city-data.service';
import { ModalService } from '../../core/services/modalService/modalServices.service';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  private citiData: any;
  private dropdownOpen = false;
  private placeholder = 'select city';
  private heading = 'select city';
  constructor(private _GetCityDataService: GetCityDataService, private _modalService: ModalService ) { }

  ngOnInit() {
    this.getCityData();
  }
  getCityData() {
    this._GetCityDataService.getCityData('http://www.mocky.io/v2/5ac716bf4a000034007e0910').subscribe(
      res => {
        this.citiData = res;
      }
    );
  }
  openModal(target) {
    if (target.innerText) {
      this.heading = target.innerText;
      this.closeDropDownList(target);
      this._modalService.open(this.cityToShowInModal(target.innerText));
    }
  }
  cityToShowInModal(cityName) {
    return this.citiData.filter(el => el.name === cityName);
  }
  openDropdownList(target) {
    if (target.nodeName === 'SPAN') {
      target = target.parentElement;
    }
    const classListOfDropdownList = target.nextElementSibling.classList;
    this.dropdownOpen = !this.dropdownOpen;
    this.dropdownOpen ? classListOfDropdownList.remove('l-display-none') : classListOfDropdownList.add('l-display-none');
  }
  closeDropDownList(target) {
    this.dropdownOpen = !this.dropdownOpen;
    target.parentElement.classList.add('l-display-none');
  }
}
