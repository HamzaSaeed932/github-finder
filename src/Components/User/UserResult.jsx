import {useContext} from 'react'
import spinner from '../Layout/spinner.gif'
import UserItem from './UserItem'
import GithubContext from '../../context/Github/GithubContext'
function UserResult() {

    const {users,loading}=useContext(GithubContext)
    // const [users,setUsers]=useState([])
    // const [loading,setLoading]=useState(true)
    
    // useEffect(()=>{
    //     fetchData()
    //  },[])
     
     
// const fetchData =async ()=>{
//     const response = await fetch(`${process.env.REACT_APP_GITHUB_API}/users`,{
//         headers:{
//             Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`
//         },
    
//     })
//     const data=await response.json();
//     setUsers(data)
//     setLoading(false)
// }


// if(!loading){
    
//        return  (
//            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 l:grid-cols-3 md:grid-cols-2'>
//             {users.map((user)=>(
//                <h1>{user.login}</h1>
//             ))}
//            </div>
//          )

// }
// else{
//     return <h3 className='text-3xl'>Loading...</h3>
// }

return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 l:grid-cols-3 md:grid-cols-2'>
        {loading?<img width={150} className='mx-auto' src={spinner} />:(users.map((user)=>(
            <UserItem  key={user.id} user={user}/>
         )))}
    </div>

)



}

export default UserResult
