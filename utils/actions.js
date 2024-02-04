"use server"
import { revalidatePath } from "next/cache"
import prisma from "../utils/db"

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })
}

export const createTask = async (formData) => {
  const content = formData.get("content")
  await prisma.task.create({
    data: {
      content: content
    }
  })
  revalidatePath("/tasks")
}
