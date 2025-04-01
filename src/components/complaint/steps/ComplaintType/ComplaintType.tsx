import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import styles from './ComplaintType.module.css';

interface ComplaintTypeProps {
    formData: any;
    onUpdate: (data: any) => void;
}

const ComplaintType: React.FC<ComplaintTypeProps> = ({ formData, onUpdate }) => {
  const handleChange = (type: string) => {
    onUpdate({
      complaintType: {
        type,
      }
    });
  };

  const complaintOptions = [
    {
      id: "transactions",
      label: "Transactions",
      description:
        "Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of benefits and premium payment.",
    },
    {
      id: "code-sets",
      label: "Code Sets",
      description:
        "Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 and NDC (National Drug Codes).",
    },
    {
      id: "unique-identifiers",
      label: "Unique Identifiers",
      description:
        "Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).",
    },
    {
      id: "operating-rules",
      label: "Operating Rules",
      description:
        "Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.",
    },
  ];

  return (
    <Container className="mt-4">
      <div className={styles.titleContainer}>
        <h3 className={styles.mainTitle}>Complaint Type</h3>
        <h5 className={styles.subTitle}>Make a selection below</h5>
      </div>
      <Form className={styles.complaintForm}>
        {complaintOptions.map((option) => (
          <Row key={option.id} className="mb-4">
            <Col>
              <div className={`${styles.complaintOption} p-3 rounded-3 ${formData.complaintType?.type === option.id ? 'border-primary border-2' : 'border border-light'}`}>
                <Form.Check
                  type="radio"
                  id={option.id}
                  name="complaintType"
                  checked={formData.complaintType?.type === option.id}
                  onChange={() => handleChange(option.id)}
                  label={
                    <div>
                      <h5 className="mb-2">{option.label}</h5>
                      <p className="mb-0 text-muted">{option.description}</p>
                    </div>
                  }
                />
              </div>
            </Col>
          </Row>
        ))}
      </Form>
    </Container>
  );
};

export default ComplaintType;
