import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grid',
  templateUrl: './home-grid.component.html',
  styleUrls: ['./home-grid.component.scss']
})
export class HomeGridComponent implements OnInit {
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Six', cols: 2, rows: 2, color: 'lightyellow'},
    {text: 'Seven', cols: 1, rows: 1, color: 'lightgray'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
