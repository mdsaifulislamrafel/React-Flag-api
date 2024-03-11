import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
    const { name, flags, population, area, cca3, maps } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    };

    // console.log(handleVisitedFlag)
    return (
        <div className={`country ${visited ? 'visited' : 'no-visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'white' }}>{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <a href={maps.googleMaps} target='_blank'>Google Map</a>
            <br />
            <a href={maps.openStreetMaps} target='_blank'>Open Street Maps</a>
            <br />
            <br />
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button>
            <br />
            <br />
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Flag add</button>
            <br />
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? ' I Have visited this country' : ' I want to visit'}
            <hr />
            <CountryDetail 
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
            >
            </CountryDetail>
        </div>
    );
};

export default Country;