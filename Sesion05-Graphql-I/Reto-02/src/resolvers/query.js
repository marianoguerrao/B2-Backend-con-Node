import User from '../models/User';
import Tour from '../models/Tour';

const Query = {
  status: () => 'Welcome to GraphQL',
  users: () => {
    return User.find().exec();
  },
  tours: () => {
    return Tour.find().exec();
  },
};

export default Query;
