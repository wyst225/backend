import { useEffect, useState } from "react";
import api from "../api";

const emptyForm = {
  Megnevezes: "",
  Szekhely: "",
  Aktiv: false,
};

function CompanyForm({ editCompany, onSaved, onCancel }) {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (editCompany) {
      setFormData(editCompany);
    } else {
      setFormData(emptyForm);
    }
  }, [editCompany]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editCompany) {
      // UPDATE
      await api.put(`/${editCompany.id}`, formData);
    } else {
      // CREATE
      await api.post("/", formData);
    }

    onSaved();
    setFormData(emptyForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="Megnevezes"
        placeholder="Megnevezés"
        value={formData.Megnevezes}
        onChange={handleChange}
        required
      />

      <input
        name="Szekhely"
        placeholder="Székhely"
        value={formData.Szekhely}
        onChange={handleChange}
      />

      <label>
        Aktív
        <input
          type="checkbox"
          name="Aktiv"
          checked={formData.Aktiv}
          onChange={handleChange}
        />
      </label>

      <button type="submit">
        {editCompany ? "Frissítés" : "Mentés"}
      </button>

      {editCompany && (
        <button type="button" onClick={onCancel}>
          Mégse
        </button>
      )}
    </form>
  );
}

export default CompanyForm;
