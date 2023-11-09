import { Badge, Col, Space, Tag } from "antd";
import styled from "styled-components";
import { date2Local, priorityColor } from "../utils";

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

const statusData = (status: boolean) => status ? { color: "green", title: "DONE" } : { color: "red", title: "TODO" }

export const PriorityBadge = (data: Task) =>
    <Space size={0}>
        <Col>
            <Tag color={priorityColor(data.priority)}>{data.priority}</Tag>
            <Tag color="blue">{date2Local(data.date)}</Tag>
            <Tag color={statusData(data.status).color}>{statusData(data.status).title}</Tag>
        </Col>
    </Space>
