
import useLocalStorage from './useLocalStorage';
import axios from "axios";
const useAxios =(keyLS, baseUrl) => {
    const [responses, setResponse] = useLocalStorage(keyLS);
    // addResponse function take 2 parameter: format and reastUrl
    // if we don't pass the data with format, it get the default raw data, 
    // if we don't pass a restUrl we get the default emty string
    const addResponse = async (format = data => data, restUrl = "") => {
        try{
            const res = await axios.get(`${baseUrl}${restUrl}`);
            setResponse(data => [...data, format(res.data)]);
        }catch (err) {
            console.error( "there is something went wrong" );
        }
    }
    const clearResponse = () => setResponse([]);
    return [responses, addResponse, clearResponse];
}
export default useAxios;