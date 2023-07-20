import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import loader from "../assets/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAvatarRoute } from "../utils/APIRoutes";


export default function SetAvatar() {
    const api="https://api.multiavatar.com/45678945";
    const navigate=useNavigate();
    const [avatars,SetAvatar]=useState([]);
    const [IsLoading,setIsLoading]=useState(true);
    const [selectedavatar,setselectedavatar]=useState(undefined);
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
      const setProfilePicture=async()=>{};
      useEffect(()=>{
        const data=[];
        for(let i=0;i<4;i++){
            const image= await axios.get(`${api}/$(Math.round(Math.random()*1000))`);
        }
      }, []); 

    return <>
        <container>
            <div className="title-container">
                <h1>pick your avatar as profile picture</h1>
            </div>
            <div className="avatars">

            </div>

        </container>
        <ToastContainer/>
    </>
 
}
const container=styled.div``;