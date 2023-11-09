import { PlusCircleOutlined } from "@ant-design/icons";
import CustomPageContainer from "../components/Layout/CustomPageContainer"
import { ProList } from '@ant-design/pro-components';
import { Button, Popconfirm } from "antd";
import type { Key } from 'react';
import { useEffect, useState } from 'react';
import { PriorityBadge, renderBadge } from "../components/Components";
import { deleteCategory, deleteTodo, updateCategory } from "../utils";
import IconFont from "../components/iconfont";

type CategoryProps = {
    categoryType: string
    setCategoryVisible: (open: boolean) => void
    setNoteVisible: (open: boolean) => void
    setPathname: (path: string) => void
}

const Category = ({ categoryType, setCategoryVisible, setNoteVisible, setPathname }: CategoryProps) => {
    const category = localStorage.getItem("categories")
    const categoryList: Category = category && JSON.parse(category)[categoryType]
    const [update, setUpdate] = useState(false)
    const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
    const rowSelection = {
        selectedRowKeys,
        onChange: (keys: Key[]) => setSelectedRowKeys(keys),
    };

    useEffect(() => { setSelectedRowKeys([]) }, [update])

    return (
        <CustomPageContainer title="Categories">
            {categoryType === "/categories" ?
                <Button onClick={() => setCategoryVisible(true)} icon={<PlusCircleOutlined />} size="large" >
                    Add new Category
                </Button>
                :
                <>
                    <ProList
                        toolbar={{
                            menu: {
                                items: [
                                    {
                                        key: '1',
                                        label: (
                                            <span>{categoryType} {renderBadge(categoryList.todo.length, categoryList.color)}</span>
                                        ),
                                    },
                                ],
                            },
                            actions: [
                                <Button type="primary" onClick={() => setNoteVisible(true)}>
                                    Add new TODO
                                </Button>,
                                <Popconfirm title="Are you sure to delete this category?" onConfirm={() => deleteCategory(categoryType, () => setPathname("/categories"))}>
                                    <Button type="primary" danger>
                                        Delete Category
                                    </Button>
                                </Popconfirm>
                            ],
                        }}
                        metas={{
                            title: {},
                            content: {
                                render: (_, data) => <PriorityBadge {...data} />
                            },
                            actions: {
                                render: (_, data) => data.status &&
                                    <Popconfirm title="Delete TODO from list" onConfirm={() => deleteTodo(data.title, categoryType, () => setUpdate(!update))}>
                                        <Button type="text" icon={<IconFont name="shanchu" color="red" />} />
                                    </Popconfirm>
                            }
                        }}
                        rowKey="title"
                        headerTitle={`${categoryType} TODO List`}
                        rowSelection={rowSelection}
                        dataSource={categoryList?.todo}
                    />
                    {selectedRowKeys.length > 0 &&
                        <Button type="primary" size="large" onClick={() =>
                            updateCategory(
                                selectedRowKeys,
                                categoryType,
                                () => setUpdate(!update))
                        }>
                            Change Status
                        </Button>
                    }
                </>
            }
        </CustomPageContainer>)
}

export default Category