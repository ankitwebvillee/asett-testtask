import React from 'react'
import { useComplaintDetails } from '../../../context/compaint'
import { useNavigate } from 'react-router-dom'
import './Footer.css'

function FooterSection({ steps, currentStep, onNext }: any) {
    const lastStep = steps.find((step: any) => step.id === currentStep - 1)
    const nextStep = steps.find((step: any) => step.id === currentStep + 1)

    const { setCurrentStep } = useComplaintDetails()
    const navigate = useNavigate()
    
    return (
        <div className="footer-container">
            <button 
                className="footer-button back"
                onClick={() => !lastStep ? navigate('/') : setCurrentStep(lastStep?.id)}
            >
                {lastStep?.title || 'Welcome'}
            </button>
            <button className="footer-button cancel" onClick={() => navigate('/')}>
                Cancel
            </button>
            <button 
                className="footer-button next"
                onClick={() => {onNext()}}
            >
                {(nextStep?.title === 'Submitted' ? 'Submit' : nextStep?.title) || 'Submit'}
            </button>
        </div>
    )
}

export default FooterSection