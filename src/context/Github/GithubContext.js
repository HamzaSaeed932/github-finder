import { createContext,useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_API = process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({children})=>{
 
    const initialstate = {
        users:[],
        user:{},
        loading:false
    }
  const [state,dispatch]=useReducer(githubReducer,initialstate)

  //get search Result
    const searchData =async (text)=>{
        setLoading()
        const params = new URLSearchParams({
            q:text
        })
        const response = await fetch(`${GITHUB_API}/search/users?${params}`,{
            headers:{
                Authorization:`token ${GITHUB_TOKEN}`
            },
        
        })
        const {items}=await response.json();
        dispatch({
            type:'GET_USERS',
            payload:items,
            
        })
    }

  //get single user
    const getUser =async (login)=>{
        setLoading()
        
        const response = await fetch(`${GITHUB_API}/users/${login}`,{
            headers:{
                Authorization:`token ${GITHUB_TOKEN}`
            },
        
        })
        if(response.status === 404){
            window.location('/NotFound')
        }
        else{
            const data=await response.json();
            dispatch({
                type:'GET_USER',
                payload:data,
                
            })

        }
    }

    //
    const setLoading =()=>{
        dispatch({
            type:'SET_LOADING'
        })
    }
    const clearUsers = ()=>{
        dispatch({
            type : 'CLEAR_USERS',
        })
    }

    return <GithubContext.Provider value={{users:state.users,loading:state.loading,user:state.user,searchData,clearUsers,getUser}}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext