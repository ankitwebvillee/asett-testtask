  import { createContext, useContext, useState } from 'react';
  
  interface IComplaintContext {
    currentStep: number;
    setCurrentStep: (step: number) => void;
  }
  
  const ComplaintContext = createContext<IComplaintContext | undefined>(undefined);
  
  export const ComplaintProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const [currentStep, setCurrentStep] = useState(1)
  
  
    return (
      <ComplaintContext.Provider
        value={{
            currentStep,
            setCurrentStep
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
  