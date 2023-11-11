import { Card, Col, Progress, Row, Statistic, Tabs, TabsProps, Tag } from "antd"
import CustomPageContainer from "../components/Layout/CustomPageContainer"
import { HomeTitle, renderAllRow, renderRow } from "../components/Components"
import { useEffect, useState } from "react"
import { useAppSelector } from "../hooks"
import { checkDarkColor, countAll, countDone, loadLocalStorageMapData } from "../utils"
import IconFont from "../components/iconfont"
import EditCategory from "../components/Modal/EditCategory"

type HomeProps = {
    username: string
}

const Home = ({ username, }: HomeProps) => {
    const [existingTodo, setExistingTodo] = useState<TodoList>(new Map())
    const [items, setItems] = useState<TabsProps['items']>([])
    const update = useAppSelector(state => state.state.state)
    const isDark = useAppSelector(state => state.state.dark)
    const [openDrawer, setOpenDrawer] = useState(false)
    const [drawerData, setDrawerData] = useState<DrawerData>({
        category: "",
        color: ""
    })

    const passDrawerData = (category: string, color: string) => {
        setOpenDrawer(true)
        setDrawerData({ category, color })
    }

    useEffect(() => {
        const todoList = loadLocalStorageMapData("todoList", new Map())
        setExistingTodo(todoList)
        const categoryList: CategoryColors = loadLocalStorageMapData("categoryColors", new Map())

        const itemsTab: TabsProps['items'] = [
            {
                key: "1",
                label: "All",
                children: renderAllRow(),
                closeIcon: null
            }
        ]

        categoryList.forEach((color, key) =>
            itemsTab?.push({
                key,
                label: <Tag color={color}>{key}</Tag>,
                children: renderRow(key, color),
                closeIcon: <IconFont color={checkDarkColor(isDark)} style={{ margin: 0 }} name="bianji" onClick={() => passDrawerData(key, color)} />
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
                            />
                        </Row>
                    </Card>
                </Col>
                {countAll(existingTodo) > 0 &&
                    <Progress
                        percent={Math.floor((countDone(existingTodo) / countAll(existingTodo)) * 100)}
                    />
                }
                <Tabs hideAdd type="editable-card" destroyInactiveTabPane defaultActiveKey="1" items={items} />
                <EditCategory visible={openDrawer} setVisible={setOpenDrawer} drawerData={drawerData} />
            </>
        </CustomPageContainer >
    )
}
export default Home