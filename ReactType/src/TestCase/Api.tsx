import axios from 'axios';

const fetchData : any = () => {
    return axios.get('https://animechan.vercel.app/api/random')
        .then(res => {
            return res.data.anime
        })
        .catch(erorr => {
            console.log(erorr)
        })
};

export default fetchData;