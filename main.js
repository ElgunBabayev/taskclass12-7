const base_url = 'https://dog.ceo/api/breeds/image/random';

const axiosInstance = axios.create({
    baseURL: base_url,
    timeout: 1000
});
const network = {
    getAll: async (url) => {

        let responseData = [];
        await axiosInstance.get(`${url}`)
            .then(res => {
                responseData = res.data;
            })
        
        return responseData;
    }}
       let image =document.querySelector("img");

    setInterval(()=>{
    network.getAll().then(data=> {
        image.src = data.message;
    })
}, 1000)
    