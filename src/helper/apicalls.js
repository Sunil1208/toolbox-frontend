const { API } = require("../backend");

export const uploadFuelCost = (file) => {
    return fetch(`${API}/dashboard/upload/fuelCost`,{
        method: "POST",
        body: file
    })
    .then( response => {
        
        return response.json()
    })
    .catch( err => console.log(err))
    
}

export const uploadDpCost = (file) => {
    return fetch(`${API}/dashboard/upload/dpCost`,{
        method: "POST",
        body: file
    })
    .then( response => {
        
        return response.json()
    })
    .catch( err => console.log(err))
    
}


