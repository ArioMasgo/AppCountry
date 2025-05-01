import { Component, inject, signal } from '@angular/core';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryService } from '../../services/country.service';
import { RESTCountries } from '../../interfaces/rest-countries.interface';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountryListComponent, SearchInputComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  countries = signal<Country[]>([]);
  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  onSearch (query: string) {
    this.countryService.searchCapital(query)
    .subscribe((countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
        console.log({countries})
      }
    )
  }

 }
