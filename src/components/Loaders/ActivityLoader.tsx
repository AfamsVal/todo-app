import { Spinner } from "react-bootstrap";

const ActivityLoader = () => <div
    className="d-flex justify-content-center align-items-center"
    style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "65vh", background: "var(--overlay-light)", zIndex: 100 }}
>
    {/* <img src="/loading.gif" width="50px" height="50px" alt="" /> */}
    <div className="bg-white p-2">
        <Spinner animation="border" size="sm" variant="primary" /> Loading...
    </div>
</div>

export default ActivityLoader;