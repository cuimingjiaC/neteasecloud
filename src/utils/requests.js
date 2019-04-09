import axios from 'axios'

const getRequestMethod = ({url,method='GET',data={},params={}})=>{
    return axios({
        url,
        method,
        data,
        params
    })
}

// export default {
//     getRequestMethod
// }

export {
    getRequestMethod
}