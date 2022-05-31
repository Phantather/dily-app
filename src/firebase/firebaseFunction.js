import {db, storage} from "./firebase";
import {collection, getDocs, addDoc, doc, updateDoc, deleteDoc} from "@firebase/firestore";
import {ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage'

const userCollectionRef = collection(db,'shoes');


//получение данных из базы
export const getData = (setData) => {
    getDocs(userCollectionRef)
        .then((res) => setData(res.docs.map(el => ({...el.data(), id:el.id}) )))
};

// обновление товара
export const updateProduct = (id, obj) => {
    const productDoc = doc(db, 'shoes', id);
    updateDoc(productDoc, obj)
};

// удаление товара
export const deleteProduct = (id) => {
    const productDoc = doc(db, 'shoes', id);
    deleteDoc(productDoc)
};

// создание товара
export const createProduct = (image, setProgress, data, setShoes) => {
    if (!image) return;
    const storageRef = ref(storage, image.name);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on("state_changed",
        (snapshot => {
            const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(prog)
        }),
        (err) => console.log(err),
        () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then(async (url)=> {
                       await addDoc(userCollectionRef, {...data, image:url})
                       await getData(setShoes)
                    })
        })
}
