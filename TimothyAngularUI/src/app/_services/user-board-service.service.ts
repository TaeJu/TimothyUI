import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { Board } from '../_model/board.model';

@Injectable({
  providedIn: 'root'
})
export class UserBoardServiceService {
  
  PATH_OF_API_BOARD_SERVICE = "http://localhost:9090/board-service";

  constructor(private httpclient: HttpClient,
    private userAuthService: UserAuthService) { }

  requestHeader = new HttpHeaders(
      { "No-Auth":"True" }
  );

  public uploadBoard(boardRequestData: FormData) {
    return this.httpclient.post(this.PATH_OF_API_BOARD_SERVICE + "/uploadBoard", boardRequestData);
  }

  public getBaord(pageNumber) {
    return this.httpclient.get<Board[]>(this.PATH_OF_API_BOARD_SERVICE + "/getBoard?pageNumber=" + pageNumber);
  }

  public getBoardById(boardId) {
    return this.httpclient.get<Board>(this.PATH_OF_API_BOARD_SERVICE + "/getBoard/" + boardId);
  }
}
