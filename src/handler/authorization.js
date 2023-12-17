import { getAuth } from "firebase/auth";

export function authUser() {
  const user = getAuth().currentUser;
  if (user) {
    return user;
  } else {
    return null;
  }
}

export function authUserBool() {
  const user = getAuth().currentUser;
  if (user) {
    return true;
  } else {
    return false;
  }
}
