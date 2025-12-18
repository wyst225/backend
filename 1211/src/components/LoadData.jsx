import axios from 'axios';
const LoadData = async ({ adatok, setAdatok }) => {
    const backendURL = 'https://retoolapi.dev/hUctvr/dolgozok';

    try {
        const response = await axios.get(backendURL);
        setAdatok(response.data);
        console.log('Adatok betöltve:', response.data);
    } catch (error) {
        console.error('Hiba az adatok betöltésekor:', error.message);
    }
}

export default LoadData;