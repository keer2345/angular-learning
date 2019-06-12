import { Component, OnInit, DoCheck } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent implements DoCheck {

  constructor(private accountService:AccountService) { }

  ngDoCheck(): void {
    throw new Error("Method not implemented.");
  }

}