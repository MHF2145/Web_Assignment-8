import { Access } from 'payload/config'

export const authorOrAdmin: Access = ({ req: { user } }) => {
  if (!user) {
    return false
  }
  if (user.Collection === "users"){
    return true
  }

  return{
    authorID:{
        equals: user.id,
    }
  }
}