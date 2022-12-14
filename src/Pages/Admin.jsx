import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'


export default function Admin() {
  // const [deleteId, setDeleteId] = useState("")
  // const [updateId, setUpdateId] = useState("")
  // const [updateName, setUpdateName] = useState("")

  // const GetData = () => {
  //   axios.get(`https://mirsat-vercel-database.vercel.app/yooxData`)
  //     .then((res) => console.log(res.data))
  // }
  // GetData()

  // const deleteFunc = () => {
  //   return fetch(`https://mirsat-vercel-database.vercel.app/yooxData/${deleteId}`, {
  //     method: "DELETE"
  //   })
  // }

  // const updateFunc = async (updateId, updateName) => {
  //   return await fetch(`https://mirsat-vercel-database.vercel.app/yooxData/${updateId}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ title: updateName })
  //   })
  //     .then((res) => res.json())
  // }


  return (
    <div>
      {/* <h1>ADMIN</h1>
      <div>
        <h1>Delete</h1>
        <input type="text" onChange={(e) => setDeleteId(e.target.value)} />
        <button onClick={deleteFunc}>delete prod</button>
      </div>
      <div>
        <h1>Update</h1>
        <input type="text" onChange={(e) => setUpdateId(e.target.value)} />
        <input type="text" placeholder='name' onChange={(e) => setUpdateName(e.target.value)} />
        <button onClick={updateFunc}>update prod</button>
      </div> */}

    </div>
  )
}
