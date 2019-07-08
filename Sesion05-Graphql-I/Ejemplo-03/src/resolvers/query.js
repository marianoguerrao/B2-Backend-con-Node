import User from '../models/User';

const Query = {
  status: () => 'Welcome to GraphQL',
  users: () => {
    return User.find().exec();
  },
};

export default Query;
