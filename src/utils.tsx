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
