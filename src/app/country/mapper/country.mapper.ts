import { Country } from '../interfaces/country.interface';
import { RESTCountries, Flags } from '../interfaces/rest-countries.interface';

export class CountryMapper {
    static mapRestCountryToCountry(country: RESTCountries):Country {
        return{
            cca2: country.cca2,
            flag: country.flag,
            flagSvg: country.flags.svg,
            name: country.translations['spa'].common,
            capital: country.capital,
            population: country.population,

        }
    }
    static mapRestCountryArrayToCountryArray(countries: RESTCountries[]): Country[]{
        return countries.map(this.mapRestCountryToCountry)
    }
}