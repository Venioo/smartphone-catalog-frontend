import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Parameter} from '../../dto/pair-parameter/parameter';

@Component({
  selector: 'app-pair-wise-comparision',
  templateUrl: './pair-wise-comparision.component.html',
  styleUrls: ['./pair-wise-comparision.component.css']
})
export class PairWiseComparisionComponent implements OnInit {

  priceParameter = new Parameter('price', 'Price', '', '', false);
  RAMParameter = new Parameter('ram', 'RAM', '', '', false);
  announcedDateParameter = new Parameter('announcedDate', 'Announced date', '', '', false);
  displaySizeParameter = new Parameter('displaySize', 'Display size', '', '', false);
  OSParameter = new Parameter('os', 'Operation system', '', '', false);
  batteryParameter = new Parameter('battery', 'Battery', '', '', false);

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      checkboxPrice: [],
      checkboxAnnouncedDate: [],
      checkboxDisplaySize: [],
      checkboxOS: [],
      checkboxRAM: [],
      checkboxBattery: [],
      inputPriceMin: [],
      inputPriceMax: [],
      inputAnnouncedDate: [],
      inputDisplaySizeMin: [],
      inputDisplaySizeMax: [],
      inputOS: [],
      inputRAM: [],
      inputBattery: []
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  getCheckboxes() {

  }

}
