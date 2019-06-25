import User from '../models/User';
import Tour from '../models/Tour';
import mongoose from 'mongoose';

const Query = {
  status: () => 'Welcome to GraphQL',
  users: (_, args, { currentUser, userType }) => {
    if(!currentUser) {
      throw new Error('Unauthorized');
    }

    // Allowed only for admins
    if (!['admin'].includes(userType)) {
      throw new Error('Unauthorized');
    }

    return User.find().exec();
  },
  user: async (_, { id }, { currentUser }) => {
    if(!currentUser) {
      throw new Error('Unauthorized');
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Bad Request: Isn't a ObjectID")
    }
    const user = await User.findOne({ _id: id }).exec();
    return user ? user : null;
  },
  tours: (_, args, { currentUser, userType }) => {
    // Allowed all users
    if (!['admin', 'agency', 'viewer'].includes(userType)) {
      throw new Error('Unauthorized');
    }

    if (!currentUser) {
      throw new Error('Unauthorized');
    }
    return Tour.find().exec();
  },
};

export default Query;
