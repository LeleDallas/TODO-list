import { checkDarkColor, renderCategories } from '../../utils';
import IconFont from '../iconfont';

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
                path: '/categories',
                name: 'Categories',
                icon: <IconFont color={checkDarkColor(isDark)} name="fenlei" />,
                routes: renderCategories(),
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

