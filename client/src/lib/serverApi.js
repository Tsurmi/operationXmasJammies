const ajaxRequest = ({url, method, body, headers = {}}) => {
  const requestHeaders = new Headers({
    'Content-Type': 'application/json',
    ...headers
  })

  const options = {
    headers: requestHeaders,
    method: method,
    body: JSON.stringify(body),
    credentials: 'include'
  }

  return fetch(url, options)
    .then(handleErrors)
    .then(response => response.json())
    .then(json => json.data)
}

const handleErrors = response => {
  if (!response.ok) {
    return response.json()
      .then(({message, data}) => {
        const err = Error(message)
        Object.assign(err, data)
        err.status = response.status
        throw err
      })
  }
  return response
}
export const getAllGifts = () => ajaxRequest({url: '/api/gifts', method: 'GET'})

export const getGiftById = (giftId) => ajaxRequest({url: `/api/gifts/id/${giftId}`, method: 'GET'})

export const addGift = (gift) => ajaxRequest({url: '/api/gifts', method: 'POST', body: gift})

export const updateGift = (giftId, gift) => ajaxRequest({url: `/api/gifts/id/${giftId}`, method: 'PUT', body: gift})

export const deleteGift = (giftId) => ajaxRequest({url: `/api/gifts/id/${giftId}`, method: 'DELETE'})

export const getRandomGift = () => ajaxRequest({url: '/api/gifts/random', method: 'GET'})

export const getAllUsers = () => ajaxRequest({url: '/api/users', method: 'GET'})

export const getUserById = (userId) => ajaxRequest({url: `/api/users/id/${userId}`, method: 'GET'})

export const addUser = (newUser) => { return ajaxRequest({url: '/api/signup', method: 'POST', body: newUser}) }

export const updateUser = (userId, user) => ajaxRequest({url: `/api/users/${userId}`, method: 'PUT', body: user})

export const deleteUser = (userId) => ajaxRequest({url: `/api/users/${userId}`, method: 'DELETE'})

export const loginUser = (email, password) => ajaxRequest({url: '/api/login', method: 'POST', body: {email, password}})

export const logoutUser = () => ajaxRequest({url: '/api/logout', method: 'GET'})
