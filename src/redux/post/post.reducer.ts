
import * as PostActions from '../post/post.actions';
import { Post } from '../post/post.model';

export type Action = PostActions.All;

const initialState: Post = {
  text: 'Hello, text by default',
  likes: 0
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function postReducer ( state: Post = initialState, action: Action ): Post {

  if ( state === null ) {
    return state;
  }

  switch (action.type) {
    case PostActions.EDIT_TEXT:
      return newState (state, { text: action.payload });
    case PostActions.UPVOTE:
      return newState (state, { likes: state.likes + 1 });
    case PostActions.DOWNVOTE:
      return newState (state, { likes: state.likes - 1 });
    case PostActions.RESET:
      return initialState;
    default:
      return state;
  }

}
