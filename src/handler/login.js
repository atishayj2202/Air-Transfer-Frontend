import { getAuth, signInWithPopup } from "firebase/auth";
import axios from "axios";

export async function login(provider) {
  const auth = getAuth();
  await signInWithPopup(auth, provider)
    .then(async (result) => {
      const baseUrl =
        "https://air-it-backend.yellowbush-cadc3844.centralindia.azurecontainerapps.io/";
      await axios.post(`${baseUrl}/user/create-user/`, {
        email: result.user.email,
        name: result.user.displayName,
        firebase_user_id: result.user.uid,
        auth_type: "google",
      });
      return result.user;
    })
    .catch(() => {
      return false;
    });
}
