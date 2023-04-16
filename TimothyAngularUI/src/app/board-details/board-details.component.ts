import { Component, OnInit } from '@angular/core';
import { Board } from '../_model/board.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrls: ['./board-details.component.css']
})
export class BoardDetailsComponent implements OnInit {

  board: Board;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.board = this.activatedRoute.snapshot.data['board'];
    console.log(this.board);
  }

}
