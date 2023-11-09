import { Card, Col, Row, Statistic } from "antd"
import CustomPageContainer from "../components/Layout/CustomPageContainer"
import { countTodo } from "../utils"
import { HomeTitle } from "../components/Components"
import CustomTransfer from "../components/CustomTransfer"

type HomeProps = {
    username: string
}
const Home = ({ username }: HomeProps) => {
    const categories = localStorage.getItem("categories")
    const parseCategory: CategoryList = categories ? JSON.parse(categories) : {}
    const todoMap: Map<string, Task> = new Map()

    for (const categoryKey in parseCategory) {
        const category = parseCategory[categoryKey]
        if (category && category.todo) {
            for (const task of category.todo) {
                const taskKey = `${task.title}-${task.date}`
                if (!todoMap.has(taskKey)) {
                    todoMap.set(taskKey, task)
                }
            }
        }
    }

    return (
        <CustomPageContainer title={`Welcome back, ${username} 👋`}>
            <>
                <Col span={24} style={{ marginBottom: 32 }}>
                    <Card
                        bordered={true}
                        bodyStyle={{ padding: 12 }}
                        style={{ borderRadius: 20, boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.1)" }}
                    >
                        <Row justify="space-around">
                            <Statistic
                                title={<HomeTitle>To do</HomeTitle>}
                                value={countTodo(Array.from(todoMap.values())).todo}
                                valueStyle={{ color: '#faad14' }}
                            />
                            <Statistic
                                title={<HomeTitle>Done</HomeTitle>}
                                value={countTodo(Array.from(todoMap.values())).done}
                                valueStyle={{ color: '#52c41a' }}
                            />
                            <Statistic
                                title={<HomeTitle>Total</HomeTitle>}
                                value={countTodo(Array.from(todoMap.values())).total}
                                valueStyle={{ color: 'blue' }}
                            />
                        </Row>
                    </Card>
                </Col>
                <CustomTransfer {...parseCategory} />
            </>
        </CustomPageContainer >
    )
}
export default Home