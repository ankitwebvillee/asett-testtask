import { createContext, useContext, useState, useEffect } from 'react';
import { FormData, Step } from '../def/complaint';
import { getFormDataByStep } from '../utils';
import { validateStep } from '../utils/validation';
import * as Steps from '../components/complaint/steps';

interface IComplaintContext {
    currentStep: number;
    setCurrentStep: (step: number) => void;
    formData: Partial<FormData>;
    handleFormDataUpdate: (stepData: Partial<FormData>) => void;
    handleNext: () => void;
    steps: Step[];
    showToast: boolean;
    toastMessage: string;
    setShowToast: (show: boolean) => void;
}

const ComplaintContext = createContext<IComplaintContext | undefined>(undefined);

export const ComplaintProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [complaintData, setComplaintData] = useState({});
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [formData, setFormData] = useState<Partial<FormData>>(
        getFormDataByStep(currentStep, complaintData)
    );

    useEffect(() => {
        setFormData(getFormDataByStep(currentStep, complaintData));
    }, [currentStep, complaintData]);

    const handleFormDataUpdate = (stepData: Partial<FormData>) => {
        setFormData(prevData => ({
            ...prevData,
            ...stepData
        }));
    };

    const handleNext = () => {
        const validationResult = validateStep(currentStep, formData);
        
        if (validationResult.isValid) {
            setComplaintData(prevData => ({
                ...prevData,
                ...formData
            }));
            setCurrentStep(currentStep + 1);
        } else {
            setToastMessage(validationResult.message);
            setShowToast(true);
        }
    };

    const steps: Step[] = [
        {
            id: 1,
            title: 'Complaint Type',
            component: Steps.ComplaintType,
            isCompleted: false,
        },
        {
            id: 2,
            title: 'Complainant Details',
            component: Steps.ComplainantDetails,
            isCompleted: false,
        },
        {
            id: 3,
            title: 'FAE Details',
            component: Steps.FaeDetails,
            isCompleted: false,
        },
        {
            id: 4,
            title: 'Complaint Details',
            component: Steps.ComplaintDetails,
            isCompleted: false,
        },
        {
            id: 5,
            title: 'Review Complaint',
            component: Steps.ReviewComplaint,
            isCompleted: false,
        },
        {
            id: 6,
            title: 'Submitted',
            component: Steps.CompaintSubmitted,
            isCompleted: false,
        },
    ];

    return (
        <ComplaintContext.Provider
            value={{
                currentStep,
                setCurrentStep,
                formData,
                handleFormDataUpdate,
                handleNext,
                steps,
                showToast,
                toastMessage,
                setShowToast
            }}
        >
            {children}
        </ComplaintContext.Provider>
    );
};

export const useComplaintDetails = () => {
    const context = useContext(ComplaintContext);
    if (!context) {
        throw new Error('useComplaint must be used within an ComplaintProvider');
    }
    return context;
};
  