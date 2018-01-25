import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: {}[];

  commentToEdit;

  constructor(
  	private commentService: CommentService
  ) { }

  ngOnInit() {
  	this.comments = this.commentService.getComments();
    console.log('Got Comments!');
    this.commentService.onCommentUpdated(()=>{
      console.log('hit onCommentUpdated');
    })
  }

  deleteComment(index){
    this.commentService.deleteComment(index);
  }

  toggleEdit(comment){
    this.commentToEdit = comment;
  }

  editComment(index){
    this.commentService.editComment(index, this.commentToEdit);
    this.commentToEdit = {};
  }
}
