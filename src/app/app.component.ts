import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { Observable } from 'rxjs/Observable';

import { Post } from '../redux/post/post.model';
import * as PostActions from '../redux/post/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post: Observable<Post>;

  text: string;

  constructor (
    private _store: Store<AppState>
  ) {
    this.post = this._store.select ('post');
  }

  editText() {
    this._store.dispatch( new PostActions.EditText( this.text ));
  }

  upvote() {
    this._store.dispatch( new PostActions.Upvote());
  }

  downvote() {
    this._store.dispatch( new PostActions.Downvote());
  }

  resetPost() {
    this._store.dispatch( new PostActions.Reset());
  }

}
