const post = () => {
  return {
    id: 'abdc2-scc',
    title: 'post title',
  };
};

const posts = () => {
  return [
    {
      id: 'abdc2-scc',
      title: 'post title',
    },
    {
      id: '65932-scc',
      title: 'post title 2',
    },
  ];
};

const postResolvers = {
  Query: {
    post,
    posts,
  },
};

export { postResolvers };
