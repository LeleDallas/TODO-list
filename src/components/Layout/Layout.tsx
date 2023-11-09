import { GithubFilled } from '@ant-design/icons';
import { DefaultFooter, ProLayout } from '@ant-design/pro-components';
import { ProConfigProvider } from '@ant-design/pro-provider';
import { useState } from 'react';
import FloatActionButton from '../FloatActionButton';
import Settings from '../../screen/Settings';
import Home from '../../screen/Home';
import NewNote from '../Modal/NewNote';
import NewCategory from '../Modal/NewCategory';
import { layoutProps } from '../../utils';


const Layout = ({ username, setUsername }: any) => {
    const storedTheme = localStorage.getItem('theme')
    const [pathname, setPathname] = useState<string>('/home')
    const [theme, setTheme] = useState(storedTheme !== null ? JSON.parse(storedTheme) : true)
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [noteVisible, setNoteVisible] = useState(false)

    const updateTheme = (isDark: boolean): void => {
        setTheme(isDark)
        localStorage.setItem('theme', JSON.stringify(isDark))
    }

    return (
        <ProConfigProvider dark={theme}>
            <ProLayout
                style={{ width: "100%" }}
                footerRender={() => <DefaultFooter copyright="2023 by LeleDallas All Rights Reserved" />}
                {...layoutProps(theme)}
                location={{ pathname }}
                layout='top'
                avatarProps={{
                    src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                    size: 'default',
                    title: username,
                }}
                actionsRender={() => [
                    <GithubFilled key="GithubFilled"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://github.com/LeleDallas/TODO-list';
                        }} />]
                }
                menuItemRender={(item, dom) => (
                    <a onClick={() => setPathname(item.path || '/home')}>{dom}</a>
                )}
            >
                {pathname === "/" && <Home username={username} />}
                {pathname === "/home" && <Home username={username} />}
                {pathname === "/settings" &&
                    <Settings
                        username={username}
                        theme={theme}
                        setTheme={updateTheme}
                        setUsername={setUsername}
                        setPathname={setPathname}
                    />
                }
                <FloatActionButton
                    isDark={theme}
                    setCategoryVisible={setCategoryVisible}
                    setNoteVisible={setNoteVisible}
                />
                <NewNote
                    visible={noteVisible}
                    setVisible={setNoteVisible}
                />
                <NewCategory
                    visible={categoryVisible}
                    setVisible={setCategoryVisible}
                />
            </ProLayout>
        </ProConfigProvider>
    );
};

export default Layout