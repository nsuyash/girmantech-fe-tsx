import React from "react";
import Header from "../components/Header";

const ContactDetails: React.FC = () => {
    return (
        <>
            <Header />  
            <div className="container">
                <h1 style={{marginTop: '2rem'}}>Contact Details</h1>
                <div className="row">
                    <div className="card col-md-5">
                        <div className="py-2 text-center">
                        <img src="https://girmantech.com/_next/image?url=%2FGirish.png&w=640&q=75" className="img-fluid" width={'150px'} alt="Company Founder Profile." />
                        <h2 className="mt-2">Girish Budhwani</h2>
                        <p>Founder</p>
                        <h3 className="mt-4">
                            <span className="contact-logo-border"><a href="https://www.linkedin.com/in/girishbudhwani/" className="text-dark"><i className="bi bi-linkedin"></i></a></span>
                            <span className="contact-logo-border"><a href="tel:+917760560137" className="text-dark"><i className="bi bi-telephone-fill"></i></a></span>
                            <span className="contact-logo-border"><a href="mailto:girish@girmantech.com" className="text-dark"><i className="bi bi-envelope-fill"></i></a></span>    
                        </h3>
                        </div>
                    </div>
                    <div className="card col-md-5">
                        <div className="py-2 text-center">
                        <img src="https://girmantech.com/_next/image?url=%2FManish.png&w=640&q=75" className="img-fluid" width={'150px'} alt="Company Co-Founder Profile." />
                        <h2 className="mt-2">Manish Dipankar</h2>
                        <p>Co-Founder</p>
                        <h3 className="mt-4">
                            <span className="contact-logo-border"><a href="https://www.linkedin.com/in/manish-dipankar-75771042/" className="text-dark"><i className="bi bi-linkedin"></i></a></span>
                            <span className="contact-logo-border"><a href="tel:+918123259095" className="text-dark"><i className="bi bi-telephone-fill"></i></a></span>
                            <span className="contact-logo-border"><a href="mailto:manish@girmantech.com" className="text-dark"><i className="bi bi-envelope-fill"></i></a></span>    
                        </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactDetails;