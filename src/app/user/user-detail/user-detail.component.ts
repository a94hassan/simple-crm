import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [ MatCardModule ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})

export class UserDetailComponent {

  id: string = '';

  constructor(private route: ActivatedRoute, public userService: UserService) { }

  async ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    await this.userService.getUser(this.id);
    console.log(this.userService.user);
  }
}
