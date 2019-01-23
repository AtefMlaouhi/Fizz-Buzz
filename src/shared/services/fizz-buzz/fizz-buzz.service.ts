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

    return of<string[]>(this.validateRules(value));
  }

  private validateRules(value: string): string[] {
    const retValue = new Array<string>();
    retValue.push(...this.validateCondition(value, this.three, this.Fizz));
    retValue.push(...this.validateCondition(value, this.five, this.Buzz));

    return retValue.length === 0 ? [this.Oops] : retValue;
  }

  private validateCondition(
    value: string,
    condition: string,
    result: string
  ): string[] {
    const retValue = new Array<string>();
    if (value.includes(condition)) {
      retValue.push(result);
    }

    if (+value % +condition === 0) {
      retValue.push(result.toUpperCase());
    }
    return retValue;
  }
}
