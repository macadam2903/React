import axios from "axios"; 
const LoadData = async ({ adatok, setAdatok }) => {
    const backendUrl = "https://retoolapi.dev/hUctvr/dolgozok";
        try {
            const response = await axios.get(backendUrl);
            setAdatok(response.data);
            console.log("Data loaded successfully");
        } catch (error) {
            console.error("Error loading data:", error);
        }
    }

   

export default LoadData;
