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

interface TaskWithCategory extends Task {
    category: Category
}

type CategoryList = {
    [key: string]: Category
}

type ModalType = {
    visible: boolean,
    setVisible: (visible: boolean) => void
}