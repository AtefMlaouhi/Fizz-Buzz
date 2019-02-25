import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  codes = [
    { text: '1', cols: 1, rows: 1, icon: null },
    { text: '2', cols: 1, rows: 1, icon: null },
    { text: '3', cols: 1, rows: 1, icon: null },
    { text: '4', cols: 1, rows: 1, icon: null },
    { text: '5', cols: 1, rows: 1, icon: null },
    { text: '6', cols: 1, rows: 1, icon: null },
    { text: '7', cols: 1, rows: 1, icon: null },
    { text: '8', cols: 1, rows: 1, icon: null },
    { text: '9', cols: 1, rows: 1, icon: null },
    { text: '', cols: 1, rows: 1, icon: 'clear' },
    { text: '0', cols: 1, rows: 1, icon: null },
    { text: '', cols: 1, rows: 1, icon: 'backspace' }
  ];
  numberEntry = '';
  disableKey = false;
  constructor() { }

  ngOnInit() {}

  clickNumber(event) {
    this.numberEntry += event.target.innerText;
    this.checkLength();
  }

  clearNumber() {
    this.numberEntry = '';
    this.checkLength();
  }

  deleteLastNumber() {
    const ln = this.numberEntry.length;
    this.numberEntry = this.numberEntry.substring(0, ln - 1);
    this.checkLength();
  }

  checkLength() {
    if (this.numberEntry.length >= 5) {
      this.disableKey = true;
    } else {
      this.disableKey = false;
    }
  }

}
