import { Component,inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-user-dialog',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, FormsModule],
  templateUrl: './add-user-dialog.component.html',
  styleUrl: './add-user-dialog.component.scss'
})
export class AddUserDialogComponent {
  user = new User();
  birthDate!: Date;

  firestore: Firestore = inject(Firestore)

  constructor() {}

  saveUser() {
    // this.user.birthDate = this.birthDate?.getTime();
    // console.log('Current User is ', this.user);
    // this.firestore
    //   .collection('users')
    //   .add(this.user)
    //   .then((result:any) => {
    //     console.log('Adding user finished', result);
    //     });
  }
}
