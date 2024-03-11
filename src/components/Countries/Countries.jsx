import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [VisitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    const handleVisitedCountry = country => {
        const newVisitedCountry = [...VisitedCountries, country];
        setVisitedCountries(newVisitedCountry);
    };

    const handleVisitedFlag = flag => {
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
    };

    return (
        <div>
            <h1>This is countries {countries.length}</h1>
            <div>
                <h5>visited countries : {VisitedCountries.length}</h5>

                {/* visited countries */}

                <ul>
                    {
                        VisitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="flag-container">
                {
                    visitedFlag.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            {/* displayed showing country */}

            <div className="country-container"> 
                {
                    countries.map(country => <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleVisitedFlag={handleVisitedFlag} country={country}></Country>)
                }
            </div>

        </div>

    );
};

export default Countries;