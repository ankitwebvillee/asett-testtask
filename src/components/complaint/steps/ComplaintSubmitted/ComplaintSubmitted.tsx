import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from './ComplaintSubmitted.module.css';

const ComplaintSubmitted: React.FC = () => {
  return (
    <Container className="mt-4">
      <div className={styles.titleContainer}>
        <h3 className={styles.mainTitle}>Complaint Submitted</h3>
        <h5 className={styles.subTitle}>Thank you for submitting your complaint</h5>
      </div>

      <Card className={styles.successCard}>
        <Card.Body className={styles.successCardBody}>
          <div className={styles.successIcon}>
            <i className="bi bi-check-circle-fill"></i>
          </div>
          <h4 className={styles.successMessage}>Your complaint has been successfully submitted</h4>
          <p className={styles.successDescription}>
            We will review your complaint and get back to you shortly. You will receive a confirmation email with your complaint reference number.
          </p>
          <div className={styles.alert}>
            <i className="bi bi-info-circle"></i>
            <strong>Note:</strong> Please keep your complaint reference number for future reference.
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ComplaintSubmitted; 