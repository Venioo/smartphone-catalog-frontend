import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Parameter} from '../../dto/parameter/parameter';
import {Weight} from '../../dto/weight/weight';
import {PhoneService} from '../../services/phone-service/phone.service';
import {Phone} from '../../dto/phone/phone';
import {PairComparision} from '../../dto/pair-comparision/pair-comparision';

@Component({
  selector: 'app-pair-wise-comparision',
  templateUrl: './pair-wise-comparision.component.html',
  styleUrls: ['./pair-wise-comparision.component.css']
})
export class PairWiseComparisionComponent implements OnInit {

  parametersList = [new Parameter('price', 'Price', '0', '0', false),
    new Parameter('announcedDate', 'Announced date', '2019', '', false),
    new Parameter('displaySize', 'Display size', '0', '0', false),
    new Parameter('os', 'Operation system', 'Android', '', false),
    new Parameter('ram', 'RAM size', '0', '0', false)];
  OSArray = ['Android', 'iOS'];
  weightsList: Weight[];
  pairComparisionParameters: PairComparision = new PairComparision();
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  brandsArray = [];
  modelsArray = [];
  phonesArray: Phone[] = [];

  constructor(private formBuilder: FormBuilder, private phoneService: PhoneService) {
  }


  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      priceGroup: this.formBuilder.group({
        checkboxPrice: [],
        inputPriceMin: ['', Validators.min(0)],
        inputPriceMax: ['', Validators.min(0)],
      }),
      dateGroup: this.formBuilder.group({
        checkboxAnnouncedDate: [],
        inputAnnouncedDate: ['', Validators.min(0)],
      }),
      displaySizeGroup: this.formBuilder.group({
        checkboxDisplaySize: [],
        inputDisplaySizeMin: ['', Validators.min(0)],
        inputDisplaySizeMax: ['', Validators.min(0)]
      }),
      OSGroup: this.formBuilder.group({
        checkboxOS: [],
        inputOS: [],
      }),
      RAMGroup: this.formBuilder.group({
        checkboxRAM: [],
        inputRAM: ['', Validators.min(0)]
      }),
    });
    this.secondFormGroup = this.formBuilder.group({});

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

  getCheckboxes() {
    return this.parametersList.filter(x => x.checked === true);
  }

  validateCheckboxes() {
    let count = 0;
    this.parametersList.forEach(value => {
      if (value.checked === true) {
        count++;
      }
    });
    return count >= 2;
  }

  combineElements() {
    this.weightsList = [];
    for (const param of this.getCheckboxes()) {
      for (const param2 of this.getCheckboxes()) {
        if (param !== param2 && this.checkIfNotDuplicate(param, param2, this.weightsList)) {
          const pair = new Weight(param, param2, '0');
          this.weightsList.push(pair);
        }
      }
    }
  }

  checkIfNotDuplicate(param: Parameter, param2: Parameter, params: Weight[]) {
    return !params.some(value => value.firstParameter === param2 && value.secondParameter === param);
  }

  onSliderValueChange(event, i) {
    this.weightsList[i].weight = event;
    console.log(this.weightsList);
  }

  addPhone(brand: string, model: string) {
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

  removePhone(phone: Phone) {
    this.phonesArray = this.phonesArray.filter(item => item !== phone);
  }

  getBestPhones() {
    // TODO
    this.pairComparisionParameters.weightList = this.weightsList;
    this.pairComparisionParameters.phonesList = this.getPhonesIds();
    console.log(JSON.stringify(this.pairComparisionParameters));
  }

  validateNumberOfPhones() {
    return !(this.phonesArray.length === 1);
  }

  getPhonesIds() {
    const array: number[] = [];
    this.phonesArray.forEach(value => array.push(value.id));
    return array;
  }
}
