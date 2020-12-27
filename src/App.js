import React, { useEffect, useState, useCallback } from 'react';
import getElements from './fetchApi';
import UserData from './components/UserData'
import './index.css';
import { CurrentUser } from './components/CurrentUser';
import { Pagination } from './components/Pagination';
import { SearchBar } from './components/SearchBar';
import Load from './components/Load';


const App = () => {

  const [users, setUsers] = useState([])
  const [active, setActive] = useState(0);
  const [term, setTerm] = useState('');
  // const [flag, setFlag] = useState(false)
  const [loading, setLoading] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(50);
  const params = {id: true, phone: true, lastName: true, firstName: true, email: true}
  const [sort] = useState(params)
  const [arrow, setArrow] = useState(null);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

  const sortUsers = (type) => {
    const isSorted = sort[type]
    let direction = isSorted ? 1 : -1
    const sorted = [].slice.call(users).sort((a, b) => {
      if(a[type] === b[type]) {
        return 0;
      }

      if(a[type] < b[type]) {
        setArrow(<span>&#8593;</span>)
        
        
      }
      else {
        setArrow(<span>&#8595;</span>)
        
      }
      return a[type] > b[type] ? direction : direction * -1;
      
    })
   
    sort[type] = !isSorted
    setUsers(sorted)

  }


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const handleClick = id => {
    setActive(id)
  }

  const handleChange = event => {
    const value = event.target.value.toLowerCase();
    setTerm(value)
   
  }

  const clickInput = () => {
    const result = currentUsers.filter(user => {
      return user.firstName.toLowerCase().includes(term);
    })
      setActive(null)
      setUsers(result)
      setTerm('')
      console.log('clickInput')
  }

  // const addUser = () => {
  //   setFlag(!flag)
  //   console.log('flag')
  // }
  // const getInfo = () => {
  //   getElements()
  //   .then(data => setUsers(data))
  //   setLoading(true)
  // }

  const getInfo = useCallback(() => {
    getElements()
    .then(data => setUsers(data))
    setLoading(true)
  }, [])
  useEffect(() => {
    getInfo()
  }, [getInfo])

  // const showInput = !flag ? (
  //   <input 
  //    type='text'
     
  //    onChange={handleChange}
  //     />
  // ) : null

  const usersList = loading ? currentUsers.map((us, index) => {
    return (
        <UserData click={() => handleClick(index)} key={index} user={us} />
    )
  }) : null

  const header = users.length ? (
    
    <table className="customers">
      <thead>
        <tr>
          <th onClick={() => sortUsers('id')}>id {arrow}</th>
          <th onClick={() => sortUsers('firstName')}>First Name {arrow}</th>
          <th onClick={() => sortUsers('lastName')}>Last Name {arrow}</th>
          <th onClick={() => sortUsers('email')}>E-mail {arrow}</th>
          <th onClick={() => sortUsers('phone')}>Phone {arrow}</th>
        </tr>
      </thead>
        {usersList}
    </table>
  ) : (
    <>
      <Load />
    </>
  )
    console.log('render')
  return (
    <div>
      <SearchBar term={term} handleChange={handleChange} getInfo={getInfo} clickInput={clickInput} />
  
    { header }
    <Pagination totalUsers={users.length} usersPerPage={usersPerPage} paginate={paginate} />
    <CurrentUser active={active} users={users}/>
    </div>
    
  )
}

export default App;