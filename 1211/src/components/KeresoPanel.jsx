import { useEffect } from "react";

const KeresoPanel = ({ filters, setFilters }) => {
    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };
    return (
        <tr>
            <th>
                <input type="number" name="id" id="id" onChange={handleChange} />
            </th>
            <th><input type="text" name="nev" id="nev" onChange={handleChange} /></th>
            <th><input type="number" name="kor" id="kor" onChange={handleChange} /></th>
            <th><input type="date" name="belepesDatuma" id="belepesDatuma" onChange={handleChange} /></th>
        </tr>
    );
}

export default KeresoPanel;