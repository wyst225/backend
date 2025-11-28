import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const CountryInfo = ({ countryCode }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
      .then((res) => res.json())
      .then((json) => setData(json[0]))
      .catch((err) => console.error(err));
  }, [countryCode]);

  if (!data) return <p>Betöltés...</p>;

  const name = data.name?.common;

  const currencyKey = Object.keys(data.currencies)[0];
  const currencySymbol = data.currencies[currencyKey].symbol;

  const capital = data.capital?.[0];

  const borders = data.borders || [];

  return (
    <CountryCard
      name={name}
      currency={currencySymbol}
      capital={capital}
      borders={borders}
    />
  );
};

export default CountryInfo;
