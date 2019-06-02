import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  symbols: Array<String>
  stock: String

  constructor(private service: StocksService) {
    this.symbols = service.get()
  }

  ngOnInit() {
  }

  add() {
    this.symbols = this.service.add(this.stock.toUpperCase())
    this.stock = ''
  }

  remove(symbol) {
    this.symbols = this.service.remove(symbol)
  }

}
