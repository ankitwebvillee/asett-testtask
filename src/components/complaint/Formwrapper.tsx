import * as Steps from './steps';
import { useComplaintDetails } from '../../context/compaint';
import ComplaintProgress from './ComplaintProgress';
import FooterSection from './Footer';
import { Toast, ToastContainer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormsWrapper = () => {
    const {
        currentStep,
        setCurrentStep,
        formData,
        handleFormDataUpdate,
        handleNext,
        steps,
        showToast,
        toastMessage,
        setShowToast
    } = useComplaintDetails();

    const CurrentComponent = steps[currentStep - 1].component;

    return (
        <>
            <ComplaintProgress {...{ steps, currentStep, setCurrentStep }} />
            <CurrentComponent formData={formData} onUpdate={handleFormDataUpdate} />
            <FooterSection {...{steps, currentStep}} onNext={handleNext}/>
            <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
                <Toast 
                    show={showToast} 
                    onClose={() => setShowToast(false)} 
                    delay={3000} 
                    autohide
                    bg="danger"
                    className="text-white"
                >
                    <Toast.Header closeButton className="bg-danger text-white">
                        <strong className="me-auto">Validation Error</strong>
                    </Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
};

export default FormsWrapper;
