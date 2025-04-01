import * as Steps from './steps';
import { useComplaintDetails } from '../../context/compaint';
import ComplaintProgress from './ComplaintProgress';
import FooterSection from './Footer';
import { useState, useEffect } from 'react';
import {  getFormDataByStep } from '../../utils';
import { FormData, Step } from '../../def/complaint';

const FormsWrapper = () => {
    const {
        currentStep,
        setCurrentStep
    } = useComplaintDetails();

    const [complaintData, setComplaintData] = useState({}) // to store the complaint data

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
        setComplaintData(prevData => ({
            ...prevData,
            ...formData
        }));
        setCurrentStep(currentStep + 1);
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

    const CurrentComponent = steps[currentStep - 1].component;

    return (
        <>
            <ComplaintProgress
                {...{ steps, currentStep, setCurrentStep }}
            />
            <CurrentComponent 
                formData={formData} 
                onUpdate={handleFormDataUpdate}
            />
            <FooterSection 
                {...{steps, currentStep}} 
                onNext={handleNext}
            />
        </>
    );
};

export default FormsWrapper;

export { getFormDataByStep };
