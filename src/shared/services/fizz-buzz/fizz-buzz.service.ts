import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {
  private readonly three = '3';
  private readonly five = '5';
  private readonly Fizz = 'Fizz';
  private readonly Buzz = 'Buzz';
  private readonly Oops = 'oops';

  constructor() {}

  getFizzBuzzFromNumber(value: string): Observable<string[]> {
    if (value === null || value.length === 0) {
      return of<string[]>([this.Oops]);
    }

    if (+value === 0) {
      return of<string[]>([this.Oops]);
    }

    const retValue = new Array<string>();
    if (value.includes(this.three)) {
      retValue.push(this.Fizz);
    }

    if (+value % +this.three === 0) {
      retValue.push(this.Fizz.toUpperCase());
    }

    if (value.includes(this.five)) {
      retValue.push(this.Buzz);
    }

    return of<string[]>(retValue);
  }
}
