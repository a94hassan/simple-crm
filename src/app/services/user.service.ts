import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, onSnapshot } from '@angular/fire/firestore';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  fireStore: Firestore = inject(Firestore);

  users: UserInterface[] = [];
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
        this.users.push(this.setUserObject(element.data(), element.id))
      })
    })
  }

  setUserObject(obj: any, id:string):UserInterface {
    return {
      id: id || '',
      firstName: obj.firstName || '',
      lastName: obj.lastName || '',
      birthDate: obj.birthDate || '',
      street: obj.street || '',
      zipCode: obj.zipCode || '',
      city: obj.city || '', 
    }
  }
}
