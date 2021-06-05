export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const login = credentials => {
  return dispatch => {
    return fetch("http://localhost:3001/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(r => r.json())
    .then(user => {
      if(user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER",

  }
}

export const logout = () => {
  return (dispatch) => {
    return fetch('http://localhost:3001/logout', {
      credentials: "include",
      method: "DELETE"
    })
    dispatch(clearCurrentUser());
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/current", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r => r.json())
    .then(user => {
      if (user.error) {
        alert("No User Logged In")
      } else {
        dispatch(setCurrentUser(user.data))
      }
    })
  }
}
