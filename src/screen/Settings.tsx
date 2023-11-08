import CustomPageContainer from "../components/Layout/CustomPageContainer"
import { Button, Col, Divider, Popconfirm, Row, Switch } from "antd"
import { AccountSubTitle, GreyParagraph } from "../components/Components"
import { QuestionCircleOutlined } from "@ant-design/icons"
import { useState } from "react"
import UserFrom from "../components/Modal/UserFrom"


type SettingsProps = {
    theme: boolean
    setTheme: (theme: boolean) => void
    username: string,
    setUsername: (username: string) => void
}

const Settings = ({ theme, setTheme, username, setUsername }: SettingsProps) => {
    const [visible, setVisible] = useState(false)

    return (
        <CustomPageContainer title="Settings">
            <>
                <GreyParagraph>Customize your experience with these settings.</GreyParagraph>
                <Divider />
                <Row justify="space-between" align="middle">
                    <Col>
                        <AccountSubTitle>Theme</AccountSubTitle>
                        <GreyParagraph>Edit program theme.</GreyParagraph>
                    </Col>
                    <Col style={{ marginRight: "10px" }}>
                        <Switch defaultChecked={theme} onChange={(val) => setTheme(val)} />
                    </Col>
                </Row>
                <Divider />
                <Row justify="space-between" align="middle">
                    <Col>
                        <AccountSubTitle>Notifications</AccountSubTitle>
                        <GreyParagraph>Edit push notifications.</GreyParagraph>
                    </Col>
                    <Col style={{ marginRight: "10px" }}>
                        <Switch />
                    </Col>
                </Row>
                <Divider />
                <Row justify="space-between" align="middle">
                    <Col>
                        <AccountSubTitle>Change Username</AccountSubTitle>
                        <GreyParagraph>Set your username.</GreyParagraph>
                    </Col>
                    <Col>
                        <Button
                            type="primary"
                            onClick={() => setVisible(true)}
                            style={{ borderRadius: 6, height: 40 }}>
                            Change
                        </Button>
                    </Col>
                </Row>
                <Divider />
                <Row justify="space-between" align="middle">
                    <Col span={14}>
                        <AccountSubTitle>Delete all TODO</AccountSubTitle>
                        <GreyParagraph>Remove your tasks from the network.</GreyParagraph>
                    </Col>
                    <Col >
                        <Popconfirm
                            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                            title="Are you sure? This action is not reversible"
                            okText="Yes"
                            cancelText="No"
                            onConfirm={() => console.log("")}
                        >
                            <Button danger style={{ borderRadius: 6, height: 40 }}>Delete</Button>
                        </Popconfirm>
                    </Col>
                </Row>
                <UserFrom visible={visible} setVisible={setVisible} username={username} setUsername={setUsername} />
            </>
        </CustomPageContainer>
    )
}

export default Settings