export async function EntityCreate (endpoint, entity) { 
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(entity),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return res.json()
  }
  catch (error) {
    throw error
  }
}
export async function EntityUpdate (endpoint, data ) {
  try { 
    return await fetch(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  } catch (error) {
    throw error  
  }
}
export async function EntityGetAll (endpoint) {
  try {
    const res = await fetch(endpoint, {
      method: 'GET',
    })
    return await res.json()
  } catch (error) {
    throw error     
  }
}
export async function EntityGetById (endpoint, id) {
  try {
    const res = await fetch(endpoint, id, {
      method: 'GET',
    })
    return await res.json()
  } catch (error) {
    throw error  
  }
}
export async function EntityDelete (endpoint, id) {
  try {
    const res = await fetch(endpoint, id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  } catch (error) {
    throw error  
  }
}