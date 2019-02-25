import { Component, Input } from '@angular/core';
import { FizzBuzzService } from '../../services';

@Component({
  selector: 'app-analyse-number',
  templateUrl: './analyse-number.component.html',
  styleUrls: ['./analyse-number.component.scss']
})
export class AnalyseNumberComponent {
  resultValue = [];

  @Input('numbers')
  set numbers(val: string) {
    this.resultValue = [];
    this._fizzBuzzService.getFizzBuzzFromNumber(val).subscribe(result => {
      this.resultValue = result;
    });
  }
  constructor(private _fizzBuzzService: FizzBuzzService) {}
}
