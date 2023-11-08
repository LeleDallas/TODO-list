
import ProForm, { ModalForm, ProFormText } from "@ant-design/pro-form"
import { ColorPicker, message } from "antd";
import { ModalType } from "./ModalType";
import { useState } from "react";
import { Color } from "antd/es/color-picker";

const NewCategory = ({ visible, setVisible }: ModalType) => {
    const [color, setColor] = useState<Color | string>();
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
                const categoryList = localStorage.getItem("categories")
                const existingCategories = categoryList ? JSON.parse(categoryList) : {}
                existingCategories[title] = {
                    title,
                    color,
                    todo: []
                }
                localStorage.setItem("categories", JSON.stringify(existingCategories));
                message.success('New Category Added');
                return true;
            }}
            style={{ marginTop: 22 }}
        >
            <ProForm.Group>
                <ProFormText
                    required
                    width="md"
                    name="title"
                    label="Category Title"
                    tooltip="A title for your new Category"
                    placeholder="Reading/Sports/Working..."
                />
                <ColorPicker onChangeComplete={(color) => { setColor(color.toHexString()) }} />
            </ProForm.Group>
        </ModalForm>
    )
}

export default NewCategory