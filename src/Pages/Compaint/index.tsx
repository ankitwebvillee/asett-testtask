import { Container } from "react-bootstrap";
import { ComplaintProvider } from "../../context/compaint";
import Formwrapper from "../../components/complaint/Formwrapper";

const Complaint = () => {
    return (
      <ComplaintProvider>
          <div>
            <Container>
                <Formwrapper />
            </Container>
          </div>
      </ComplaintProvider>
    );
  };

export default Complaint