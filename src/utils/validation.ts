import { FormData } from '../def/complaint';

interface ValidationResult {
    isValid: boolean;
    message: string;
}

export const validateStep = (currentStep: number, formData: Partial<FormData>): ValidationResult => {
    switch (currentStep) {
        case 1: // Complaint Type
            if (!formData.complaintType?.type) {
                return {
                    isValid: false,
                    message: 'Please select a complaint type'
                };
            }
            break;
        case 2: // Complainant Details
            if (!formData.complainantDetails?.anonymous) {
                return {
                    isValid: false,
                    message: 'Please select whether you want to remain anonymous'
                };
            }
            if (formData.complainantDetails.anonymous === 'no') {
                const complainantRequiredFields = [
                    'organizationName',
                    'name',
                    'email',
                    'phone',
                    'address',
                    'city',
                    'state',
                    'zipCode',
                    'country'
                ] as Array<keyof NonNullable<FormData['complainantDetails']>>;
                const missingFields = complainantRequiredFields.filter(field => !formData.complainantDetails?.[field]);
                if (missingFields.length > 0) {
                    return {
                        isValid: false,
                        message: `Please fill in all required fields: ${missingFields.join(', ')}`
                    };
                }
            }
            break;
        case 3: // FAE Details
            const faeRequiredFields = ['name', 'email', 'phone', 'department'] as Array<keyof NonNullable<FormData['faeDetails']>>;
            const missingFaeFields = faeRequiredFields.filter(field => !formData.faeDetails?.[field]);
            if (missingFaeFields.length > 0) {
                return {
                    isValid: false,
                    message: `Please fill in all required fields: ${missingFaeFields.join(', ')}`
                };
            }
            break;
        case 4: // Complaint Details
            const complaintRequiredFields = ['date', 'location', 'title', 'description'] as Array<keyof NonNullable<FormData['complaintDetails']>>;
            const missingComplaintFields = complaintRequiredFields.filter(field => !formData.complaintDetails?.[field]);
            if (missingComplaintFields.length > 0) {
                return {
                    isValid: false,
                    message: `Please fill in all required fields: ${missingComplaintFields.join(', ')}`
                };
            }
            break;
    }
    
    return {
        isValid: true,
        message: ''
    };
}; 