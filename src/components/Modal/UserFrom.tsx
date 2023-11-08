
import ProForm, { ModalForm, ProFormText } from "@ant-design/pro-form"
import { message } from "antd";
import { ModalType } from "./ModalType";

interface UserFromType extends ModalType {
    username: string,
    setUsername: (username: string) => void
}

const UserFrom = ({ visible, setVisible, username, setUsername }: UserFromType) => {

    return (
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
                console.log(values.username);
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
    )
}

export default UserFrom