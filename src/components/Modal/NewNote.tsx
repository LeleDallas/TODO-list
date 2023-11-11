
import ProForm, { ModalForm, ProFormDatePicker, ProFormSelect, ProFormText } from "@ant-design/pro-form"
import { loadLocalStorageMapData, storeData } from "../../utils";
import { useAppDispatch } from "../../hooks";
import { reloadState, setLoad } from "../../reducers";
import { message } from "antd";

const NewNote = ({ visible, setVisible }: ModalType) => {
    const dispatch = useAppDispatch()

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
                const { category, title, priority, date } = values;
                dispatch(setLoad(true))
                const newToDo: Task = {
                    title,
                    priority,
                    date,
                    completed: false,
                };
                const existingTodoList: TodoList = loadLocalStorageMapData("todoList", new Map());
                if (existingTodoList.has(category)) {
                    const tasks: Task[] = existingTodoList.get(category) ?? [];
                    const isDuplicateTitle = tasks.some((task) => task.title === title);
                    if (!isDuplicateTitle) {
                        tasks.push(newToDo);
                        existingTodoList.set(category, tasks);
                    }
                } else {
                    existingTodoList.set(category, [newToDo]);
                }
                storeData("todoList", existingTodoList);
                dispatch(reloadState());
                setVisible(false)
                setTimeout(() => {
                    dispatch(setLoad(false))
                    message.success(`New to do added to ${category}`);
                }, 1200);
                return true;
            }}
            style={{ marginTop: 22 }}
        >
            <ProForm.Group>
                <ProFormText
                    required
                    rules={[{ required: true, message: 'Please input a note Title!' }]}
                    width="md"
                    name="title"
                    label="Note Title"
                    tooltip="A title for your new task"
                    placeholder="Do something with..."
                />
                <ProFormSelect
                    required
                    rules={[{ required: true, message: 'Please choose a Category!' }]}
                    placeholder="Select..."
                    request={async () => {
                        const categoryList = localStorage.getItem("categoryColors")
                        const existingCategories: CategoryColors = categoryList ? new Map(Object.entries(JSON.parse(categoryList))) : new Map() as CategoryColors
                        return Array.from(existingCategories.keys()).map((categoryKey) => ({
                            value: categoryKey,
                            label: categoryKey,
                        }));
                    }}
                    width="md"
                    name="category"
                    label="Category"
                />
                <ProFormSelect
                    rules={[{ required: true, message: 'Please choose a Priority!' }]}
                    required
                    placeholder="Select..."
                    width="md"
                    name="priority"
                    label="Priority"
                    options={["Low", "Medium", "High"]}
                />
                <ProFormDatePicker required name="date" label="Date Milestone"
                    rules={[{ required: true, message: 'Please choose a Date!' }]}
                />
            </ProForm.Group>
        </ModalForm>
    )
}


export default NewNote