import { Component } from '@angular/core';
import { User } from '../../../../models/user.class';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { UserInterface } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-edit-user-dialog',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [ MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatProgressBarModule, MatDatepickerModule, FormsModule ],
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss'
})
export class EditUserDialogComponent {

  user: UserInterface = new User();
  birthDate!: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<EditUserDialogComponent>, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.user;
  }

  saveUser() {

  }
}
