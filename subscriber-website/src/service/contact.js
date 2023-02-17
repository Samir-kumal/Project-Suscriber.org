import axios from "axios";

class Service{
    Contact = (formdata) =>{
            const url = 'http://localhost:8080/api/submit-form';

            return axios.post(url,formdata,{
                headers:{
                    "x-api-key":"pqrstuvwxyz1234",
                'Content-Type':'application/json'
                }
            })
    }
}

export default new Service();