import { Avatar, Button, Card, Drawer, Row, Tooltip, message } from "antd";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import avatarImages from "../../utils";
import { AccountSubTitle, AvatarHover } from "../Components";
import { setAvatar, setLoad } from "../../reducers";


const AvatarDrawer = ({ visible, setVisible }: ModalType) => {
    const avatar = useAppSelector((state) => state.state.avatar)
    const [current, setCurrent] = useState(avatar)
    const dispatch = useAppDispatch()
    const update = () => {
        dispatch(setLoad(true))
        dispatch(setAvatar(current))
        setVisible(false)
        setTimeout(() => {
            dispatch(setLoad(false))
            message.success("Avatar updated")
        }, 1200);
    }

    return (
        <Drawer title="Change Avatar" size="large" placement="right" open={visible} onClose={() => setVisible(false)}>
            <Row justify="center">
                <Avatar size={200} src={current} />
            </Row>
            <AccountSubTitle style={{ textAlign: "center", marginTop: 10 }}>Avatar Preview</AccountSubTitle>
            <Card style={{ borderRadius: 20, marginTop: 20, boxShadow: "0 2px 2px #022cf7" }}>
                <Row justify="space-around" gutter={[16, 16]}>
                    <Tooltip title="Default Avatar">
                        <AvatarHover
                            style={
                                current === "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                                    ? {} :
                                    { boxShadow: "0 2px 2px #000000" }}
                            size={60} src={"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"}
                            onClick={() => setCurrent("https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png")} />
                    </Tooltip>

                    {Object.keys(avatarImages).map((key, i) =>
                        <Tooltip key={key} title={"Avatar " + (i + 1)}>
                            <AvatarHover
                                style={current === avatarImages[key]
                                    ? {} :
                                    { boxShadow: "0 2px 2px #000000" }
                                }
                                size={60}
                                src={avatarImages[key]}
                                onClick={() => setCurrent(avatarImages[key])} />
                        </Tooltip>
                    )}
                    <Tooltip title="No Avatar">
                        <AvatarHover
                            style={
                                current === "" ? {} : { boxShadow: "0 2px 2px #000000" }}
                            size={60} src={""} onClick={() => setCurrent("")} />
                    </Tooltip>
                </Row>

            </Card>
            <Row justify="end" style={{ marginTop: 60 }}>
                <Button type="text" onClick={() => setVisible(false)}>Cancel</Button>
                <Button
                    style={{ marginLeft: 20 }}
                    type="primary"
                    onClick={update}>
                    Change
                </Button>
            </Row>
        </Drawer>
    )
}
export default AvatarDrawer;