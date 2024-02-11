import { CollectionConfig } from 'payload/types'
import { authenticatedUser } from '../access/authenticatedUser'
import { authorOrAdmin } from '../access/authorOrAdmin'

const Notes: CollectionConfig = {
  slug: 'notes',
  admin: {
    useAsTitle: 'id',
  },
  access: {
    create: authenticatedUser,
    read: authorOrAdmin,
  },
  fields: [
    {
      name: "authorID",
      type: "text",
    },
    {
      name: "content",
      type: "textarea",
    }
  ],
};

export default Notes;
