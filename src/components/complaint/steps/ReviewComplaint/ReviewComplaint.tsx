import React from "react";
import { Container, Card } from "react-bootstrap";
import styles from './ReviewComplaint.module.css';

interface ReviewComplaintProps {
    formData: any;
}

const ReviewComplaint: React.FC<ReviewComplaintProps> = ({ formData }) => {
  const formatData = (data: any) => {
    const formattedData: { [key: string]: any } = {};
    
    // Format Complaint Type
    if (data.complaintType) {
      formattedData['Complaint Type'] = data.complaintType.type;
      formattedData['Complaint Description'] = data.complaintType.description;
    }

    // Format Complainant Details
    if (data.complainantDetails) {
      formattedData['Anonymous'] = data.complainantDetails.anonymous;
      formattedData['Organization Name'] = data.complainantDetails.organizationName;
      formattedData['Organization Type'] = data.complainantDetails.organizationType;
      formattedData['Organization Type (Other)'] = data.complainantDetails.organizationTypeOther;
      formattedData['Name'] = data.complainantDetails.name;
      formattedData['Email'] = data.complainantDetails.email;
      formattedData['Phone'] = data.complainantDetails.phone;
      formattedData['Address'] = data.complainantDetails.address;
      formattedData['City'] = data.complainantDetails.city;
      formattedData['State'] = data.complainantDetails.state;
      formattedData['ZIP Code'] = data.complainantDetails.zipCode;
      formattedData['Country'] = data.complainantDetails.country;
    }

    // Format FAE Details
    if (data.faeDetails) {
      formattedData['FAE Name'] = data.faeDetails.name;
      formattedData['FAE Organization Type'] = data.faeDetails.organizationType;
      formattedData['FAE Organization Type (Other)'] = data.faeDetails.organizationTypeOther;
      formattedData['FAE Email'] = data.faeDetails.email;
      formattedData['FAE Phone'] = data.faeDetails.phone;
      formattedData['FAE Department'] = data.faeDetails.department;
    }

    // Format Complaint Details
    if (data.complaintDetails) {
      formattedData['Incident Date'] = data.complaintDetails.date;
      formattedData['Transaction Type'] = data.complaintDetails.transactionType;
      formattedData['Location'] = data.complaintDetails.location;
      formattedData['Title'] = data.complaintDetails.title;
      formattedData['Description'] = data.complaintDetails.description;
    }

    return formattedData;
  };

  const reviewData = formatData(formData);

  return (
    <Container className="mt-4">
      <div className={styles.titleContainer}>
        <h3 className={styles.mainTitle}>Review Complaint</h3>
        <h5 className={styles.subTitle}>Please review your complaint details before submission</h5>
      </div>

      <Card className={styles.reviewCard}>
        <Card.Body className={styles.reviewCardBody}>
          <h5 className={styles.sectionTitle}>
            <i className="bi bi-file-text"></i>
            Complaint Details
          </h5>
          
          <div className="overflow-x-auto">
            <table className={styles.reviewTable}>
              <tbody>
                {/* Complaint Type Section */}
                {Object.entries(reviewData)
                  .filter(([key]) => key.startsWith('Complaint Type') || key.startsWith('Complaint Description'))
                  .map(([key, value]) => (
                    <tr key={key}>
                      <th>{key}</th>
                      <td>{value || 'Not provided'}</td>
                    </tr>
                  ))}
                
                {Object.entries(reviewData)
                  .filter(([key]) => 
                    key === 'Incident Date' || 
                    key === 'Transaction Type' || 
                    key === 'Location' || 
                    key === 'Title' || 
                    key === 'Description'
                  )
                  .map(([key, value]) => (
                    <tr key={key}>
                      <th>{key}</th>
                      <td>{value || 'Not provided'}</td>
                    </tr>
                  ))}
                
                {/* Complainant Details Section */}
                <tr className={styles.sectionHeader}>
                  <th colSpan={2}>Complainant Details</th>
                </tr>
                {Object.entries(reviewData)
                  .filter(([key]) => 
                    !key.startsWith('Complaint') && 
                    !key.startsWith('FAE') && 
                    key !== 'Incident Date' && 
                    key !== 'Transaction Type' && 
                    key !== 'Location' && 
                    key !== 'Title' && 
                    key !== 'Description'
                  )
                  .map(([key, value]) => (
                    <tr key={key}>
                      <th>{key}</th>
                      <td>{value || 'Not provided'}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <h5 className={styles.sectionTitle}>
            <i className="bi bi-person-badge"></i>
            FAE Details
          </h5>
          
          <div className="overflow-x-auto">
            <table className={styles.reviewTable}>
              <tbody>
                {Object.entries(reviewData)
                  .filter(([key]) => key.startsWith('FAE'))
                  .map(([key, value]) => (
                    <tr key={key}>
                      <th>{key}</th>
                      <td>{value || 'Not provided'}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className={styles.alert}>
            <i className="bi bi-info-circle"></i>
            <strong>Note:</strong> Please ensure all information is correct before submitting your complaint.
            You can go back to previous steps to make changes if needed.
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ReviewComplaint;