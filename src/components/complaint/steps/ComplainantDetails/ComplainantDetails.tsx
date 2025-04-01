import React from "react";
import { Form, Container, Row, Col, Card } from "react-bootstrap";
import styles from './ComplainantDetails.module.css';

interface ComplainantDetailsProps {
    formData: any;
    onUpdate: (data: any) => void;
}

const ComplainantDetails: React.FC<ComplainantDetailsProps> = ({ formData, onUpdate }) => {
  const handleChange = (field: string, value: string) => {
    onUpdate({
      complainantDetails: {
        ...formData.complainantDetails,
        [field]: value
      }
    });
  };

  return (
    <Container className="mt-4">
      <div className={styles.titleContainer}>
        <h3 className={styles.mainTitle}>Complainant Details</h3>
        <h5 className={styles.subTitle}>Please provide your information below</h5>
      </div>

      {/* Anonymous Selection */}
      <Card className={styles.formCard}>
        <Card.Body className={styles.formCardBody}>
          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.formLabel}>
              Do you want to remain anonymous during this process?<span className={styles.requiredField}></span>
            </Form.Label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="anonymous"
                  value="yes"
                  checked={formData.complainantDetails?.anonymous === "yes"}
                  onChange={(e) => handleChange('anonymous', e.target.value)}
                  className={styles.radioInput}
                />
                Yes
              </label>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="anonymous"
                  value="no"
                  checked={formData.complainantDetails?.anonymous === "no"}
                  onChange={(e) => handleChange('anonymous', e.target.value)}
                  className={styles.radioInput}
                />
                No
              </label>
            </div>
          </Form.Group>

          {/* Disclaimer */}
          <div className={styles.alert}>
            <i className="bi bi-info-circle"></i>
            <strong>Disclaimer:</strong> If you select yes, CMS will not share your
            information with the Filed Against Entity (FAE) during the investigation
            process. However, information provided in this complaint is subject to
            rules and policies under the Freedom of Information Act (FOIA).
          </div>
        </Card.Body>
      </Card>

      {/* Form Fields */}
      <Card className={styles.formCard}>
        <Card.Body className={styles.formCardBody}>
          <Form>
            <div className="mb-5">
              <h5 className={styles.sectionTitle}>
                <i className="bi bi-building"></i>
                Organization Information
              </h5>
              <Row className={styles.formRow}>
                <Col md={6} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      Complainant Organization Name<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      required 
                      className={styles.formControl}
                      placeholder="Enter organization name"
                      value={formData.complainantDetails?.organizationName || ''}
                      onChange={(e) => handleChange('organizationName', e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      Complainant Organization Type
                    </Form.Label>
                    <Form.Select 
                      className={styles.formSelect}
                      value={formData.complainantDetails?.organizationType || ''}
                      onChange={(e) => handleChange('organizationType', e.target.value)}
                    >
                      <option value="">--None--</option>
                      <option value="Health Care Clearinghouse">Health Care Clearinghouse</option>
                      <option value="Covered Health Care Provider">Covered Health Care Provider</option>
                      <option value="Health Plan">Health Plan</option>
                      <option value="Vendor">Vendor</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row className={styles.formRow}>
                <Col md={6} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      Complainant Organization Type (Other)
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      className={styles.formControl}
                      placeholder="Enter other organization type"
                      value={formData.complainantDetails?.organizationTypeOther || ''}
                      onChange={(e) => handleChange('organizationTypeOther', e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      Name<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      required 
                      className={styles.formControl}
                      placeholder="Enter your name"
                      value={formData.complainantDetails?.name || ''}
                      onChange={(e) => handleChange('name', e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className={styles.formRow}>
                <Col md={6} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                    Complainant Email Address<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="email" 
                      required 
                      className={styles.formControl}
                      placeholder="Enter your email"
                      value={formData.complainantDetails?.email || ''}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                    Complainant Contact Phone Number<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="tel" 
                      required 
                      className={styles.formControl}
                      placeholder="Enter your phone number"
                      value={formData.complainantDetails?.phone || ''}
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className={styles.formRow}>
                <Col md={12} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      Address<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      required 
                      className={styles.formControl}
                      placeholder="Enter your address"
                      value={formData.complainantDetails?.address || ''}
                      onChange={(e) => handleChange('address', e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className={styles.formRow}>
                <Col md={4} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                    Complainant City/Town<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      required 
                      className={styles.formControl}
                      placeholder="Enter city"
                      value={formData.complainantDetails?.city || ''}
                      onChange={(e) => handleChange('city', e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                    Complainant State/Territory<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      required 
                      className={styles.formControl}
                      placeholder="Enter state"
                      value={formData.complainantDetails?.state || ''}
                      onChange={(e) => handleChange('state', e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={4} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                    Complainant Zip Code<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      required 
                      className={styles.formControl}
                      placeholder="Enter ZIP code"
                      value={formData.complainantDetails?.zipCode || ''}
                      onChange={(e) => handleChange('zipCode', e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className={styles.formRow}>
                <Col md={12} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      Country<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Select 
                      required 
                      className={styles.formSelect}
                      value={formData.complainantDetails?.country || ''}
                      onChange={(e) => handleChange('country', e.target.value)}
                    >
                      <option value="">Select a country</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Japan">Japan</option>
                      <option value="Brazil">Brazil</option>
                      <option value="India">India</option>
                      <option value="Mexico">Mexico</option>
                    </Form.Select>
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

export default ComplainantDetails;
