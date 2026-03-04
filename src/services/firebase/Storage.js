import { getStorage } from "firebase/storage";
import { app } from "./FirebaseConfig";
// import { app } from "./config";

export const storage = getStorage(app);
