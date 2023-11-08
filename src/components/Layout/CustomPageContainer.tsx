import ProCard from "@ant-design/pro-card"
import { PageContainer } from "@ant-design/pro-layout"

type CustomPageContainerProps = {
    children?: JSX.Element
    title: string
}

const CustomPageContainer = ({ children, title = "" }: CustomPageContainerProps) => {
    return (
        <PageContainer
            childrenContentStyle={{ paddingInline: 10 }}
            title={title}
        >
            <ProCard
                style={{
                    minHeight: '70vh',
                    borderRadius: "20px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
                }}
            >
                {children}
            </ProCard>
        </PageContainer>
    )
}

export default CustomPageContainer