
import ProForm, { DrawerForm, ProFormText } from "@ant-design/pro-form"
import { Button, ColorPicker, Divider, Popconfirm, message } from "antd";
import { useState } from "react";
import { Color } from "antd/es/color-picker";
import { loadLocalStorageMapData, storeData } from "../../utils";
import { reloadState, setLoad } from "../../reducers";
import { useAppDispatch } from "../../hooks";

interface EditCategoryType extends ModalType {
    drawerData: DrawerData
}

const EditCategory = ({ visible, setVisible, drawerData }: EditCategoryType) => {
    const { category, color } = drawerData
    const [newColor, setColor] = useState<Color | string>(color);
    const dispatch = useAppDispatch()
    const deleteCategory = () => {
        dispatch(setLoad(true))
        const existingCategories: CategoryColors = loadLocalStorageMapData("categoryColors", new Map())
        existingCategories.delete(category)
        const existingTodoList: TodoList = loadLocalStorageMapData("todoList", new Map());
        existingTodoList.delete(category);
        storeData("todoList", existingTodoList)
        storeData("categoryColors", existingCategories)
        dispatch(reloadState())
        setVisible(false)
        setTimeout(() => {
            dispatch(setLoad(false))
            message.success(`Category ${category} deleted`);
        }, 1200);
    }

    return (
        <DrawerForm
            requiredMark
            open={visible}
            title={`Edit ${category}`}
            autoFocusFirstInput
            drawerProps={{
                destroyOnClose: true,
                onClose: () => setVisible(false),
            }}
            submitTimeout={2000}
            onFinish={async (values) => {
                const title = values.title
                if (title === category && color === newColor) {
                    message.error("You have to update values")
                    return
                }
                dispatch(setLoad(true))
                const existingCategories: CategoryColors = loadLocalStorageMapData("categoryColors", new Map())
                existingCategories.delete(category)
                existingCategories.set(title, newColor.toString())
                const existingTodoList: TodoList = loadLocalStorageMapData("todoList", new Map());
                const tasks: Task[] = existingTodoList.get(category) ?? [];
                const existingTasks: Task[] = title !== category ? existingTodoList.get(title) ?? [] : [];
                existingTodoList.delete(category);
                existingTodoList.set(title, [...tasks, ...existingTasks]);
                storeData("categoryColors", existingCategories)
                storeData("todoList", existingTodoList)

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
                    initialValue={category}
                    rules={[{ required: true, message: 'Please enter a Category Title!' }]}
                    required
                    width="md"
                    name="title"
                    label="Category Title"
                    tooltip="A title for your new Category"
                    placeholder="Reading/Sports/Working..."
                />
                <ColorPicker defaultValue={color} onChangeComplete={(color) => setColor(color.toHexString())} />
            </ProForm.Group>
            <Divider />
            <Popconfirm
                title={`Delete ${category}`}
                description="Are you sure to delete this category and it's tasks?"
                onConfirm={deleteCategory}>
                <Button danger size="large" type="primary">DELETE</Button>
            </Popconfirm>
        </DrawerForm>
    )
}

export default EditCategory