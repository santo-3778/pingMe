import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'src/assets/data/data';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  getDoc,
  getFirestore,
  onSnapshot,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  
  userId: any;
  db: any = getFirestore()
  userData: any;
  Swal: any;
  constructor(
    private router: Router,
    private auth: Auth,
    private firestore: Firestore
  ) {}

  //login method

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(
      () => {
        localStorage.setItem('email', email);
        this.userId = this.auth.currentUser?.uid;
        console.log(this.userId);
        
        this.router.navigate(['home']);
      },
      (err) => {
        Swal.fire('Something went wrong, please try again.');
        this.router.navigate(['/log in']);
      }
    );
  }
  //register  method
  register(creds: any) {
    createUserWithEmailAndPassword(this.auth, creds.email, creds.password).then(
      () => {
        this.userId = this.auth.currentUser?.uid;
        const userDetails = {
          uid: this.userId,
          name: creds.name,
          email: creds.email,
          gender: creds.gender,
        };
        const docRef = collection(this.firestore, 'users');
        addDoc(docRef, userDetails)
          .then(() => {})
          .catch((err) => console.log(err.message));
        Swal.fire('User created successfully');
        this.router.navigate(['/home']);
      },
      (err) => {
        Swal.fire('something went wrong');
        this.router.navigate(['/signup']);
      }
    );
  }

  // async addData(docRef: any, data: any) {
  //   await setDoc(docRef, data);
  // }

  //logout method
  logout() {
    signOut(this.auth).then(
      () => {
        localStorage.removeItem('email');
        this.router;
        this.router.navigate(['/login']);
      },
      (err) => {
        alert('something went wrong');
      }
    );
  }

  getdata(id: any): Observable<any> {
    const collectionInstance = collection(this.firestore, 'users', id);
    this.userData = collectionData(collectionInstance, { idField: 'id' });
    return this.userData;
  }

  visible: boolean | undefined;

  no(): void {
    this.visible = false;
  }

  yes() {
    this.visible = true;
  }

  doSomethingElseUseful() {}

  view(): Observable<any> {
    const collectionInstance = collection(this.firestore, 'users');
    this.userData = collectionData(collectionInstance, { idField: 'id' });
    return this.userData;
  }

  async getUser(id: any): Promise<any> {
    try {
      const docSnap = await getDoc(doc(this.db, "users", id));
      if (docSnap.exists()) {
        return docSnap.data()
      } else {
        console.log("Document does not exist")
      }
    } catch (error) {
      console.log(error)
    }
  }
    

  insertData(docRef: any, values: any) {
    addDoc(docRef, values)
      .then(() => {
        Swal.fire('Message added successfully');
      })
      .catch((err) => Swal.fire(err.message))
  }
  
}
