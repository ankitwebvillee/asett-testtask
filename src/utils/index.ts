import { FormData } from "../def/complaint";

export const getFormDataByStep = (step: number, complaintData: any): Partial<FormData> => {
    switch (step) {
        case 1:
            return {
                complaintType: complaintData.complaintType || {
                    type: ''
                }
            };
        case 2:
            return {
                complainantDetails: complaintData.complainantDetails || {
                    anonymous: '',
                    organizationName: '',
                    organizationType: '',
                    organizationTypeOther: '',
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    city: '',
                    state: '',
                    zipCode: '',
                    country: ''
                }
            };
        case 3:
            return {
                faeDetails: complaintData.faeDetails || {
                    name: '',
                    email: '',
                    phone: '',
                    department: ''
                }
            };
        case 4:
            return {
                complaintDetails: complaintData.complaintDetails || {
                    title: '',
                    description: '',
                    date: '',
                    location: ''
                }
            };
        case 5:
        case 6:
            return complaintData;
        default:
            return {};
    }
};