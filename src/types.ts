type Task = {
    date: Date
    title: string
    description?: string
    state: boolean
}


type Category = {
    title: string
    color: string,
    todo: Array<Task>
}


type CategoryList = {
    [key: string]: Category
}