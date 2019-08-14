declare var require: any;
import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Review } from '../../../Interfaces/Review';

const imgGen = require('@dudadev/random-img');

@Component({
  selector: 'create-edit-comment',
  templateUrl: 'createEditComment.html'
})
export class CreateEditComment {
  @Input() currentReview = {
    name: '',
    comment: '',
    avatar: '',
    id: ''
  };
  // reviewerName: string;
  // comment: string;
  @Input() isEditMode = false;

  @Output() commentUpdated = new EventEmitter<Review>();

  constructor() {

  }

  updateReview() {
    if (this.isEditMode) {
      this.commentUpdated.emit(this.currentReview);
    }
    else {
      imgGen().then(avatarURL => {
        this.currentReview.avatar = avatarURL;
        this.currentReview.id = this.createRandomId();
        console.log(this.currentReview);
        this.commentUpdated.emit(this.currentReview);
        this.currentReview = {
          name: '',
          comment: '',
          avatar: '',
          id: ''
        };
      });
    }
  }

 createRandomId () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

}
