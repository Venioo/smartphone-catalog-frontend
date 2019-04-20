import {Component, OnInit} from '@angular/core';
import {Phone} from '../../dto/phone';
import {PhoneService} from '../../services/phone-service/phone.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.css']
})
export class PhonesListComponent implements OnInit {
  public phonesArray: Phone[];

  constructor(private phoneService: PhoneService, private router: Router) {
  }

  ngOnInit() {
    this.phoneService
      .getAll<Phone[]>()
      .subscribe((data: any[]) => this.phonesArray = data);
  }

  onClick(id: number) {
    this.router.navigate(['phones', id]);
  }

}
