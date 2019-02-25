import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {
  private readonly Oops = 'oops';
  private readonly conditions = ['3', '5'];
  private readonly results = ['Fizz', 'Buzz'];

  constructor() {}

  public getFizzBuzzFromNumber(value: string): Observable<string[]> {
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

    this.conditions.forEach(item => {
      retValue.push(
        ...this.validateCondition(
          value,
          item,
          this.results[this.conditions.indexOf(item)]
        )
      );
    });

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
