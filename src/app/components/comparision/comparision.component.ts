import {Component, OnInit} from '@angular/core';
import {PhoneService} from '../../services/phone-service/phone.service';
import {Phone} from '../../dto/phone/phone';

@Component({
  selector: 'app-comparision',
  templateUrl: './comparision.component.html',
  styleUrls: ['./comparision.component.css']
})
export class ComparisionComponent implements OnInit {

  public brandsArray: string[];

  public modelsArray: string[];

  public phonesArray: Phone[] = [];

  constructor(private phoneService: PhoneService) {
  }

  ngOnInit() {
    this.phoneService
      .getAllBrands()
      .subscribe((data: any) => {
        this.brandsArray = data;
      });
  }

  updateModels(brand: string) {
    this.phoneService
      .getModelsByBrand(brand)
      .subscribe((data: any) => {
        this.modelsArray = data;
      });
  }

  getPhone(brand: string, model: string) {
    if (!brand || !model) {
      return;
    }
    this.phoneService
      .getPhoneByBrandAndModel(brand, model)
      .subscribe((data: Phone) => {
        this.phonesArray.push(data);
      });
  }

  removePhoneFromComparision(phone: Phone) {
    this.phonesArray = this.phonesArray.filter(item => item !== phone);
  }

}
