import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Board } from './_model/board.model';
import { Observable } from 'rxjs';
import { UserBoardServiceService } from './_services/user-board-service.service';

@Injectable({
  providedIn: 'root'
})
export class BoardResolveService implements Resolve<Board> {

  constructor(private boardService: UserBoardServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Board> {
    const id = route.paramMap.get("boardId");

    return this.boardService.getBoardById(id)
  }
}
