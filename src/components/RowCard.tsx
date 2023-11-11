import { Badge, Card, Checkbox, Col, Popconfirm, Row, Tag } from "antd"
import { PriorityBadge } from "./Components"
import IconFont from "./iconfont"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { reloadState } from "../reducers"
import { loadLocalStorageMapData, storeData } from "../utils"

type RowCard = {
    task: Task,
    category: string
    color: string
}

const RowCard = ({ task, category, color }: RowCard) => {
    const [checked, setChecked] = useState(task.completed)
    const dispatch = useDispatch()
    const onChange = () => {
        const existingTodoList: TodoList = loadLocalStorageMapData("todoList", new Map())
        const updatedTodoList = new Map(existingTodoList)
        const tasks = updatedTodoList.get(category) ?? []
        const updatedTasks = tasks.map((t) =>
            t.title === task.title ? { ...t, completed: !t.completed } : t
        )
        updatedTodoList.set(category, updatedTasks)
        storeData("todoList", updatedTodoList)
        setChecked(!checked)
        dispatch(reloadState())
    }

    const deleteTodo = (title: string, category: string): void => {
        const existingTodoList: TodoList = loadLocalStorageMapData("todoList", new Map())
        if (existingTodoList.has(category)) {
            const tasks = existingTodoList.get(category) ?? []
            const updatedTasks = tasks.filter((task) => task.title !== title)
            existingTodoList.set(category, updatedTasks)
            storeData("todoList", existingTodoList)
            dispatch(reloadState())
        }
    }

    return (
        <Badge.Ribbon text={checked ? "Done" : "To do"} color={checked ? "green" : "gold"} placement="start">
            <Card
                key={task.title}
                extra={<Tag color={color}>{category}</Tag>}
                title={<p style={{ textDecoration: checked ? "line-through" : "none" }}>{task.title}</p>}
                style={{ marginTop: 10, padding: 6, boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}
            >
                <Row gutter={[8, 8]} align={"middle"}>
                    <Col span={2}>
                        <Checkbox checked={checked} onChange={onChange} />
                    </Col>
                    <Col span={20}>
                        <Col span={24} style={{ padding: 0 }} >
                            <PriorityBadge {...task} />
                        </Col>
                    </Col>
                    {checked &&
                        <Col span={2} >
                            <Popconfirm title="Are you sure to delete this category?"
                                onConfirm={() => deleteTodo(task.title, category)}
                            >
                                <IconFont
                                    name="shanchu" color="red" />
                            </Popconfirm>
                        </Col>
                    }
                </Row>
            </Card>
        </Badge.Ribbon>
    )
}

export default RowCard