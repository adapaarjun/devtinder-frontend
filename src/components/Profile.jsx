import { useSelector } from "react-redux"
import ProfileView from "./ProfileView";


export function Profile() {
  const loggedInUser = useSelector((store)=>store.userStore.userState);
    
  if(!loggedInUser){
    return (
      <p>Profile Loading...</p>
    )
  }
    return (
    <div className="flex gap-6.25 my-6.25 ">
      <ProfileView loggedInUser={loggedInUser}/>
    </div>
  )

  }

export default Profile
