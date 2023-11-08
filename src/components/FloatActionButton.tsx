import { FloatButton, Tooltip } from "antd";
import IconFont from "./iconfont";
import { checkDarkColor } from "../utils";

type FloatActionButtonType = {
    isDark: boolean,
    setCategoryVisible: (visible: boolean) => void
    setNoteVisible: (visible: boolean) => void
}


const FloatActionButton = ({ isDark, setCategoryVisible, setNoteVisible }: FloatActionButtonType) =>
    <FloatButton.Group
        trigger="hover"
        style={{ right: 40, bottom: 100 }}
        icon={<IconFont name="fuzhi" color={checkDarkColor(isDark)} />}
    >
        <Tooltip title="Create new Note" placement="left">
            <FloatButton
                icon={
                    <IconFont
                        color={checkDarkColor(isDark)}
                        name="bianji"
                        onClick={() => setNoteVisible(true)}
                    />
                }
            />
        </Tooltip>
        <Tooltip title="Create new Category" placement="left">
            <FloatButton
                icon={
                    <IconFont
                        color={checkDarkColor(isDark)}
                        name="fenlei"
                        onClick={() => setCategoryVisible(true)}
                    />
                }
            />
        </Tooltip>
    </FloatButton.Group>


export default FloatActionButton