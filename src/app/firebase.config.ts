import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  serverTimestamp,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Anime, Category } from "@/lib/Interface";
import { modifyString } from "@/lib/generalFunc";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_APP_ID!,
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth();

const addAnime = async (
  categories: string[],
  title: string,
  summary: string,
  image: string,
  author: string
) => {
  const data = {
    categories,
    title,
    summary,
    image,
    author,
    created_at: serverTimestamp(),
  };
  const result = await setDoc(doc(db, "animes", modifyString(title)), data);
  return result;
};

const addCategory = async (title: string) => {
  const data = {
    title,
    created_at: serverTimestamp(),
  };
  const result = await setDoc(doc(db, "categories", modifyString(title)), data);
  return result;
};

const getCategories = async () => {
  const categoryCollectionRef = collection(db, "categories");
  const querySnapshot = await getDocs(categoryCollectionRef);
  const queryList: Category[] = querySnapshot.docs.map((doc) => ({
    created_at: doc.data().created_at.seconds,
    title: doc.data().title,
    id: doc.id,
  }));
  return queryList;
};

const getAnimes = async () => {
  const animeCollectionRef = collection(db, "animes");
  const querySnapshot = await getDocs(animeCollectionRef);
  const queryList: Anime[] = querySnapshot.docs.map((doc) => ({
    created_at: doc.data().created_at.seconds,
    categories: doc.data().categories,
    image: doc.data().image,
    summary: doc.data().summary,
    title: doc.data().title,
    id: doc.id || modifyString(doc.data().title),
    author: doc.data().author,
  }));
  return queryList;
};

const getAnime = async (id: string) => {
  const animeCollectionRef = doc(db, "animes", id);
  const querySnapshot = await getDoc(animeCollectionRef);
  if (querySnapshot.exists()) {
    const queryList: Anime = {
      created_at: querySnapshot.data().created_at.seconds,
      categories: querySnapshot.data().categories,
      image: querySnapshot.data().image,
      summary: querySnapshot.data().summary,
      title: querySnapshot.data().title,
      id: querySnapshot.id || modifyString(querySnapshot.data().title),
      author: querySnapshot.data().author,
    };
    return queryList;
  }
};

export {
  app,
  db,
  storage,
  auth,
  addAnime,
  addCategory,
  getCategories,
  getAnimes,
  getAnime,
};
