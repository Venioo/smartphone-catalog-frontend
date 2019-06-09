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

  private showSummary = false;
  private showGeneral = true;
  private showNetwork = true;
  private showMultimedia = true;

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
        let exist = false;
        let i: number;
        for (i = 0; i < this.phonesArray.length; i++) {
          if (this.phonesArray[i].id === data.id) {
            exist = true;
          }
        }
        if (!exist) {
          this.phonesArray.push(data);
        }
      });
  }

  removePhoneFromComparision(phone: Phone) {
    this.phonesArray = this.phonesArray.filter(item => item !== phone);
  }

  onChange(int) {
    switch (int) {
      case 0: this.showSummary = !this.showSummary; break;
      case 1: this.showGeneral = !this.showGeneral; break;
      case 2: this.showNetwork = !this.showNetwork; break;
      case 3: this.showMultimedia = !this.showMultimedia; break;
    }
  }
}
