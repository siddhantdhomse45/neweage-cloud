import React from 'react'
import styles from './Admin.module.css'

const Admin = () => {
  return (
    <div className={styles.pageContainer}>
    <div className={styles.adminmain}>
      <h2>Admin Login</h2>
      <div className={styles.admineplaceholder}>
      <input type="text" placeholder="Admin ID" />
      <input type="text" placeholder='Password'/>
      <button>Login</button>
      </div>
    </div>
    </div>
  )
}

export default Admin
