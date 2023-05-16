import React from 'react'
import SearchForm from '../Components/users-form'
import UsersList from '../Components/users-list'


const Home:React.FC = () => {
  return (
    <>
        <SearchForm />
        <UsersList />
    </>
  )
}

export default Home