import { Avatar, Badge, Empty, Row, Tag } from "antd";
import styled from "styled-components";
import { date2Local, loadLocalStorageMapData, priorityColor } from "../utils";
import RowCard from "./RowCard";
import IconFont from "./iconfont";

export const AccountSubTitle = styled.h2`
font-size:20px;
font-weight:500;
margin: 0px;
`
export const GreyParagraph = styled.h2`
font-size:14px;
font-weight:400;
line-height: 21px;
`

export const HomeTitle = styled.h2`
font-size:18px;
font-weight:500;
margin:0px
`

export const AvatarHover = styled(Avatar)`
&:hover { cursor: pointer;}
`

export const renderBadge = (count: number, backgroundColor: string) =>
    <Badge
        showZero
        count={count}
        style={{
            marginBlockStart: -2,
            marginInlineStart: 4,
            backgroundColor,
        }}
    />

export const PriorityBadge = (data: Task) =>
    <Row justify="center">
        <Tag color={priorityColor(data.priority)}>
            <Row align="middle">
                <IconFont name="dingdan" size={16} color={priorityColor(data.priority)} />
                {data.priority}
            </Row>
        </Tag>
        <Tag color="green">
            <Row align="middle">
                <IconFont name="riqi" size={16} color="green" />
                {date2Local(data.date)}
            </Row>
        </Tag>
    </Row>


export const renderRow = (category: string, color: string): React.ReactNode => {
    const existingTodoList: TodoList = loadLocalStorageMapData("todoList", new Map())
    const tasks: Task[] = existingTodoList.get(category) ?? []
    return tasks.map((task) => <RowCard key={task.title} category={category} task={task} color={color} />)
};

export const renderAllRow = (): React.ReactNode => {
    const existingTodoList: TodoList = loadLocalStorageMapData("todoList", new Map())
    const existingCategories: CategoryColors = loadLocalStorageMapData("categoryColors", new Map())
    return existingTodoList.size === 0 ? (
        <Empty description="No task to do yet" />
    ) : (
        Array.from(existingTodoList.keys()).flatMap((category) => {
            const tasks: Task[] = existingTodoList.get(category) ?? []
            return tasks.map((task) =>
                <RowCard
                    key={task.title}
                    category={category}
                    task={task}
                    color={existingCategories.get(category) ?? "#00ff00"}
                />)
        })
    )
}
