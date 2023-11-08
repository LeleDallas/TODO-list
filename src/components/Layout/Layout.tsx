import { GithubFilled } from '@ant-design/icons';
import { DefaultFooter, ProLayout } from '@ant-design/pro-components';
import { ProConfigProvider } from '@ant-design/pro-provider';
import { useState } from 'react';
import layoutProps from './layoutProps';
import FloatActionButton from '../FloatActionButton';
import Settings from '../../screen/Settings';
import Home from '../../screen/Home';
import Category from '../../screen/Category';
import Task from '../../screen/Task';


export default () => {
    const [pathname, setPathname] = useState<string>('/home');
    const [theme, setTheme] = useState(true);

    return (
        <ProConfigProvider dark={theme}>
            <ProLayout
                style={{ width: "100%" }}
                footerRender={() => <DefaultFooter copyright="2023 by LeleDallas All Rights Reserved" />}
                {...layoutProps}
                location={{ pathname }}
                avatarProps={{
                    src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                    size: 'default',
                    title: 'UserName',
                }}
                actionsRender={() => [
                    <GithubFilled key="GithubFilled"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://github.com/LeleDallas/TODO-list';
                        }} />]
                }
                menuItemRender={(item, dom) => (
                    <a onClick={() => setPathname(item.path || '/home')}>
                        {dom}
                    </a>
                )}
            >
                {pathname === "/" && <Home />}
                {pathname === "/home" && <Home />}
                {pathname === "/task" && <Task />}
                {pathname === "/categories" && <Category />}
                {pathname === "/settings" && <Settings theme={theme} setTheme={setTheme} />}
                <FloatActionButton />
            </ProLayout>
        </ProConfigProvider>
    );
};