import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent {
  selectedUser: any;

  constructor(public userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getUser(id);
  }

  getUser(id: string) {
    this.userService.getUser(id).subscribe({
      next: (data) => {
        console.log(data);
        this.selectedUser = data;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
