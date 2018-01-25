import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment/comment.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  
   newComment={
    comment:'',
    author:''
  };

  constructor(
  	private commentService: CommentService
  ) { }

  ngOnInit() {
  }


  addComment(comment){
    this.commentService.addComment(comment);
    this.newComment.comment='';
    this.newComment.author='';
  }

}
