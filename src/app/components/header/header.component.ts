import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showClose: boolean = false;
  subscription!: Subscription;
  constructor(private dataService: GlobalDataService) {
    this.subscription = this.dataService
      .onToggle()
      .subscribe((data) => (this.showClose = data));
  }
  ngOnInit(): void {}
  toggleShow() {
    this.dataService.toggleData();
  }
}
