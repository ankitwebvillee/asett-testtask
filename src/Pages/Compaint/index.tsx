import { Container } from "react-bootstrap";
import { ComplaintProvider } from "../../context/compaint";
import Formwrapper from "../../components/complaint/Formwrapper";
import Header from "../../components/Header";

const Complaint = () => {
    return (
      <ComplaintProvider>
          <div>
          <Header />
            <Container>
                <Formwrapper />
            </Container>
          </div>
      </ComplaintProvider>
    );
  };

export default Complaint