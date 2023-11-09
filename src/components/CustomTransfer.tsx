import { useState } from 'react'
import { Transfer } from 'antd'

const CustomTransfer = (categoryList: CategoryList) => {
    const finalArray = [];

    for (const categoryKey in categoryList) {
        const category = categoryList[categoryKey]
        const categoryTitle = category.title
        for (const task of category.todo) {
            finalArray.push({
                ...task,
                key: task.title + categoryTitle,
                category: categoryTitle,
            })
        }
    }
    const [targetKeys, setTargetKeys] = useState(finalArray.filter(el => el.status === true).map(el => el.key))
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])

    const onChange = (nextTargetKeys: string[]) => {
        setTargetKeys(nextTargetKeys)
    }

    const onSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys])
    }

    return (
        <Transfer
            showSearch
            style={{ justifyContent: "center" }}
            listStyle={{ minHeight: 400, height: "100%", width: "100%" }}
            dataSource={finalArray}
            titles={['To do', 'Done']}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={onChange}
            onSelectChange={onSelectChange}
            render={(item) => item.title}
        />
    )
}

export default CustomTransfer