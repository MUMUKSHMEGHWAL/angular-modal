import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetCityDataService } from './cityDataService/get-city-data.service';
import { ModalService } from './modalService/modalServices.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    GetCityDataService,
    ModalService
  ]
})
export class Services { }
