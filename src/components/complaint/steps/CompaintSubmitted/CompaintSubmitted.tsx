import React from 'react';
import { Container, Card } from 'react-bootstrap';
import styles from './CompaintSubmitted.module.css';

function CompaintSubmitted() {
  return (
    <Container className="mt-4">
      <div className={styles.titleContainer}>
        <h3 className={styles.mainTitle}>Complaint Submitted Successfully</h3>
        <h5 className={styles.subTitle}>Thank you for submitting your complaint</h5>
      </div>

      <Card className={styles.formCard}>
        <Card.Body className={styles.formCardBody}>
          <div className={styles.successContainer}>
            <div className={styles.successIcon}>
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <div className={styles.successContent}>
              <h4 className={styles.successTitle}>Your complaint has been received</h4>
              <p className={styles.successMessage}>
                We have received your complaint and will review it shortly. You will receive a confirmation email with your complaint reference number.
              </p>
              <div className={styles.nextSteps}>
                <h5 className={styles.sectionTitle}>
                  <i className="bi bi-info-circle"></i>
                  Next Steps
                </h5>
                <ul className={styles.stepsList}>
                  <li>Check your email for the confirmation message</li>
                  <li>Keep your complaint reference number for future reference</li>
                  <li>Our team will review your complaint within 2-3 business days</li>
                </ul>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CompaintSubmitted;