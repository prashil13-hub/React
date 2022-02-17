import React from 'react'
import {useParams} from 'react-router-dom'

function Profile() {
    const {id} = useParams()
  return (
    <div>Profile</div>
  )
}

export default Profile