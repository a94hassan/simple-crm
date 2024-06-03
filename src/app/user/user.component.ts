import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { User } from '../../models/user.class';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatCardModule, CommonModule, RouterOutlet, RouterModule ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = new User();
  constructor(public dialog: MatDialog, public userService: UserService) {}

  openDialog() {
    this.dialog.open(AddUserDialogComponent);
  }
}
