function CompanyList({ companies, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>ID</th>
          <th>Megnevezés</th>
          <th>Székhely</th>
          <th>Aktív</th>
          <th>Műveletek</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((c) => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.Megnevezes}</td>
            <td>{c.Szekhely}</td>
            <td>{c.Aktiv ? "Igen" : "Nem"}</td>
            <td>
              <button onClick={() => onEdit(c)}>Szerkeszt</button>
              <button onClick={() => onDelete(c.id)}>Töröl</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CompanyList;
