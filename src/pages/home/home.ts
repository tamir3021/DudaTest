
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Review } from '../../Interfaces/Review';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  comments: Review[] = [];
  isEditMode = false;

  constructor(public navCtrl: NavController) {

  }

  updateCommentsList(comment: Review) {
    if (this.isEditMode) {
      
    }
    else {
      this.comments.push(comment);
      console.log(this.comments);
    }
  }

  updateEditMode(isEditMode: boolean) {
    this.isEditMode = isEditMode;
  }

  deleteComment(commentId: string) {
    const commentToDelete = this.comments.findIndex(comment => comment.id == commentId);
    if (commentToDelete > -1) {
      this.comments.splice(commentToDelete, 1);
    }
  }

}
