// import app from "./FirebaseConfig"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./FirebaseConfig";

// export const auth = getAuth(app);

const auth = getAuth(app);

const signUpUser = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("You are Sign Up.", user.password, user.email)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

export default signUpUser

