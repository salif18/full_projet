import Menu from "../pages/Menu";
import { useContext, useEffect, useState } from "react";
import Panier from "../pages/Panier";
import Admin from "../pages/Admin";
import {  Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Axios from "axios";
import Login from "./Login";
import Signup from "./Signup";
import axios from "axios";
import AuthContext from "../store/authContext";




function App() {
  const [menus , setMenus] = useState([])
useEffect(()=>{
  const menuFetch = async () => {
    try{
         const res = await Axios.get('http://localhost:3005/product')
         if(res){
          const data = await res.data
          setMenus(data)
         }
    }catch(e){
      console.log(e)
    } 
  }
   menuFetch()
  },[])

  //Etat de panier
  const [panier , setPanier] = useState([])
  
  useEffect(()=>{
    const getElementPanier = async () => {
      try{
          const res = await axios.get('http://localhost:3005/panier')
            if(res){
                  const data = await res.data
                  setPanier(data)
                }          
      }catch(e){
          console.log(e)
      }
    }
    getElementPanier();
     
  },[])
  
  
  //fonction ajouter plats
  const adjOut = (plat)=>{
    setPanier([...panier , {...plat , qty :1}])
    const postPanier = async () =>{
      try{
        const res = await Axios.post('http://localhost:3005/panier',{...plat , qty:1})
          if(res){
            const data = await res.data
          }
      }catch(e){
        console.log(e)
      }
    }
    postPanier()
  }

  //fonction supprimer
  const deL = (id) => {
    const deleteFetch = async ()=>{
      try{
        const res = await  Axios.delete('http://localhost:3005/panier/:id')
        if(res){
          const data = await res.data
          
        }
      }catch(e){
        console.log(e)
      }
    }
     deleteFetch()
  }

  //etat de formulaire file
  const [file , setFile] = useState({image:'',nom:'',description:'',category:'',prix:''})

  const handleChange = (e)=>{
    const {name,value}= e.target 
    setFile({...file , [name]:value})
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault()
     setMenus([...menus , {...file}])
     Axios.post('http://localhost:3005/product',
    file)
    .then((res)=>(res.data))
    .catch((error)=>(error)) 
    setFile({image:'',nom:'',description:'',category:'',prix:''})
  }

  const [filtermenus, setFiltermenus]=useState([])
  const all = ()=>{
    setFiltermenus(menus);
  }
  const drink=()=>{
    setFiltermenus(menus.filter((a)=> a.category.includes('Drink')))
  }
  const plat =()=>{
    setFiltermenus(menus.filter((a)=> a.category.includes('Plats')))
  }
  const berguer =()=>{
    setFiltermenus(menus.filter((b)=> b.category.includes('Berguer')))
  }
  const sandwich =()=>{
    setFiltermenus(menus.filter((c)=>c.category.includes('Sandwich')))
  }
  const pizza =()=>{
    setFiltermenus(menus.filter((d)=>d.category.includes('Pizza')))
  }

  //etat de signup
  const [dataSignup,setDataSignup]=useState({prenom:'',nom:'',address:'',numero:'',email:'',password:''})
   const handleChange2 = (e)=>{
  const {name,value}=e.target;
  setDataSignup({...dataSignup,[name]:value})
   }
  const handleSubmit2 = (e)=>{
    e.preventDefault();
    const signupFecth = async () => {
      try{
          const res = await Axios.post('http://localhost:3005/auth/signup',dataSignup)
          if(res){
            const data = await res.data
            authCtx.login(data.token , data.userId)
            navigate('/')
          }    
      }catch(e){
        console.log(e)
      }
    
    }
     signupFecth()
    setDataSignup({prenom:'',nom:'',address:'',numero:'',email:'',password:''})
  }

  //etat login
  const [dataLogin,setDataLogin] = useState({email:'',password:''})
  const handleChange3 = (e)=>{
    const {name,value}= e.target;
    setDataLogin({...dataLogin,[name]:value})
  }
//donnee user
const [userData, setUserData] = useState([])
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit3 =(e)=>{
    e.preventDefault();
    const loginFecth = async () =>{
      try{
           const res = await  Axios.post('http://localhost:3005/auth/login',dataLogin)
              if(res){
                const data = await res.data
                setUserData(data)
                 authCtx.login(data.token , data.userId )
                 navigate('/')
              }      
      }catch(e){
         console.log(e)
      }
    }
     loginFecth()
    setDataLogin({email:'',password:''})
  }
  return (
    <>
    {/* <Slideshow/> */}
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path='/login'element={<Login handleSubmit={handleSubmit3} handleChange={handleChange3} dataLogin={dataLogin}/>}/>
     <Route path='/signup'element={<Signup handleSubmit={handleSubmit2} handleChange={handleChange2} dataSignup={dataSignup}/>}/>
     <Route path='/menu' element={<Menu menus={menus}  adjOut={adjOut} all={all} filtermenus={filtermenus} 
      drink={drink} plat={plat} berguer={berguer} sandwich={sandwich} pizza={pizza}/>}/>
     <Route path='/panier'element={<Panier panier={panier} deL={deL}  />}/>
     <Route path="/admin" element={<Admin  handleChange={handleChange} handleSubmit={handleSubmit} file={file}  />}/>
   </Routes>         
    </>
  );
}

export default App;
