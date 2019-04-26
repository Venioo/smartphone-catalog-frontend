import {Component, OnInit} from '@angular/core';
import {PhoneService} from '../../services/phone-service/phone.service';
import {Router} from '@angular/router';
import {Page} from '../../dto/page';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.css']
})
export class PhonesListComponent implements OnInit {
  public phonesPage: Page;

  constructor(private phoneService: PhoneService, private router: Router) {
  }

  ngOnInit() {
    this.phoneService
      .getPhonePage<Page>(0, 10)
      .subscribe((data: Page) => this.phonesPage = data);
  }

  onClick(id: number) {
    this.router.navigate(['phones', id]);
  }

  onPageChange(event) {
    this.phoneService
      .getPhonePage<Page>(event.pageIndex, event.pageSize)
      .subscribe((data: Page) => this.phonesPage = data);
  }

}
