import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.scss']
})
export class FizzBuzzComponent implements OnInit {
  appConfig = environment;

  constructor() {}

  ngOnInit() {}
}
