import { TimelineItemProps } from "antd";
import { Key } from "react";

export const checkDarkColor = (isDark: boolean): string => isDark ? "white" : "black"

export const priorityColor = (priority: Priority): string =>
    priority === "Low" ? "green" : priority === "Medium" ? "orange" : "red"

export const date2Local = (date: string) => new Date(date)
    .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

export const getCurrentDate = (separator = '') => {
    const newDate = new Date()
    const date = newDate.getDate();
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

export const renderCategories = () => {
    const tmpCategories = localStorage.getItem("categories")
    const categories: CategoryList = tmpCategories ? JSON.parse(tmpCategories) : []
    return Object.entries(categories).map(([_, category]) =>
    ({
        path: `/categories/${category.title}`,
        name: category.title,
    }))
}

export const deleteCategory = (category: string, callback: any): void => {
    const categories = localStorage.getItem("categories")
    const parseCategory: CategoryList = categories ? JSON.parse(categories) : {}
    delete parseCategory[category]
    localStorage.setItem("categories", JSON.stringify(parseCategory))
    callback()
}

export const updateCategory = (keyList: Array<Key>, category: string, callback: any): void => {
    const categories = localStorage.getItem("categories")
    const parseCategory: CategoryList = categories ? JSON.parse(categories) : {}
    for (const todo of parseCategory[category].todo) {
        if (keyList.includes(todo.title)) {
            todo.status = !todo.status;
        }
    }
    localStorage.setItem("categories", JSON.stringify(parseCategory))
    callback()
}

export const resetAll = (callback: any): void => {
    localStorage.setItem('categories', JSON.stringify({}))
    callback()
}

export const deleteTodo = (key: string, category: string, callback: any): void => {
    const categories = localStorage.getItem("categories")
    const parseCategory: CategoryList = categories ? JSON.parse(categories) : {}
    parseCategory[category].todo = parseCategory[category].todo.filter(item => item.title !== key)
    localStorage.setItem("categories", JSON.stringify(parseCategory))
    callback()
}

export const sortTasksByDate = (categoryList: CategoryList): Array<TimelineItemProps> => {
    if (!categoryList) {
        throw new Error("Category list is missing or invalid.");
    }

    const allTasks: Array<Task> = [];
    for (const categoryKey in categoryList) {
        const category = categoryList[categoryKey];
        allTasks.push(...category.todo);
    }

    allTasks.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return allTasks.map(task => ({
        children: "Type-".toUpperCase() + task.title,
        label: date2Local(task.date),
        color: priorityColor(task.priority),
    }));
}


export const countTodo = (todo: Array<Task>) => {
    let count = 0;
    for (const task of todo)
        if (task.status)
            count++
    return { done: count, todo: todo.length - count, total: todo.length };
}