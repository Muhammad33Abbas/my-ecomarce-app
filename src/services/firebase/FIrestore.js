import { getFirestore } from "firebase/firestore";
import { app } from "./FirebaseConfig";
// import { app } from "./config";

export const db = getFirestore(app);
