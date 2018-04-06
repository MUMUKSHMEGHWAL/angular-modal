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
  private lastCitySelected: any;
  private dropdownOpen = false;
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
  openModal(evt) {
    const target = evt.target;
    const selectedIndex = target.options['selectedIndex'];
    this.lastCitySelected = this.cityToShowInModal(target.options[selectedIndex].value);
    if (selectedIndex) {
      this._modalService.open(target, this.cityToShowInModal(target.options[selectedIndex].value));
      target.classList.add('l-display-none');
    }
  }
  cityToShowInModal(cityName) {
    return this.citiData.filter(el => el.name === cityName);
  }
  openLastModal(evt) {
      this.dropdownOpen = !this.dropdownOpen;
      if (!this.isSelectOpen()) {
        const target = evt.target;
        const selectedIndex = target.options['selectedIndex'];
        const citySelected = this.cityToShowInModal(target.options[selectedIndex].value);
        if (citySelected[0].name === this.lastCitySelected[0].name) {
          this._modalService.open(target, this.cityToShowInModal(target.options[selectedIndex].value));
          target.classList.add('l-display-none');
        }
      }
  }
  // just a function to print out message
  isSelectOpen() {
    if (this.dropdownOpen) {
      return true;
    } else {
      return false;
    }
  }
}
