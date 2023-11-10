import { Badge, Card, Col, Progress, Row, Statistic, Tabs, TabsProps } from "antd"
import CustomPageContainer from "../components/Layout/CustomPageContainer"
import { HomeTitle, renderAllRow, renderRow } from "../components/Components"
import { useEffect, useState } from "react"
import { useAppSelector } from "../hooks"
import { countAll, countDone, loadLocalStorageData } from "../utils"

type HomeProps = {
    username: string
}

const Home = ({ username, }: HomeProps) => {
    const [existingTodo, setExistingTodo] = useState<TodoList>(new Map())
    const [items, setItems] = useState<TabsProps['items']>([])
    const update = useAppSelector(state => state.update.state)

    useEffect(() => {
        const todoList = loadLocalStorageData("todoList", new Map())
        setExistingTodo(todoList)
        const categoryList: CategoryColors = loadLocalStorageData("categoryColors", new Map())

        const itemsTab: TabsProps['items'] = [
            {
                key: "1",
                label: "All",
                children: renderAllRow(),
            }
        ]

        categoryList.forEach((color, key) =>
            itemsTab?.push({
                key,
                label: <Row justify="space-between" align="middle">
                    <p style={{ margin: 0 }}>{key}</p>
                    <Badge style={{ marginLeft: 2 }} color={color} />
                </Row>,
                children: renderRow(key),
            })
        )

        setItems(itemsTab)
    }, [update])

    return (
        <CustomPageContainer title={`Welcome back, ${username} 👋`}>
            <>
                <Col span={24} style={{ marginBottom: 32 }}>
                    <Card
                        bordered={true}
                        bodyStyle={{ padding: 12 }}
                        style={{ boxShadow: "0 2px 5px rgba(0,0,0,0.2)" }}
                    >
                        <Row justify="space-around">
                            <Statistic
                                title={<HomeTitle>To do 📄</HomeTitle>}
                                value={countAll(existingTodo) - countDone(existingTodo)}
                                valueStyle={{ color: '#faad14' }}
                            />
                            <Statistic
                                title={<HomeTitle>Done ✅</HomeTitle>}
                                value={countDone(existingTodo)}
                                valueStyle={{ color: '#52c41a' }}
                            />
                            <Statistic
                                title={<HomeTitle>Total 📓</HomeTitle>}
                                value={countAll(existingTodo)}
                                valueStyle={{ color: 'blue' }}
                            />
                        </Row>
                    </Card>
                </Col>
                <Progress 
                percent={Math.floor((countDone(existingTodo) / countAll(existingTodo)) * 100)}  />
                <Tabs destroyInactiveTabPane centered defaultActiveKey="1" items={items} />
            </>
        </CustomPageContainer >
    )
}
export default Home