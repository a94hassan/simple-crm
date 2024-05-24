import { Injectable, inject } from '@angular/core';
import { Firestore, collection, doc, onSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  fireStore: Firestore = inject(Firestore);

  unsubList;
  unsubSingle;

  constructor() {
    this.unsubList = onSnapshot(this.getUsersRef(), (list) => {
      list.forEach(element => {
        console.log(element);
      });
    });
    this.unsubSingle = onSnapshot(this.getSingleDocRef('users', 'q5AQ5UmkKlyypmHRApFz'), (element) => {
    });
    this.unsubSingle();
    this.unsubList();
  }

  getUsersRef() {
    return collection(this.fireStore, 'users');
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.fireStore, colId), docId);
  }
}
