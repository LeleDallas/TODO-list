import CustomPageContainer from "../components/Layout/CustomPageContainer"
import { Button, Col, Divider, Popconfirm, Row, Switch } from "antd"
import { AccountSubTitle, AccountTitle, GreyParagraph } from "../components/Components"
import { QuestionCircleOutlined } from "@ant-design/icons"


type SettingsProps = {
    theme: boolean
    setTheme: (theme: boolean) => void
}

const Settings = ({ theme, setTheme }: SettingsProps) => {
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
                    <Col style={{ marginRight: "20px" }}>
                        <Switch data-testid="switch" defaultChecked={theme} onChange={(val) => setTheme(val)} />
                    </Col>
                </Row>
                <Divider />
                <Row justify="space-between" align="middle">
                    <Col>
                        <AccountSubTitle>Notifications</AccountSubTitle>
                        <GreyParagraph>Edit push notifications.</GreyParagraph>
                    </Col>
                    <Col style={{ marginRight: "20px" }}>
                        <Switch data-testid="switch" />
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
                            style={{ borderRadius: 6, height: 40 }}>
                            Change
                        </Button>
                    </Col>
                </Row>
                <Divider />
                <Row justify="space-between" align="middle">
                    <Col span={15}>
                        <AccountSubTitle>Delete all TODO</AccountSubTitle>
                        <GreyParagraph>Remove your tasks from the network.</GreyParagraph>
                    </Col>
                    <Col >
                        <Popconfirm icon={<QuestionCircleOutlined style={{ color: 'red' }} />} title="Are you sure? This action is not reversible" okText="Yes" cancelText="No" onConfirm={() => console.log("")}>
                            <Button danger style={{ borderRadius: 6, marginRight: "20px", height: 40 }}>Delete</Button>
                        </Popconfirm>
                    </Col>
                </Row></>
        </CustomPageContainer>
    )
}

export default Settings