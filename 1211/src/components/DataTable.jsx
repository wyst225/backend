const DataTable = ({ adatok }) => {
    return (
        <tbody>
            {adatok.map((adatsor) => (
                <tr key={adatsor.id}>
                    <td>{adatsor.id}</td>
                    <td>{adatsor.TeljesNev}</td>
                    <td>{adatsor.Eletkor}</td>
                    <td>{new Date(adatsor.BelepesDatuma).toLocaleDateString()}</td>
                </tr>
            ))}
        </tbody>
    );
}
export default DataTable;