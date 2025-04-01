import React from 'react'
import { useComplaintDetails } from '../../../context/compaint'
import { useNavigate } from 'react-router-dom'
import './Footer.css'

function FooterSection({ steps, currentStep, onNext }: any) {
    const lastStep = steps.find((step: any) => step.id === currentStep - 1)
    const nextStep = steps.find((step: any) => step.id === currentStep + 1)

    const { setCurrentStep } = useComplaintDetails()
    const navigate = useNavigate()

    const getBackButtonText = () => {
        switch (currentStep) {
            case 1:
                return 'Back'
            case 2:
                return 'Specify Complaint Types'
            case 3:
                return 'Complainant Information Types'
            case 4:
                return 'Filed Against Entity Information'
            case 5:
                return 'Complaint details Information'
            default:
                return 'Back'
        }
    }

    const getNextButtonText = () => {
        switch (currentStep) {
            case 1:
                return 'Complainant Information'
            case 2:
                return 'Filed Against Entity Information'
            case 3:
                return 'Complaint details Information'
            case 4:
                return 'Complaint Review'
            case 5:
                return 'Submit'
            default:
                return 'Home'
        }
    }
    
    return (
        <div className="footer-container">
            {currentStep < 5 && 
            <button 
                className="footer-button back"
                onClick={() => !lastStep ? navigate('/') : setCurrentStep(lastStep?.id)}
            >
                {`< ${getBackButtonText()}`}
            </button>
            }
            <button className="footer-button cancel" onClick={() => navigate('/')}>
                 {currentStep > 5 ? 'Home' : 'Cancel'}
            </button>
            {currentStep < 5 && 
            <button 
                className="footer-button next"
                onClick={() => {onNext()}}
            >
                {`${getNextButtonText()} >`}
            </button>
}
        </div>
    )
}

export default FooterSection