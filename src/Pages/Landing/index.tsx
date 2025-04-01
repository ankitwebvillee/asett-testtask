import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

function Landing() {
    const navigate = useNavigate();
    
    return (
        <div className="container-fluid bg-light min-vh-100 py-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <main className="main-container p-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className={styles.titleContainer}>
                                <h3 className={styles.mainTitle}>
                                    Administrative Simplification Enforcement and Testing Tool (ASETT)
                                </h3>
                                <h5 className={styles.subTitle}>
                                    Follow the steps below to file your complaint
                                </h5>
                            </div>
                            
                            <motion.div 
                                className={styles.disclaimerAlert}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <i className="bi bi-exclamation-triangle-fill me-3"></i>
                                Disclaimer: If you file a complaint without registration, you will not be able to view your complaints, upload supporting documents, correspond electronically, or test transactions.
                            </motion.div>

                            <motion.p 
                                className="mt-4 lead text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                The following are the steps to file a complaint regarding HIPAA Transactions and Code Sets, Unique Identifiers, and/or Operating Rules. If you wish to file a Health Insurance Privacy complaint, please visit the <a href="#" className="text-decoration-none">Office for Civil Rights (OCR)</a> website.
                            </motion.p>
                            
                            <motion.div 
                                className="mt-5"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                {[
                                    "Identify the type of HIPAA/ACA complaint",
                                    "Provide your contact information",
                                    "Identify the Filed Against Entity",
                                    "Describe the HIPAA/ACA violation",
                                    "Review and Submit"
                                ].map((step, index) => (
                                    <motion.div 
                                        key={index} 
                                        className={styles.stepCard}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                                    >
                                        <div className={styles.stepContent}>
                                            <div className={styles.stepNumber}>{index + 1}</div>
                                            <span className="fw-medium">{step}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.p 
                                className="mt-4 text-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                You can review all information entered before submitting your complaint to CMS. Once submitted, CMS will review all information and respond to your complaint.
                            </motion.p>
                            
                            <motion.div 
                                className={styles.buttonContainer}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <button className={`${styles.button} ${styles.secondaryButton}`}>Cancel</button>
                                <button 
                                    className={`${styles.button} ${styles.primaryButton}`}
                                    onClick={() => navigate('/compaint-types')}
                                >
                                    Start Complaint Process
                                </button>
                            </motion.div>
                        </motion.div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Landing