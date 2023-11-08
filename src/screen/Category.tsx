import CustomPageContainer from "../components/Layout/CustomPageContainer"
import { ProList } from '@ant-design/pro-components';
import type { Key } from 'react';
import { useState } from 'react';

type CategoryProps = {
    categoryType: string
}

const Category = ({ categoryType }: CategoryProps) => {
    const category = localStorage.getItem("categories")
    const categoryList: Category = category && JSON.parse(category)[categoryType]
    const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
    const rowSelection = {
        selectedRowKeys,
        onChange: (keys: Key[]) => setSelectedRowKeys(keys),
    };
    return (
        <CustomPageContainer title="Categories">
            <ProList
                metas={{
                    title: {},
                }}
                rowKey="title"
                headerTitle={`${categoryType} TODO List`}
                rowSelection={rowSelection}
                dataSource={categoryList.todo}
            />
        </CustomPageContainer>)
}

export default Category