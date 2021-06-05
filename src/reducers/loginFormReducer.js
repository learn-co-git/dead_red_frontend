let logged = {
  username: "",
  password: ""
}

export default (state=logged, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      logged = {
        username: "",
        password: ""
      }
      return action.formData
      default:
        return state;
  }
}
