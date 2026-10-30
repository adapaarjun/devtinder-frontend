import { useState } from "react"
import { ProfileEditCard } from "./ProfileEditCard"
import ProfileFeed from "./ProfileFeed"


const ProfileView = ({loggedInUser}) => {
  const [formData,setFormData] = useState(()=>({...loggedInUser})) 

  return (
    <div className="flex gap-12.5 my-6.25">
      <ProfileEditCard formData={formData} setFormData={setFormData}/>
      <ProfileFeed item={formData}/>
    </div>
  )
}

export default ProfileView
