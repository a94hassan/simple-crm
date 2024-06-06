import { Component } from '@angular/core';
import { User } from '../../../../models/user.class';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-edit-address-dialog',
  standalone: true,
  imports:  [ MatDialogModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatProgressBarModule, FormsModule ],
  templateUrl: './edit-address-dialog.component.html',
  styleUrl: './edit-address-dialog.component.scss'
})
export class EditAddressDialogComponent {

  user: User = new User();
  birthDate!: Date;
  loading = false;

  constructor(public dialogRef: MatDialogRef<EditAddressDialogComponent>, private userService: UserService) {}

  ngOnInit() {
    this.user = new User(this.userService.user);
  }

  updateUser() {
    this.userService.updateUser(this.user);
  }
}
