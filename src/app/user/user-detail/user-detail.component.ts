import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { EditAddressDialogComponent } from './edit-address-dialog/edit-address-dialog.component';
import { User } from '../../../models/user.class';
import { UserInterface } from '../../interfaces/user.interface';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [ MatCardModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})

export class UserDetailComponent {

  id: string = '';
  user: UserInterface = new User();

  constructor(private route: ActivatedRoute, public userService: UserService, public dialog: MatDialog) { }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    await this.userService.getUser(this.id);
    this.user = this.userService.user;
    console.log(this.userService.user);
  }

  openUserDialog() {
    this.dialog.open(EditUserDialogComponent);
  }

  openAddressDialog() {
    this.dialog.open(EditAddressDialogComponent);
  }
}
