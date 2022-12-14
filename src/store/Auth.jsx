const isAuthenticated = () => {
  if(typeof window === 'undefined') {
    return false;
  }
  const user = JSON.parse(localStorage.getItem('user'));
  if(user) {

    return user;
  }
  return false;
}

export default isAuthenticated;