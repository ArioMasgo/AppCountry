import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountries } from '../interfaces/rest-countries.interface';
import { map, Observable } from 'rxjs';
import { CountryMapper } from '../mapper/country.mapper';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  httpClient = inject(HttpClient);

  searchCapital(query:string): Observable<Country[]> {
    query= query.toLowerCase();
    return this.httpClient
      .get<RESTCountries[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map((restCountries)=>
           CountryMapper.mapRestCountryArrayToCountryArray(restCountries)
        ),
      )
  }


}
