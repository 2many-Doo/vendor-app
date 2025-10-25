import { User } from '@/models';
import { QueryResolvers } from '@/types/generated';

export const users: QueryResolvers['users'] = async () => {
  const users = await User.find({});
  
  return users.map(user => ({
    id: (user as { _id: { toString(): string } })._id.toString(),
    name: user.name,
  }));
};
