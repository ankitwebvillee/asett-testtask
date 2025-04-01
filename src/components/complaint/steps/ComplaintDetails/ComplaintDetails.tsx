import React from "react";
import { Form, Container, Row, Col, Card } from "react-bootstrap";
import styles from './ComplaintDetails.module.css';

interface ComplaintDetailsProps {
    formData: any;
    onUpdate: (data: any) => void;
}

const ComplaintDetails: React.FC<ComplaintDetailsProps> = ({ formData, onUpdate }) => {
  const handleChange = (field: string, value: string) => {
    onUpdate({
      complaintDetails: {
        ...formData.complaintDetails,
        [field]: value
      }
    });
  };

  return (
    <Container className="mt-4">
      <div className={styles.titleContainer}>
        <h3 className={styles.mainTitle}>Complaint Details</h3>
        <h5 className={styles.subTitle}>Please provide information about your complaint below</h5>
      </div>

      <Card className={styles.formCard}>
        <Card.Body className={styles.formCardBody}>
          <Form>
            <div className="mb-5">
              <h5 className={styles.sectionTitle}>
                <i className="bi bi-calendar-event"></i>
                Incident Information
              </h5>
              <Row className={styles.formRow}>
                <Col md={6} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      Incident occurred date<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="date" 
                      required 
                      className={styles.formControl}
                      placeholder="mm/dd/yyyy"
                      value={formData.complaintDetails?.date || ''}
                      onChange={(e) => handleChange('date', e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                    Complaint Unique Identifier Type
                    </Form.Label>
                    <Form.Select 
                      className={styles.formSelect}
                      value={formData.complaintDetails?.transactionType || ''}
                      onChange={(e) => handleChange('transactionType', e.target.value)}
                    >
                      <option value="">--None--</option>
                      <option value="npi">National Provider Identifier (NPI)</option>
                      <option value="ein">Employer Identification Number (EIN)</option>
                      <option value="hpid">Health Plan ID</option>
                      <option value="claim">Insurance Claim</option>
                      <option value="billing">Medical Billing</option>
                      <option value="prescription">Prescription Related</option>
                      <option value="authorization">Prior Authorization</option>
                      <option value="referral">Medical Referral</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row className={styles.formRow}>
                <Col md={12} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                    Complaint Subject*<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      required 
                      className={styles.formControl}
                      placeholder="Enter location"
                      value={formData.complaintDetails?.location || ''}
                      onChange={(e) => handleChange('location', e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className={styles.formRow}>
                <Col md={12} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      Title<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      required 
                      className={styles.formControl}
                      placeholder="Enter complaint title"
                      value={formData.complaintDetails?.title || ''}
                      onChange={(e) => handleChange('title', e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className={styles.formRow}>
                <Col md={12} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      Description<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5}
                      required 
                      className={styles.formControl}
                      placeholder="Enter complaint description"
                      value={formData.complaintDetails?.description || ''}
                      onChange={(e) => handleChange('description', e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ComplaintDetails;
