import { GithubFilled } from '@ant-design/icons';
import { ProLayout } from '@ant-design/pro-components';
import { ProConfigProvider } from '@ant-design/pro-provider';
import { useState } from 'react';
import FloatActionButton from '../FloatActionButton';
import Settings from '../../screen/Settings';
import Home from '../../screen/Home';
import NewNote from '../Modal/NewNote';
import NewCategory from '../Modal/NewCategory';
import { layoutProps } from '../../utils';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateTheme } from '../../reducers';

type LayoutProps = {
    username: string,
    setUsername: (username: string) => void
}

const Layout = ({ username, setUsername }: LayoutProps) => {
    const theme = useAppSelector(state => state.state.dark)
    const dispatch = useAppDispatch()
    const [pathname, setPathname] = useState<string>('/home')
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [noteVisible, setNoteVisible] = useState(false)
    const avatar = useAppSelector(state => state.state.avatar)

    return (
        <ProConfigProvider dark={theme}>
            <ProLayout
                style={{ width: "100%" }}
                {...layoutProps(theme)}
                location={{ pathname }}
                layout='top'
                avatarProps={{
                    src: avatar,
                    size: 'default',
                    title: username,
                    onClick: () => setPathname("/settings"),
                }}
                actionsRender={() => [
                    <GithubFilled key="GithubFilled"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href = 'https://github.com/LeleDallas/TODO-list';
                        }} />]
                }
                menuItemRender={(item, dom) => (
                    <a onKeyDown={() => setPathname(item.path || '/home')} onClick={() => setPathname(item.path || '/home')}>{dom}</a>
                )}
            >
                {pathname === "/" && <Home username={username} />}
                {pathname === "/home" && <Home username={username} />}
                {pathname === "/settings" &&
                    <Settings
                        username={username}
                        theme={theme}
                        setTheme={(isDark: boolean) => dispatch(updateTheme(isDark))}
                        setUsername={setUsername}
                        setPathname={setPathname}
                    />
                }
                <FloatActionButton isDark={theme} setCategoryVisible={setCategoryVisible} setNoteVisible={setNoteVisible} />
                <NewNote visible={noteVisible} setVisible={setNoteVisible} />
                <NewCategory visible={categoryVisible} setVisible={setCategoryVisible} />
            </ProLayout>
        </ProConfigProvider>
    );
};

export default Layout