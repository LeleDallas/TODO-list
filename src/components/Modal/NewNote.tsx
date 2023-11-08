
import ProForm, { ModalForm, ProFormDatePicker, ProFormSelect, ProFormText } from "@ant-design/pro-form"
import { message } from "antd";
import { ModalType } from "./ModalType";

const NewNote = ({ visible, setVisible }: ModalType) => {
    return (
        <ModalForm
            requiredMark
            open={visible}
            title="Create New TODO Note"
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
                    label="Note Title"
                    tooltip="A title for your new task"
                    placeholder="Do something with..."
                />
                <ProFormSelect
                    required
                    placeholder="Select..."
                    // request={async () => [
                    //     {
                    //         value: '1',
                    //         label: '1',
                    //     },
                    // ]}
                    width="md"
                    name="useMode"
                    label="Category"
                />
                <ProFormSelect
                    required
                    placeholder="Select..."
                    width="md"
                    name="useMode"
                    label="Priority"
                />
                <ProFormDatePicker required name="contractTime" label="Date Milestone" />
            </ProForm.Group>
        </ModalForm>
    )
}

export default NewNote