const { API } = require("../backend");

export const uploadFile = (file) => {
    return fetch(`${API}/dashboard/upload`,{
        method: "POST",
        body: file
    })
    .then( response => {
        return response.json()
    })
    .catch( err => console.log(err))
    
}