import { Spin } from "antd"

type LoadingSpinnerProps = {
    message?: string,
}

const LoadingSpinner = ({ message = "Loading", }: LoadingSpinnerProps) =>
    <Spin
        fullscreen
        size={"large"}
        tip={message} >
    </Spin>
export default LoadingSpinner