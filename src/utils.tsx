import IconFont from "./components/iconfont";

export const layoutProps = (isDark: boolean) => ({
    logo: "https://cdn-icons-png.flaticon.com/512/11639/11639333.png",
    title: "TODO List",
    route: {
        path: '/',
        routes: [
            {
                path: '/home',
                name: 'My TODO List',
                icon: <IconFont color={checkDarkColor(isDark)} name="riqi" />,
            },
            {
                path: '/settings',
                name: 'Settings',
                icon: <IconFont color={checkDarkColor(isDark)} name="shezhi" />,
            },
        ],
    },
    location: {
        pathname: '/',
    },
});

export const storeData = (key: string, map: Map<any, any>): void => {
    const jsonString = JSON.stringify(Object.fromEntries(map));
    localStorage.setItem(key, jsonString)
}

export const checkDarkColor = (isDark: boolean): string => isDark ? "white" : "black"

export const priorityColor = (priority: Priority): string =>
    priority === "Low" ? "green" : priority === "Medium" ? "orange" : "red"

export const date2Local = (date: string): string => new Date(date)
    .toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

export const loadLocalStorageData = (key: string, defaultValue: any) => {
    const data = localStorage.getItem(key);
    return data ? new Map(Object.entries(JSON.parse(data))) : defaultValue;
};

export const countDone = (todoList: TodoList): number => {
    let completed = 0;
    for (const tasks of todoList.values())
        completed += tasks.filter((task) => task.completed).length;

    return completed
};

export const countAll = (todoList: TodoList): number => {
    let all = 0;
    for (const tasks of todoList.values())
        all += tasks.length;

    return all
};