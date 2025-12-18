import { useEffect, useState } from "react";
import api from "./api";
import CompanyList from "./components/CompanyList";
import CompanyForm from "./components/CompanyForm";

function App() {
  const [companies, setCompanies] = useState([]);
  const [editCompany, setEditCompany] = useState(null);

  const loadCompanies = async () => {
    const res = await api.get("/");
    setCompanies(res.data);
  };

  useEffect(() => {
    loadCompanies();
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/${id}`);
    loadCompanies();
  };

  const handleSaved = () => {
    setEditCompany(null);
    loadCompanies();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Cégek – CRUD</h1>

      <CompanyForm
        editCompany={editCompany}
        onSaved={handleSaved}
        onCancel={() => setEditCompany(null)}
      />

      <CompanyList
        companies={companies}
        onEdit={setEditCompany}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
