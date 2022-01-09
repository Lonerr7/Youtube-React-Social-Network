import profileReducer, {
  addPost,
  updateNewPostText,
  deletePost,
} from './profileReducer';

const state = {
  posts: [
    {
      id: 1,
      message: 'Hi, how are u?',
      likesCount: 20,
    },
    {
      id: 2,
      message: "It's my first post",
      likesCount: 15,
    },
  ],
  newPostText: '',
};

it('new post should be added', () => {
  const action = addPost();

  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});

it('newPostText should be changed', () => {
  const action = updateNewPostText('text');

  const newState = profileReducer(state, action);

  expect(newState.newPostText).toBe('text');
});

it('post should be deleted (posts.length should be decreased by 1)', () => {
  const action = deletePost(1);

  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(state.posts.length - 1);
});

it(`post shouldn't be deleted`, () => {
  const action = deletePost(10);

  const newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(state.posts.length);
});
