import { useHistory } from "react-router-dom"

const NotFound = () => {

    const history = useHistory()

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "calc(100vh - 300px)" }}>
            <div className="text-center">
                <img src="/404.gif" alt="" height={300} />
                <h2 className="bold-title mb-3">Page Not Found</h2>
                <p className="text-gray-one">Looks like you got carried away</p>
                <button
                    onClick={() => history.push("/")}
                    className="bg-primary-blue text-white icoin-form-btn px-3"
                    style={{ width: "max-content" }}
                >
                    Return Back Home
                </button>
            </div>
        </div>
    )
}

export default NotFound
