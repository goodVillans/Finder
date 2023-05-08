import { useState, useContext } from 'react'
import UserItem from './USerItem';
import PuffLoader from 'react-spinners/PuffLoader'
import GithubContext from '../../context/github/GithubContext';

function UserList() {
   const {users, loading, fetchUsers} = useContext(GithubContext)

   const[color, setColor] = useState("#D2A8FF");

   // override css for loading spinner
   const override = {
      display: "block",
      margin: "0 auto",
    };

   if(!loading){
      return (
       <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
         {users.map((user) => (
            <UserItem key={user.id} user={user} />
         ))}
       </div>
     )
   } else {
      return(
         <PuffLoader
         color={color}
         loading={loading}
         cssOverride={override}
         size={150}
         aria-label='Loading Spinner'
         />
      ) 
   }
}

export default UserList
