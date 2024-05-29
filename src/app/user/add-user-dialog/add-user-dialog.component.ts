import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, doc, addDoc } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@Component({
  selector: 'app-add-user-dialog',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, FormsModule, MatProgressBarModule],
  templateUrl: './add-user-dialog.component.html',
  styleUrl: './add-user-dialog.component.scss'
})
export class AddUserDialogComponent {

  fireStore: Firestore = inject(Firestore);

  user = new User();
  birthDate!: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<AddUserDialogComponent>) {}

  async saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate?.getTime();
    console.log('Current user is', this.user);
    let usersRef = this.getUsersRef();
    await addDoc(usersRef, this.user.toJSON()).catch(
      (e) => { console.log(e) }
    )
    this.loading = false;
    this.dialogRef.close();

  }

  getUsersRef() {
    return collection(this.fireStore, 'users');
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.fireStore, colId), docId);
  }
}
