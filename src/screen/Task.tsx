import { AccountSubTitle } from "../components/Components"
import CustomPageContainer from "../components/Layout/CustomPageContainer"

const Task = () => {
    return (
        <CustomPageContainer title="Task List" >
            <>
                <AccountSubTitle>Today</AccountSubTitle>
                <AccountSubTitle>Tomorrow</AccountSubTitle>
                <AccountSubTitle>Upcoming</AccountSubTitle>
            </>
        </CustomPageContainer>
    )
}
export default Task