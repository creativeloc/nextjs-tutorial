"use client"

import { createTaskCustom } from "../utils/actions"
import { useFormStatus } from "react-dom"

const SubmitBtn = () => {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      Create Task
    </button>
  )
}

const TaskForm = () => {
  return (
    <form action={createTaskCustom}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
      </div>
    </form>
  )
}
export default TaskForm
