import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from './services/account.service';
import { AlertService } from './services/alert.service';
import { Stock } from './services/stocks.model';
import { StocksService } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    StocksService
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  refresh: boolean = true
  stocks: Array<Stock> = []
  interval: any

  constructor(private accountService: AccountService,
    private stocksService: StocksService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.load()
    this.accountService.init()

    this.interval = setInterval(() => {
      if (this.refresh) {
        this.load()
      }
    }, 4000)
  }

  toggleRefresh(): void {
    this.refresh = !this.refresh
    let onOff = (this.refresh) ? 'ON' : 'OFF'
    this.alertService.alert(`You have turned automatic refresh ${onOff}`, 'info', 3000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }

  reset(): void { this.accountService.reset() }

  private load(): void {
    this.stocksService.getStocks().subscribe(stocks => { this.stocks = stocks }, error => {
      console.log(`There was an error loading stocks: ${error}`);
    })
  }
}
