import {Component, OnInit} from '@angular/core';
import {PhoneService} from '../../services/phone-service/phone.service';
import {Router} from '@angular/router';
import {Page} from '../../dto/page/page';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.css']
})
export class PhonesListComponent implements OnInit {

  public phonesPage: Page;

  lastPageEvent: PageEvent;
  lastSearchedInput: string;
  searched = false;
  showSpinner = true;

  constructor(private phoneService: PhoneService, private router: Router) {
  }

  ngOnInit() {
    this.lastPageEvent = new PageEvent();
    this.lastPageEvent.pageIndex = 0;
    this.lastPageEvent.pageSize = 10;
    this.getPhonesFromService('', this.lastPageEvent.pageIndex, this.lastPageEvent.pageSize);
  }

  onClick(id: number) {
    this.router.navigate(['phones', id]);
  }

  onPageChange(event) {
    this.lastPageEvent = event;
    if (this.searched) {
      this.getPhonesFromService(this.lastSearchedInput, event.pageIndex, event.pageSize);
    } else {
      this.getPhonesFromService('', event.pageIndex, event.pageSize);
    }
  }

  onSearchBoxInteraction(searchInput) {
    if (!searchInput) {
      this.searched = false;
    } else {
      this.lastSearchedInput = searchInput;
      this.searched = true;
      this.getPhonesFromService(searchInput, 0, this.lastPageEvent.pageSize);
    }
  }

  onClearSearchBox() {
    this.searched = false;
    this.getPhonesFromService('', this.lastPageEvent.pageIndex, this.lastPageEvent.pageSize);
  }

  getPhonesFromService(searchInput, pageIndex, pageSize) {
    if (!searchInput) {
      this.phoneService
        .getPhonePage<Page>(pageIndex, pageSize)
        .subscribe((data: Page) => {
          this.phonesPage = data;
          this.showSpinner = false;
        });
    } else {
      this.phoneService
        .getPhonePageSearched<Page>(searchInput, pageIndex, pageSize)
        .subscribe((data: Page) => {
          this.phonesPage = data;
          this.showSpinner = false;
        });
    }
  }
}
