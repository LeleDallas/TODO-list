import IconFont from '../iconfont';

export default {
    logo: "https://cdn-icons-png.flaticon.com/512/11639/11639333.png",
    title: "TODO List",
    route: {
        path: '/',
        routes: [
            {
                path: '/home',
                name: 'Home',
                icon: <IconFont color={"white"} name="xiaoxi" />,
            },
            {
                path: '/task',
                name: 'My task',
                icon: <IconFont color={"white"} name="riqi" />,
            },
            {
                path: '/categories',
                name: 'Categories',
                icon: <IconFont color={"white"} name="fenlei" />,
                routes: [

                    {
                        path: '/categories/a-1',
                        name: 'A',
                        icon: <IconFont color={"white"} name="bianxie" />,
                    },
                ],
            },
            {
                path: '/calendar',
                name: 'Calendar',
                icon: <IconFont color={"white"} name="riqi" />,
            },
            {
                path: '/settings',
                name: 'Settings',
                icon: <IconFont color={"white"} name="shezhi" />,
            },
        ],
    },
    location: {
        pathname: '/',
    },
};