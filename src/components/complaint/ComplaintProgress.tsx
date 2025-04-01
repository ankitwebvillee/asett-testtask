import styles from './ComplaintProgress.module.css';

const ComplaintProgress = ({ currentStep, steps, setCurrentStep }: any) => {
  return (
    <div className={styles.progressWrapper}>
      <ul className={styles.progressList}>
        {steps
          .filter((step: any) => !step.hide)
          .map((elm: any, index: number) => (
            <li key={elm.id} className={styles.progressItem}>
              <div className={styles.progressContent}>
                <button
                  className={`${styles.progressButton} ${elm.id <= currentStep ? styles.active : ''}`}
                >
                  {index + 1}
                </button>
                <div className={styles.progressTitle}>{elm.title}</div>
              </div>
              {index < steps.length - 1 && (
                <div className={`${styles.progressLine} ${elm.id < currentStep ? styles.active : ''}`} />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ComplaintProgress;
