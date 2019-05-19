import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PhoneService} from '../../services/phone-service/phone.service';
import {Phone} from '../../dto/phone/phone';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  private phone: Phone;

  private showSummary = false;
  private showGeneral = true;
  private showNetwork = true;
  private showMultimedia = true;

  constructor(private route: ActivatedRoute, private phoneService: PhoneService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.phoneService.getPhone(id)
      .subscribe((data: Phone) => this.phone = data);
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
