import { Dispatch, SetStateAction } from "react"
import { Modal } from "react-bootstrap"

interface AppModalProps {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
    overlayClick?: boolean;
    heading?: string;
    closeButton?: boolean;
    children: any;
}

const AppModal = ({ showModal, setShowModal, overlayClick = false, heading, closeButton = true, children }: AppModalProps) => {
    return (
        <Modal
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
            show={showModal}
            onHide={() => overlayClick ? setShowModal(false) : null}
        >
            <Modal.Header closeButton={closeButton} onHide={() => setShowModal(false)}>
                {heading && <h1 className='bold-title mb-2'>{heading}</h1>}
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default AppModal
