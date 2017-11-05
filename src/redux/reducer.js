export default (state = { users: [], posts: [] }, action) => {
  switch (action.type) {
    case 'Get_users':
      return Object.assign({}, state, { users: action.users })
    default:
      return state
  }
}
