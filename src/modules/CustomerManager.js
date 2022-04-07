const remoteURL = "http://localhost:5002"

export const getCustomerById = (customerId) => {
    return fetch(`${remoteURL}/customers/${customerId}?_expand=location&_embed=animals`)
    .then(res => res.json())
}
  
export const getAllCustomers = () => {
    return fetch(`${remoteURL}/customers?_embed=animals`)
    .then(res => res.json())
}