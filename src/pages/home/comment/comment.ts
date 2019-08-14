
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Review } from '../../../Interfaces/Review';

@Component({
  selector: 'user-comment',
  templateUrl: 'comment.html'
})
export class UserComment {
  @Input() review: Review;
  @Output() commentDeleted = new EventEmitter<string>();
  @Output() editModeClicked = new EventEmitter<boolean>();

  isEditMode = false;

  constructor() {

  }

  editcomment() {
    this.isEditMode = true;
    this.editModeClicked.emit(this.isEditMode);
  }

  deleteComment() {
    this.commentDeleted.emit(this.review.id);
  }

  commentUpdated() {
    this.isEditMode = false;
    this.editModeClicked.emit(false);
  }

}
