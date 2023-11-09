import { Key } from "react";

export const checkDarkColor = (isDark: boolean): string => isDark ? "white" : "black"

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