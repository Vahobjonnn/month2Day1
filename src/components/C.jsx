import React, { useContext, useState } from 'react'
import { CntContext } from '../App'
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
const C = () => {
  const { data, dispatch } = useContext(CntContext)
  const [editData, setEditData] = useState({})


  return (
    <div className="mx-auto w-[90%] grid grid-cols-4 gap-4 p-6">
      {data.map((el) => (
        <div
          key={el.id}
          className="flex flex-col gap-1 rounded-xl border  bg-white p-5"
        >
          <h2 className="text-lg font-medium">{el.name}</h2>
          <p className="truncate text-sm font-light">{el.email}</p>
          <p className="text-sm ">{el.age} age</p>

          <button
            onClick={() => dispatch({ type: 'delete', id: el.id })}
            className="mt-4  text-sm text-red-500"
          >
            Delete
          </button>
          <Dialog>
            <DialogTrigger onClick={() => setEditData(el)}>EDIT</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  <form action="" className='flex flex-col gap-4' onSubmit={(e) => {
                    e.preventDefault()
                    dispatch({ type: "editData", editData })
                  }} >
                    <Input value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} name="name" placeholder="Name.." />
                    <Input value={editData.email} onChange={(e) => setEditData({ ...editData, email: e.target.value })} name="email" placeholder="Email.." />
                    <Input value={editData.age} onChange={(e) => setEditData({ ...editData, age: e.target.value })} name="age" placeholder="Age..." />
                    <DialogClose> <button>Submit</button></DialogClose>
                  </form>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  )
}

export default C