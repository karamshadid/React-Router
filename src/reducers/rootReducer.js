const initState = {
  posts: [
    {
      id: "1",
      title: "Sucuess At Work Place",
      body:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ipsum similique natus fugit voluptatem quod itaque cumque cum, cupiditate blanditiis, necessitatibus maiores laboriosam non beatae. Voluptates id at hic reprehenderit!"
    },
    {
      id: "2",
      title: "Find Your Holiday Destination",
      body:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ipsum similique natus fugit voluptatem quod itaque cumque cum, cupiditate blanditiis, necessitatibus maiores laboriosam non beatae. Voluptates id at hic reprehenderit!"
    },
    {
      id: "3",
      title: "Living A Healthy Life",
      body:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ipsum similique natus fugit voluptatem quod itaque cumque cum, cupiditate blanditiis, necessitatibus maiores laboriosam non beatae. Voluptates id at hic reprehenderit!"
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
