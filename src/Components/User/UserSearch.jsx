import {useState,useContext} from 'react'
import GithubContext from '../../context/Github/GithubContext'
import AlertContext from '../../context/Alert/AlertContext'
function UserSearch() {

    const {users,searchData,clearUsers} = useContext(GithubContext)

    const {setAlert}=useContext(AlertContext)
    const [text,setText] = useState('')
    const handleChange=(e)=>{
        setText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text === ''){
            setAlert('Please Enter Something','error');
        }
        else {
            searchData(text);
            setText('')
        }
    }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8'> 
      <div>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="relative">
                    <input type="text" className="input bg-gray-200 w-full pr-40 input-lg text-black"  placeholder='Search'
                    value={text} onChange={handleChange}/>
                    <button className='absolute top-0 right-0 btn btn-lg w-36 rounded rounded-l-none ' type='submit'>Go</button>
                </div>
            </div>
        </form>        
      </div>
      {users.length > 0 && (
      <div>
         <button onClick={clearUsers} className="btn btn-lg btn-ghost">Clear</button>
      </div>)}
      
    </div>
  )
}

export default UserSearch
