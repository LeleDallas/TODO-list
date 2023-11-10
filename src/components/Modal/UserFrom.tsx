
import ProForm, { ModalForm, ProFormText } from "@ant-design/pro-form"
import { message } from "antd";

interface UserFromType extends ModalType {
    username: string,
    setUsername: (username: string) => void
}

const UserFrom = ({ visible, setVisible, username, setUsername }: UserFromType) =>
    <ModalForm
        open={visible}
        title="Create New Category"
        autoFocusFirstInput
        modalProps={{
            destroyOnClose: true,
            onCancel: () => setVisible(false),
        }}
        submitTimeout={2000}
        onFinish={async (values) => {
            if (values.username !== username && values.username.length > 0) {
                localStorage.setItem("username", values.username)
                setUsername(values.username)
                message.success('Username updated');
            }
            return true;
        }}
        style={{ marginTop: 22 }}
    >
        <ProForm.Group>
            <ProFormText
                required
                width="md"
                name="username"
                label="Update Username"
                placeholder={username}
            />
        </ProForm.Group>
    </ModalForm>

export default UserFrom