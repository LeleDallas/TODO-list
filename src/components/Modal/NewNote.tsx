
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
                const { category, title, priority, date } = values
                const tmpCategories = localStorage.getItem("categories")
                let categories: CategoryList = tmpCategories ? JSON.parse(tmpCategories) : {}
                let set = new Set(categories[category].todo)
                set.add({
                    title,
                    priority,
                    date,
                    status: false
                })
                categories[category].todo = Array.from(set)
                localStorage.setItem("categories", JSON.stringify(categories))
                message.success('New Note Added');
                setVisible(false)
                return true;
            }}
            style={{ marginTop: 22 }}
        >
            <ProForm.Group>
                <ProFormText
                    required
                    width="md"
                    name="title"
                    label="Note Title"
                    tooltip="A title for your new task"
                    placeholder="Do something with..."
                />
                <ProFormSelect
                    required
                    placeholder="Select..."
                    request={async () => {
                        const tmpCategories = localStorage.getItem("categories")
                        const categories: CategoryList = tmpCategories ? JSON.parse(tmpCategories) : {}
                        return Object.entries(categories).map(([_, category]) =>
                        ({
                            value: category.title,
                            label: category.title,
                        }))
                    }}
                    width="md"
                    name="category"
                    label="Category"
                />
                <ProFormSelect
                    required
                    placeholder="Select..."
                    width="md"
                    name="priority"
                    label="Priority"
                    options={["Low", "Medium", "High"]}
                />
                <ProFormDatePicker required name="date" label="Date Milestone" />
            </ProForm.Group>
        </ModalForm>
    )
}


export default NewNote