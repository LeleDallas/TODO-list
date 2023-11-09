type Priority = "Low" | "Medium" | "High"

type Task = {
    date: string
    title: string
    priority: Priority
    status: boolean
    description?: string
}


type Category = {
    title: string
    color: string,
    todo: Array<Task>
}


type CategoryList = {
    [key: string]: Category
}