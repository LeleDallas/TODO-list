
import ProForm, { ModalForm, ProFormText } from "@ant-design/pro-form"
import { ColorPicker, message } from "antd";
import { useState } from "react";
import { Color } from "antd/es/color-picker";
import { storeData } from "../../utils";
import { reloadState, setLoad } from "../../reducers";
import { useAppDispatch } from "../../hooks";

const NewCategory = ({ visible, setVisible }: ModalType) => {
    const [color, setColor] = useState<Color | string>("#1677FF");
    const dispatch = useAppDispatch()
    return (
        <ModalForm
            requiredMark
            open={visible}
            title="Create New Category"
            autoFocusFirstInput
            modalProps={{
                destroyOnClose: true,
                onCancel: () => setVisible(false),
            }}
            submitTimeout={2000}
            onFinish={async (values) => {
                const title = values.title
                const categoryList = localStorage.getItem("categoryColors")
                const existingCategories: CategoryColors = categoryList ? new Map(Object.entries(JSON.parse(categoryList))) : new Map() as CategoryColors
                if (existingCategories.has(title)) {
                    message.error(`Category ${title} already exist`);
                    return
                }
                dispatch(setLoad(true))
                existingCategories.set(title, color.toString())
                storeData("categoryColors", existingCategories)
                dispatch(reloadState())
                setVisible(false)
                setTimeout(() => {
                    dispatch(setLoad(false))
                    message.success(`Category ${title} added`);
                }, 1200);
            }}
            style={{ marginTop: 22 }}
        >
            <ProForm.Group align="center" >
                <ProFormText
                    rules={[{ required: true, message: 'Please enter a Category Title!' }]}
                    required
                    width="md"
                    name="title"
                    label="Category Title"
                    tooltip="A title for your new Category"
                    placeholder="Reading/Sports/Working..."
                />
                <ColorPicker onChangeComplete={(color) => setColor(color.toHexString())} />
            </ProForm.Group>
        </ModalForm>
    )
}

export default NewCategory