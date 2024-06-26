import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, getDoc, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { UserInterface } from '../interfaces/user.interface';
import { User } from '../../models/user.class';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  fireStore: Firestore = inject(Firestore);

  users: UserInterface[] = [];
  user: UserInterface = new User();
  unsubUsers;

  constructor() { 
    this.unsubUsers = this.subUsers();
  }

  getUsersRef() {
    return collection(this.fireStore, 'users');
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.fireStore, colId), docId);
  }

  subUsers() {
    return onSnapshot(this.getUsersRef(), (list) => {
      this.users = [];
      list.forEach(element => { 
        this.users.push(this.setUserObject(element.data(), element.id));
      })
    })
  }

  async getUser(docId: string) {
    let docRef = doc(this.fireStore, 'users', docId);
    let docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      this.user = this.setUserObject(docSnap.data(), docId);
    } else {
      console.log("No such document!");
    }
  }

  setUserObject(obj: any, id:string):UserInterface {
    return {
      id: id || '',
      firstName: obj.firstName || '',
      lastName: obj.lastName || '',
      email: obj.email || '',
      birthDate: obj.birthDate || '',
      street: obj.street || '',
      zipCode: obj.zipCode || '',
      city: obj.city || '', 
    }
  }

  async updateUser(user: User) {
    if (user.id) {
      let docRef = this.getSingleDocRef('users', user.id);
      await updateDoc(docRef, user.toJSON()).catch(
        (e) => { console.log(e);
        }
      );
    }
  }
}
