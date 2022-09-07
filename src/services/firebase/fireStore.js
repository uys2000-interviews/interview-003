import app from "./app";
import {
  getFirestore,
  updateDoc,
  setDoc,
  getDoc,
  doc,
} from "firebase/firestore";

const db = getFirestore(app);

export const writeData = function (path, data) {
  const docRef = doc(db, "testSparta", path);
  return updateDoc(docRef, data).catch((err) => {
    console.log(err);
    return setDoc(docRef, data).catch((err) => console.log(err));
  });
};

export const readData = function (path) {
  const refDoc = doc(db, "testSparta", path);
  return getDoc(refDoc);
};
