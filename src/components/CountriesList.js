import React from 'react'
import {Link} from 'react-router-dom'
/* import myCountries from '../countries.json'; */

class CountriesList extends React.Component  {
    
   
    render () {
        return (
           <div style={{marginLeft: "0px"}}>
               <h2 style={{marginLeft: "20px"}}>Countries List</h2>
               {this.props.countries.map((country, index) => {
                   return (
                       <ul key={index}>
                            <li style={{listStyle:"none"}}> 
                            {country.flag} <Link to={`/countrieslist/${country.cca3}`}>{country.name.common}</Link>
                            </li>
                       </ul>
                   )
               })}
           </div>
        )
    }
  
}

export default CountriesList;