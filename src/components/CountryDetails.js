import React from 'react';
/* import myCountries from '../countries.json'; */
import {Link} from 'react-router-dom';

class CountryDetails extends React.Component {
  //Getting the ID from the url

  render() {
    console.log('Hola');
    const countryCca3 = this.props.match.params.id;
    console.log('id coming from the url', countryCca3);

    //finding the country with this particular Id
    const foundCountry = this.props.countries.find((country) => {
      return country.cca3 === countryCca3;
    });

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>{foundCountry.name.common}</h1>
        <hr></hr>
        <p style={{ fontSize: '20px' }}>
          <span style={{ fontWeight: 'bold' }}>Capital: </span>
          {foundCountry.capital}
        </p>
        <hr></hr>
        <p style={{ fontSize: '20px' }}>
          <span style={{ fontWeight: 'bold' }}>Area: </span>
          {foundCountry.area} km<sup>2</sup>
        </p>
        <hr></hr>
        <p style={{ fontSize: '20px' }}>
          <span style={{ fontWeight: 'bold' }}>Borders</span>
        </p>
        <ul>
          {foundCountry.borders.map((border) => {
            return (
                <Link to={`/countrieslist/${border}`}>
                    <li>
                       {this.props.countries.find(country => country.cca3 === border).name.common}
                    </li>
                </Link>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default CountryDetails;


