import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RESTCountries } from '../../interfaces/rest-countries.interface';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent {
  countries = input.required<Country[]>();
 }
