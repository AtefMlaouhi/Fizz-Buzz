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
    const retValue = new Array<string>();
    if (!value.includes(this.three) || !value.includes(this.five)) {
      retValue.push(this.Oops);
    }

    return of<string[]>(retValue);
  }
}
