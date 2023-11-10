type Priority = "Low" | "Medium" | "High"

type Task = {
    date: string
    title: string
    priority: Priority
    completed: boolean
    description?: string
};

type TodoList = Map<string, Task[]>;

type CategoryColors = Map<string, string>;

type ModalType = {
    visible: boolean,
    setVisible: (visible: boolean) => void
}
