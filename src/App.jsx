import React, { createContext, useReducer, useState } from 'react'
import A from './components/A'
export const CntContext = createContext(0)

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
function reducer(state, action) {

  if (action.type == "delete") {
    return state.filter((el) => el.id !== action.id)
  }
  if (action.type=="addUser"){
    return [...state,action.newUser]
  }
  if (action.type=="editData"){
    return state.map((el)=> el.id==action.editData.id ? action.editData : el)
  }
}
const data1 = [
  {
    id: 1,
    name: "Vahob",
    email: "vahobjon@gmail.com",
    age: "23"
  },
  {
    id: 2,
    name: "Firdavs",
    email: "firdavs@gmail.com",
    age: "23"
  }
]

export const App = () => {
  const [data, dispatch] = useReducer(reducer, data1)
  function handleSubmit(e) {
    e.preventDefault()
    let newUser={
      id:Date.now(),
      name:e.target.name.value,
      email:e.target.email.value,
      age:e.target.age.value,
    }
    dispatch({type:"addUser", newUser})
  }
  return (
    <CntContext.Provider value={{ data, dispatch }}>
      <div>

        <Dialog className="">
          <DialogTrigger className="ml-20 p-3 bg-blue-600 rounded-3xl mt-2 text-white">AddUser</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                <form action="" className='flex flex-col gap-4' onSubmit={handleSubmit}>
                  <Input name="name" placeholder="Name.." />
                  <Input name="email" placeholder="Email.." />
                  <Input  name="age" placeholder="Age..."/>
                 <DialogClose> <button>Submit</button></DialogClose>
                </form>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <A />

        <div>

        </div>
      </div>
    </CntContext.Provider>
  )
}



