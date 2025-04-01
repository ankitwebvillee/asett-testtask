export interface FormData {
    complaintType?: {
        type: string;
        description: string;
    };
    complainantDetails?: {
        anonymous: string;
        organizationName: string;
        organizationType: string;
        organizationTypeOther: string;
        name: string;
        email: string;
        phone: string;
        address: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    };
    faeDetails?: {
        name: string;
        email: string;
        phone: string;
        department: string;
    };
    complaintDetails?: {
        title: string;
        description: string;
        date: string;
        location: string;
    };
}

export interface StepComponentProps {
    formData: Partial<FormData>;
    onUpdate: (stepData: Partial<FormData>) => void;
}

export interface Step {
    id: number;
    title: string;
    component: React.ComponentType<StepComponentProps>;
    isCompleted: boolean;
}
