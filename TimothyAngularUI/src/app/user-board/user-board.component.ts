import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserBoardServiceService } from '../_services/user-board-service.service';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.css']
})
export class UserBoardComponent implements OnInit {

  constructor(private boardService: UserBoardServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  uploadBoard(uploadBoardForm: NgForm) {
    console.log(uploadBoardForm.value);
    this.boardService.uploadBoard(uploadBoardForm.value).subscribe(
      (resp) => {
        window.alert('success');
        this.router.navigate(['/']);
      }, 
      (err) => {
        window.alert('fail');
        console.log(err);
      }
    )
  }
}
