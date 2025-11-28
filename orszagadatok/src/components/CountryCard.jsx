const CountryCard = ({ name, currency, capital, borders }) => {
  return (
    <div className="country-card">
      <h2>{name}</h2>

      <p><strong>Fizetőeszköz:</strong> {currency}</p>
      <p><strong>Főváros:</strong> {capital}</p>

      <strong>Határos országok:</strong>
      <ul>
        {borders && borders.length > 0 ? (
          borders.map((code) => <li key={code}>{code}</li>)
        ) : (
          <li>Nincs határ</li>
        )}
      </ul>
    </div>
  );
};

export default CountryCard;
