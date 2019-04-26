import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PhoneService} from '../../services/phone-service/phone.service';
import {Phone} from '../../dto/phone';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  private phone: Phone;

  constructor(private route: ActivatedRoute, private phoneService: PhoneService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.phoneService.getPhone(id)
      .subscribe((data: Phone) => this.phone = data);
  }

}
