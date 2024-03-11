import React from 'react';

const CountryData = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
    return (
        <div>
            <h4><small>Country Data : {country.name.common}</small></h4>
        </div>
    );
};

export default CountryData;