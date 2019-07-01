import User from '../models/User';

const Query = {
  status: () => 'Welcome to GraphQL',
  users: (_, args, { currentUser }) => {
    if(!currentUser) {
      throw new Error('Unauthorized');
    } 
    return User.find().exec();
  },
};

export default Query;
