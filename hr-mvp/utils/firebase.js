import { initializeApp } from 'firebase/app';
import { getFirestore,  collection, getDocs, query, where, addDoc, doc, updateDoc, setDoc, deleteDoc  } from "firebase/firestore";


const config = {
    apiKey: "AIzaSyAqkPhESQDk2L3fGeCYVlC1oHbo0pcMOS8",
    authDomain: "aifa-fyp.firebaseapp.com",
    projectId: "aifa-fyp",
    storageBucket: "aifa-fyp.appspot.com",
    messagingSenderId: "363863727832",
    appId: "1:363863727832:web:12c8ebee8962204346c1ad"
  };

const app = initializeApp({...config});




class Firebase {
    constructor(){
        this.db = getFirestore(app);
    }

    

    async addEmployees(data){
        // return await this.db.collection('employee').add(data)
        return await addDoc(collection(this.db, 'employee'),data)
    }

    async getEmployees(){
        // return await this.db.collection('package').doc(id).get() 
        return await getDocs(query(collection(this.db, 'employee')))
    }

    async deleting(id){
        // await this.db.collection().doc(id).delete();
        await deleteDoc(doc(this.db, 'employee', id));
        location.reload();
    }
  
    async updateEmployee( data){
        // return await this.db.collection('employee').do).set(data)
        const refData = await doc(this.db, 'employee', data.idFirebase);
        await setDoc(refData, data)
        alert("Update successful")
        location.reload()
    }
    
  
}


export default new Firebase();