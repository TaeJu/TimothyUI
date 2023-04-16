import { Component, OnInit } from '@angular/core';
import { UserBoardServiceService } from '../_services/user-board-service.service';
import { Router } from '@angular/router';
import { Board } from '../_model/board.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageNumber: number = 0;

  boardDetails: Board[] = [];

  showLoadButton = false;

  constructor(private userBoardService: UserBoardServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getBoardDetails();
  }

  public getBoardDetails() {
    this.userBoardService.getBaord(this.pageNumber).subscribe(
      (resp: Board[]) => {
        console.log(resp);
        if (resp.length == 8) {
          this.showLoadButton = true;
        } else {
          this.showLoadButton = false;
        }
        resp.forEach(p => this.boardDetails.push(p));
      }, (error) => {
        console.log(error);
      }
    );
  }

  showBoardDetilas(boardId) {
    this.router.navigate(['/boardDetails', {boardId: boardId}]);
  }

  public loadMoreProduct() {
    this.pageNumber = this.pageNumber + 1;
    this.getBoardDetails();
  }
}
