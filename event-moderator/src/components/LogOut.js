import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContex } from '../App';
const LogOut = () => {
    
  const {state,dispatch}= useContext(UserContex)
    const navigate=useNavigate();
    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            headers:{
                Accept: "application/json",
                'Content-Type': 'application/json ',
            },
            credentials: "include",
        }).then((res)=>{
            dispatch({type:"USER",payload:false})
            navigate('/',{replace:true})
            if(res.status!=200){
                const error=new Error(res.error)
                throw error;
            }
        
        if(res.status!=200){
            const error= new Error(res.error);
            throw error;
        }
        }).catch((err)=>{
            console.log(err)
        })
    })
 
}

export default LogOut;