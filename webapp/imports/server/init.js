import axios from 'axios';


export async function getCurrency(code) {
  try{
    const response = await axios.get(`http://api.coindesk.com/site/headerdata.json?currency=${code}`);
    let {bpi: {USD: {rate_float: value='N/C'}}} = response.data; 
    return value;   
  } catch (error) {
      console.log(error);
     return 'N/C'; 
  }
}