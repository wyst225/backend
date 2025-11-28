import CountryInfo from "./components/CountryInfo";

function App() {
  return (
    <div className="app-container">
      <h1>Ország információk</h1>
      <CountryInfo countryCode="HU" />
    </div>
  );
}

export default App;
