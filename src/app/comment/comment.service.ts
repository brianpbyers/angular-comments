import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CommentService {


 	private comments = [
      {comment:'first comment!', author: 'Billy'},
      {comment: 'nice work!', author: 'Potato'},
      {comment: 'I would also like to congratulate you!', author: 'Jeff'}
  	];

  	private subject = new Subject<any>();

  constructor() { }

  updateSubject(){
  	this.subject.next(this.comments);
  }

  getComments(){
  	return this.comments;
  }


  addComment(comment){
  	console.log(comment);
  	if(comment.comment){
  		this.comments.push({comment:comment.comment, author: comment.author||'some anonymous douche'});

  	}else console.log('Please enter a comment first!');
  	this.updateSubject();
  }

  deleteComment(index){
  	this.comments.splice(index, 1);
  	this.updateSubject();
  }

  editComment(index, comment){
  	this.comments[index] = comment;
    this.updateSubject;
  }

  onCommentUpdated(callback){
  	this.subject.asObservable().subscribe(callback);
  }


}
