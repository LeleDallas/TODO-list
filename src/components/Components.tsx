import { Badge, Card, Checkbox, Col, Popconfirm, Row, Space, Tag } from "antd";
import styled from "styled-components";
import { date2Local, deleteTodo, priorityColor } from "../utils";
import IconFont from "./iconfont";

export const CardTitle = styled.h2`
font-size:16px;
color: #2d3436;
font-weight:500
`

export const AccountTitle = styled.h2`
font-size:30px;
color: #2d3436;
font-weight:500
`
export const AccountSubTitle = styled.h2`
font-size:20px;
color: #2d3436;
font-weight:500;
margin: 0px;
`
export const GreyParagraph = styled.h2`
font-size:14px;
color: #636e72;
font-weight:400;
line-height: 21px;
`

export const HomeTitle = styled.h2`
font-size:18px;
font-weight:500;
margin:0px
`

export const PlanTitle = styled.h2`
font-size:23px;
font-weight:500;
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

export const PriorityBadge = (data: TaskWithCategory) =>
    <Space size={0}>
        <Col>
            <Tag color={data.category.color}>{data.category.title}</Tag>
            <Tag color={priorityColor(data.priority)}>{data.priority}</Tag>
            <Tag color="green">{date2Local(data.date)}</Tag>
        </Col>
    </Space>

export const ToDoRow = (todo: TaskWithCategory) =>
    <Card
        bordered={false}
        bodyStyle={{ marginTop: 10, padding: 8, }}
        style={{ boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}
        hoverable
    >
        <Row gutter={[8, 8]} align={"middle"}>
            <Col span={2}>
                <Checkbox checked={todo.status} />
            </Col>
            <Col span={20}>
                <Col span={24} style={{ padding: 0 }} >
                    <p style={{ textDecoration: "line-through" }}>{todo.title}</p>
                </Col>
            </Col>
            <Col span={2} >
                <Popconfirm title="Are you sure to delete this category?"
                    onConfirm={() => deleteTodo(todo.title, todo.category.title)}
                >
                    <IconFont name="shanchu" color="red" />
                </Popconfirm>
            </Col>
        </Row>
        <Row justify={"space-around"} >
            <PriorityBadge {...todo} />
        </Row>
    </Card>