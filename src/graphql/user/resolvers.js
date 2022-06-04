const user = () => {
  return {
    name: 'joseph',
    age: 28,
  };
};

function users() {
  return [
    {
      name: 'joseph',
      age: 28,
    },
    {
      name: 'arthur',
      age: 19,
    },
  ];
}

const userResolvers = {
  Query: {
    user,
    users,
  },
};

export { userResolvers };
