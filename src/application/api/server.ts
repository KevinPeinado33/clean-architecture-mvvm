import Axios from 'axios'

const endpointBase = import.meta.env.VITE_ENDPOINT_BASE

export const apiServer = Axios.create({
    baseURL: endpointBase
})
