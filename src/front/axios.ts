import axios from 'axios'

export default axios.create({
    baseURL: CONTEXT_ROOT,
    responseType: 'json'
})
