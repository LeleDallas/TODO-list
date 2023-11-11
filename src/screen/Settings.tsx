import CustomPageContainer from "../components/Layout/CustomPageContainer"
import { Avatar, Button, Col, Divider, Popconfirm, Row, Switch } from "antd"
import { AccountSubTitle, GreyParagraph } from "../components/Components"
import { QuestionCircleOutlined } from "@ant-design/icons"
import { useEffect, useState } from "react"
import UserFrom from "../components/Modal/UserFrom"
import { storeData } from "../utils"
import AvatarDrawer from "../components/Modal/AvatarDrawer"
import { useAppSelector } from "../hooks"

type SettingsProps = {
    theme: boolean
    setTheme: (theme: boolean) => void
    username: string,
    setUsername: (username: string) => void
    setPathname: (path: string) => void
}

const Settings = ({ theme, setTheme, username, setUsername, setPathname }: SettingsProps) => {
    const [userFormVisible, setUserFormVisible] = useState(false)
    const [avatarFormVisible, setAvatarFormVisible] = useState(false)
    const avatar = useAppSelector(state => state.state.avatar)

    useEffect(() => { }, [avatar])

    return (
        <CustomPageContainer title="Settings">
            <>
                <Col style={{ textAlign: "center" }}>
                    <Avatar
                        onClick={() => setAvatarFormVisible(true)}
                        src={avatar}
                        size={120}
                    />
                    <h2 style={{ marginTop: 22, marginBottom: 2 }}>{username}</h2>
                </Col>
                <GreyParagraph>Customize your experience with these settings.</GreyParagraph>
                <Divider />
                <Row justify="space-between" align="middle">
                    <Col span={12}>
                        <AccountSubTitle>Dark Theme</AccountSubTitle>
                        <GreyParagraph>Activate dark mode.</GreyParagraph>
                    </Col>
                    <Col style={{ marginRight: "10px" }}>
                        <Row align="middle" >
                            <Switch
                                defaultChecked={theme}
                                onChange={(val) => setTheme(val)} />
                        </Row>
                    </Col>
                </Row>
                <Divider />
                <Row justify="space-between" align="middle">
                    <Col span={12}>
                        <AccountSubTitle>Change Username</AccountSubTitle>
                        <GreyParagraph>Set your username.</GreyParagraph>
                    </Col>
                    <Col>
                        <Button
                            type="primary"
                            onClick={() => setUserFormVisible(true)}
                            style={{ borderRadius: 6, height: 40 }}>
                            Change
                        </Button>
                    </Col>
                </Row>
                <Divider />
                <Row justify="space-between" align="middle">
                    <Col span={12}>
                        <AccountSubTitle>Delete all TODO</AccountSubTitle>
                        <GreyParagraph>Remove TODO from the network.</GreyParagraph>
                    </Col>
                    <Col >
                        <Popconfirm
                            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                            title="Are you sure? This action is not reversible"
                            okText="Yes"
                            cancelText="No"
                            onConfirm={() => {
                                storeData('todoList', new Map())
                                storeData('categoryColors', new Map())
                                setPathname("/home")
                            }}
                        >
                            <Button danger style={{ borderRadius: 6, height: 40 }}>Delete</Button>
                        </Popconfirm>
                    </Col>
                </Row>
                <UserFrom visible={userFormVisible} setVisible={setUserFormVisible} username={username} setUsername={setUsername} />
                <AvatarDrawer visible={avatarFormVisible} setVisible={setAvatarFormVisible} />
            </>
        </CustomPageContainer>
    )
}

export default Settings