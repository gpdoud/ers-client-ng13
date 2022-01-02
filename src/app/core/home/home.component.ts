import { Component, OnInit } from '@angular/core';
import { ExpenseService } from 'src/app/feat/expense/expense.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private expsvc: ExpenseService
  ) { }

  ngOnInit(): void {
    this.expsvc.list().subscribe({
      next: res => { console.debug(res) },
      error: err => { console.error(err) }
    });
  }

}
