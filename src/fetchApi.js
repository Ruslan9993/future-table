import axios from 'axios';

export const url = ` http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

const getElements = async() => {
  try {
    const result = await axios.get(url)
    .then(({ data }) => data)
    

    return result;
  }

  catch(err) {
    console.log('err', err)
  }
}

export default getElements;