import { getAuth, signInWithPopup } from "firebase/auth";

export async function login(provider) {
  const auth = getAuth();
  await signInWithPopup(auth, provider)
    .then((result) => {
      return result.user;
    })
    .catch(() => {
      return false;
    });
}
