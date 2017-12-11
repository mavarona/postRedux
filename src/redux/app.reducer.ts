
import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

import { postReducer } from './post/post.reducer';

export const AppReducer: ActionReducerMap<AppState> = {
  post: postReducer
};
