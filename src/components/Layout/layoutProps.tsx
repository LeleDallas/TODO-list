import { checkDarkColor } from '../../utils';
import IconFont from '../iconfont';

export const layoutProps = (isDark: boolean) => ({
    logo: "https://cdn-icons-png.flaticon.com/512/11639/11639333.png",
    title: "TODO List",
    route: {
        path: '/',
        routes: [
            {
                path: '/home',
                name: 'Home',
                icon: <IconFont color={checkDarkColor(isDark)} name="xiaoxi" />,
            },
            {
                path: '/task',
                name: 'My task',
                icon: <IconFont color={checkDarkColor(isDark)} name="riqi" />,
            },
            {
                path: '/categories',
                name: 'Categories',
                icon: <IconFont color={checkDarkColor(isDark)} name="fenlei" />,
                routes: [
                    {
                        path: '/categories/a-1',
                        name: 'A',
                        icon: <IconFont color={checkDarkColor(isDark)} name="bianxie" />,
                    },
                ],
            },
            {
                path: '/calendar',
                name: 'Calendar',
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

