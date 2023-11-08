
import ProForm, { ModalForm, ProFormText } from "@ant-design/pro-form"
import { message } from "antd";
import { ModalType } from "./ModalType";

const NewCategory = ({ visible, setVisible }: ModalType) => {
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
                console.log(values.name);
                message.success('New Note Added');
                return true;
            }}
            style={{ marginTop: 22 }}
        >
            <ProForm.Group>
                <ProFormText
                    required
                    width="md"
                    name="name"
                    label="Category Title"
                    tooltip="A title for your new Category"
                    placeholder="Reading/Sports/Working..."
                />
            </ProForm.Group>
        </ModalForm>
    )
}

export default NewCategory