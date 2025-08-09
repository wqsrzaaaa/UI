import React from 'react'
import UserIdentity from './UserIdentity'
import UserToolCollection from './UserToolCollection'
import Departments from './Departments'

const UserHome = () => {
  return (
    <>
      <UserIdentity />
      <UserToolCollection />
      <Departments />
    </>
  )
}

export default UserHome