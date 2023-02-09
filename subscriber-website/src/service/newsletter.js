import axios from 'axios'
class newsLetter{
    register(){
        return axios.get('http://localhost:8080/api/newsletter',{
            headers:{
                "x-api-key":"pqrstuvwxyz1234"
            }
        })
    }
    signin(formdata){
        return axios.post('http://localhost:8080/api/newsletter/sign-up/newsletter',formdata,{
            headers:{
                "x-api-key":"pqrstuvwxyz1234",
                'Content-Type':'application/json'
            }
        })
    }
}

export default new newsLetter();