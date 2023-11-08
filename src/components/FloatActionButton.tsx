import { FloatButton, Tooltip } from "antd";
import IconFont from "./iconfont";


const FloatActionButton = () =>
    <FloatButton.Group
        trigger="hover"
        style={{ right: 40, bottom: 100 }}
        icon={<IconFont name="fuzhi" color={"white"} size={20} />}
    >
        <Tooltip title="Create new Note" placement="left">
            <FloatButton icon={<IconFont color={"white"} name="bianji" size={20} />} />
        </Tooltip>
        <Tooltip title="Create new Category" placement="left">
            <FloatButton icon={<IconFont color={"white"} name="fenlei" size={20} />} />
        </Tooltip>
    </FloatButton.Group>


export default FloatActionButton