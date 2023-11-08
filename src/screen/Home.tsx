import CustomPageContainer from "../components/Layout/CustomPageContainer"

const Home = ({ username }: any) => {
    return (
        <CustomPageContainer title={`Welcome back, ${username} 👋`}>
            <></>
        </CustomPageContainer>
    )
}
export default Home