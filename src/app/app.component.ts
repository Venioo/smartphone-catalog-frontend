import {Component, OnInit} from '@angular/core';
import {PhoneService} from './services/phone-service/phone.service';
import {Phone} from './objects/phone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public phonesArray: Phone[];

  constructor(private phoneService: PhoneService) {
  }

  ngOnInit() {
    this.phoneService
      .getAll<Phone[]>()
      .subscribe((data: any[]) => this.phonesArray = data);
  }
}
