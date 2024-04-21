import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
    return(
        <div>
            <h1>
                Error
            </h1>
            <h2>{err?.status}: {err?.statusText}</h2>
            <h2>
                OOPS something went wrong..
            </h2>
        </div>
    )
}

export default Error;