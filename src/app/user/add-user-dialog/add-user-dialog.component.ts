import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../../models/user.class';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UserService } from '../../services/user.service';
import { addDoc } from 'firebase/firestore';



@Component({
  selector: 'app-add-user-dialog',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, FormsModule, MatProgressBarModule],
  templateUrl: './add-user-dialog.component.html',
  styleUrl: './add-user-dialog.component.scss'
})
export class AddUserDialogComponent {


  user = new User();
  birthDate!: Date;
  loading = false;


  constructor(public dialogRef: MatDialogRef<AddUserDialogComponent>, private userService: UserService) {}

  async saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate?.getTime();
    console.log('Current user is', this.user);
    let usersRef = this.userService.getUsersRef();
    await addDoc(usersRef, this.user.toJSON()).catch(
      (e) => { console.log(e) }
    )
    this.loading = false;
    this.dialogRef.close();
  }

}
