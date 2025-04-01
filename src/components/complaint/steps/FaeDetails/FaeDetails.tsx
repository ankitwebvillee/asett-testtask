import React from "react";
import { Form, Container, Row, Col, Card } from "react-bootstrap";
import styles from './FaeDetails.module.css';

interface FaeDetailsProps {
    formData: any;
    onUpdate: (data: any) => void;
}

const FaeDetails: React.FC<FaeDetailsProps> = ({ formData, onUpdate }) => {
  const handleChange = (field: string, value: string) => {
    onUpdate({
      faeDetails: {
        ...formData.faeDetails,
        [field]: value
      }
    });
  };

  return (
    <Container className="mt-4">
      <div className={styles.titleContainer}>
        <h3 className={styles.mainTitle}>FAE Details</h3>
        <h5 className={styles.subTitle}>Please provide the Filed Against Entity information below</h5>
      </div>

      <Card className={styles.formCard}>
        <Card.Body className={styles.formCardBody}>
          <Form>
            <div className="mb-5">
              <h5 className={styles.sectionTitle}>
                <i className="bi bi-building"></i>
                Organization Information
              </h5>
              <Row className={styles.formRow}>
                <Col md={12} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      FAE Organization Name<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      required 
                      className={styles.formControl}
                      placeholder="Enter organization name"
                      value={formData.faeDetails?.name || ''}
                      onChange={(e) => handleChange('name', e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className={styles.formRow}>
                <Col md={6} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      FAE Organization Type
                    </Form.Label>
                    <Form.Select 
                      className={styles.formSelect}
                      value={formData.faeDetails?.organizationType || ''}
                      onChange={(e) => handleChange('organizationType', e.target.value)}
                    >
                      <option value="">--None--</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      FAE Organization Type (Other)
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      className={styles.formControl}
                      placeholder="Enter other organization type"
                      value={formData.faeDetails?.organizationTypeOther || ''}
                      onChange={(e) => handleChange('organizationTypeOther', e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className={styles.formRow}>
                <Col md={6} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      Email<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="email" 
                      required 
                      className={styles.formControl}
                      placeholder="Enter email address"
                      value={formData.faeDetails?.email || ''}
                      onChange={(e) => handleChange('email', e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col md={6} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      Phone<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="tel" 
                      required 
                      className={styles.formControl}
                      placeholder="Enter phone number"
                      value={formData.faeDetails?.phone || ''}
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className={styles.formRow}>
                <Col md={12} className={styles.formCol}>
                  <Form.Group className={styles.formGroup}>
                    <Form.Label className={styles.formLabel}>
                      Department<span className={styles.requiredField}></span>
                    </Form.Label>
                    <Form.Control 
                      type="text" 
                      required 
                      className={styles.formControl}
                      placeholder="Enter department"
                      value={formData.faeDetails?.department || ''}
                      onChange={(e) => handleChange('department', e.target.value)}
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

export default FaeDetails;
