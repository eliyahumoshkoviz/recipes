// "use server"
// import { isAdmin } from "@/server/DB/function/userAuth"


const profileFunction = ()=>{console.log('logout.......')}
  const accountFunction = ()=>{console.log('accountFunction.......')}
  const settingsFunction = ()=>{console.log('settingsFunction.......')}
  const helpFunction = ()=>{console.log('Help.......')}
  const logout = async()=>{
    const res = await fetch('api/user',{method:'DELETE'}) 
    if(res.ok){
      
      console.log(res)
    }
  }

export  const settings = [
    { title: 'Profile', action: profileFunction },
    { title: 'Account', action: accountFunction },
    { title: 'Settings', action: settingsFunction },
    { title: 'Help', action: helpFunction },
    { title: 'Logout', action: logout }
  ];