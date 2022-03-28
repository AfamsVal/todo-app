import "./FormWrapper.css";

interface CreateFormWrapperProps {
    title: string;
    children: any
}

const CreateFormWrapper = ({ title, children }: CreateFormWrapperProps) => {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <div className="text-primary-blue fw-bold mb-2 display-3 p-2">{title}</div>
                <div className="bg-white form-card mx-auto d-flex justify-content-center align-items-center">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CreateFormWrapper;
