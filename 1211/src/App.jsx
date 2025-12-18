import LoadData from './components/LoadData'
import KeresoPanel from './components/KeresoPanel'
import DataTable from './components/DataTable'
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [adatok, setAdatok] = useState([])
  const [filters, setFilters] = useState({
    id: '',
    nev: '',
    kor: '',
    belepesDatuma: ''
  })
  const [szurtAdatok, setSzurtAdatok] = useState(adatok)

  const szures = (e) => {
    e.preventDefault()
    console.log('Szűrési feltételek:', filters);
    let szurtAdat = adatok.filter((adatsor) => {
      return (
        (filters.id === '' || adatsor.id === Number(filters.id)) &&
        (filters.nev === '' || adatsor.TeljesNev.toLowerCase().includes(filters.nev.toLowerCase())) &&
        (filters.kor === '' || adatsor.Eletkor === Number(filters.kor)) &&
        (filters.belepesDatuma === '' || new Date(adatsor.BelepesDatuma).toLocaleDateString() === new Date(filters.belepesDatuma).toLocaleDateString())
      )
    })
    setSzurtAdatok(szurtAdat)
    }

  useEffect(() => {
    LoadData({ adatok, setAdatok });
  }, []);

  return (
    <>
      <h1>Keresés adatokban</h1>
      <form action="">
        <button onClick={szures}>Keresés</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Név</th>
              <th>Kor</th>
              <th>Belépés dátuma</th>
            </tr>
            <KeresoPanel filters={filters} setFilters={setFilters} />
          </thead>
          <DataTable adatok={szurtAdatok} />
        </table>
      </form>
    </>
  )
}

export default App