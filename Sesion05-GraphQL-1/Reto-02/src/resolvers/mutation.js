import User from '../models/User';
import bcrypt from 'bcryptjs';
import Tour from '../models/Tour';

const Mutation = {
  signup: async (parent, { input }) => {
    const { email, password, name, lastName } = input;

    const user = await User.findOne({ email });
    if (user) {
      throw new Error('This email is already in use');
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      lastName,
      email,
      password: encryptedPassword,
    });
    newUser.save();

    return {
      token: 'jwt-token-generated',
      user: newUser,
    };
  },
  createTour: async(_, { input }) => {
    const tour = new Tour({ ...input });
    tour.save();

    return tour;
  },
};

export default Mutation;
