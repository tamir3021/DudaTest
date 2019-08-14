
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

  ionViewDidLoad() {
    const savedComments = localStorage.getItem('comments');
    this.comments = JSON.parse(savedComments);
  }

  updateCommentsList(comment: Review) {
    if (!this.isEditMode) {
      this.comments.push(comment);
      localStorage.setItem('comments', JSON.stringify(this.comments));
    }
  }

  updateEditMode(isEditMode: boolean) {
    this.isEditMode = isEditMode;
  }

  deleteComment(commentId: string) {
    const commentToDelete = this.comments.findIndex(comment => comment.id == commentId);
    if (commentToDelete > -1) {
      this.comments.splice(commentToDelete, 1);
      localStorage.setItem('comments', JSON.stringify(this.comments));
    }
  }

}
