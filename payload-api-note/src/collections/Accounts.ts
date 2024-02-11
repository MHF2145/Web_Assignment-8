import { CollectionConfig } from 'payload/types';
import { authenticatedUser } from '../access/authenticatedUser';

const Accounts: CollectionConfig = {
  slug: 'accounts',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: authenticatedUser,
  },
  fields: [
    {
      name: 'username',
      type: 'text',
      minLength: 4,
      maxLength: 20,
      required: true,
    },
  ],
};

export default Accounts;
