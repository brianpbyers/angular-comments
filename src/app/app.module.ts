import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CommentService } from './comment/comment.service';
import { CommentListComponent } from './comment-list/comment-list.component';
import { NewCommentComponent } from './new-comment/new-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentListComponent,
    NewCommentComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ CommentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
