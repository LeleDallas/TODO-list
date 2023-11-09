type Task = {
    date: Date
    title: string
    description?: string
    priority: string
    status: boolean
}


type Category = {
    title: string
    color: string,
    todo: Array<Task>
}


type CategoryList = {
    [key: string]: Category
}