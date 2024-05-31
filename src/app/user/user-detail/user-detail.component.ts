import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user.class';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [ MatCardModule ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})

export class UserDetailComponent {

  id: string = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, public userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log('ID:', this.id);
      // this.user = this.userService.subUser(this.id);
    });
  }
}
