'use client';
// app/AboutUs/page.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './privacy.css';
import ScrollToTop from "../components/scrollToTop";
import Link from 'next/link';


export default function Privacy() {

  return (
    <>
     <Navbar />
    
    <div className="body-privacy">
   <ScrollToTop />
        
       <h1 className="h1-privacy">Privacy Policy</h1>
       <div className="para-privacy para-1">
        <h2 className="h2-privacy">Saftey tips and security</h2>
        <h3 className="h3-privacy">Identity Verification</h3>
        <p className="privacy-p">Our agents visit clearing agents at their offices and verify the identity of the clearing agent 
            and transporter to ensure that they are who they claim to be. We do this by requesting government-issued identification documents
             such as Ghana Cards, GPHA Access Card, Agency Card. Drivers Licences, Insurance etc.</p>

        <h3 className="h3-privacy">Business Registration</h3>
        <p className="privacy-p">The Clearing Agent and Transporter should be registered as legal entities with the relevant government authorities.
             Offiiss registration agents verify this by requesting the registration certificate or other relevant documents.</p>

        <h3 className="h3-privacy">References and Reviews Feature</h3>
        <p className="privacy-p">As marketplace app we encourage importers to use references from the clearing agent and transporter's
             previous clients and check their reviews on the app to verify their reliability and credibility.</p>

        <h3 className="h3-privacy">Insurance and Licenses</h3>
        <p className="privacy-p">The clearing agent and particularly transporter should possess the necessary insurance and licenses required by law to provide their services. 
            Offiiss verifies this by requesting proof of insurance and licenses.</p>

        <h3 className="h3-privacy">Payment</h3>
        <p className="privacy-p">We urge importers to visit agents at their locations or offices for physical meet up before transaction
             and payment can be done. We take no liability for any payment.
             Never give in for any manipulation and coercion to make any payment without any due diligence on the part of users or importer</p>
       </div>
 <div className="para-privacy para-2">
        <h2 className="h2-privacy">Data Policy</h2>
        <p className="privacy-p"><b>Effective Date</b>:January 1,2025</p>
        <p className="privacy-p">Offiiss ("we," "our," or "us") values your privacy and is committed to protecting your personal information.
             This Privacy Policy explains how we collect, 
            use, share, and safeguard your information when you visit our website or use our services.</p>

        <h3 className="h3-privacy">1. Information We Collect</h3>
        <h4 className="h4-privacy">1.1 Information You Provide Directly</h4>
        <p className="privacy-p">We collect the following information directly from you:
            <ol className="list-ol">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Any other information provided through our forms or account creation process</li>
            </ol>

</p>
       <h4 className="h4-privacy">1.2 Automatically Collected Information</h4>
<p className="privacy-p">We may collect information such as:
            <ol className="list-ol">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Website usage data</li>
            </ol>

</p>
        <h4 className="h4-privacy">1.3 Cookies and Tracking Technologies</h4>
        <p className="privacy-p">We may use cookies and similar technologies to enhance your experience, 
            track website usage, and improve our services. For more details.</p>


        <h3 className="h3-privacy">2. How We Use Your Information</h3>
        <p className="privacy-p">We use your information to:
            <ol className="list-ol">
                <li>Provide and improve our services</li>
                <li>Communicate with you about your account or requests</li>
                <li>Process transactions or fulfill orders</li>
                <li>Comply with legal obligations</li>
                <li>Conduct analytics and marketing (with your consent)</li>
            </ol>
        </p>

<h3 className="h3-privacy">3. How We Share Your Information</h3>
        <p className="privacy-p">We do not sell your personal information. However, we may share it:
            <ol className="list-ol">
                <li>With service providers and partners who assist us in delivering our services</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
            </ol>
        </p>
        <h3 className="h3-privacy">4. Data Retention</h3>
        <p className="privacy-p">We retain your personal information only for as long as 
            necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>

          <h3 className="h3-privacy">5. Your Rights</h3>
        <p className="privacy-p">You have the right to:
            <ol className="list-ol">
                <li>Request access to your personal data</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your data under certain circumstances</li>
                <li>Object to certain data processing activities</li>
                <li>Request your data in a portable format</li>
            </ol>
        </p>

        <h3 className="h3-privacy">6. Data Deletion Requests</h3>
        <p className="privacy-p">If you wish to delete your account and associated data, please follow these steps:
            <ol className="num-ol">
                <li>Visit our <Link href="/delete_data" className="link-privacy">Data Deletion Request Form</Link>.</li>
                <li>Fill in the required fields, including your name and contact information.</li>
                <li>Submit the form, and we will process your request within <b>7 business days.</b> </li>
            </ol>

            If you need further assistance, contact us at <a href="mailto:Support@offiiss.com" className="link-privacy" >support@offiiss.com</a>  .


        </p>
                <h3 className="h3-privacy">7. Security of Your Information</h3>
        <p className="privacy-p">We implement appropriate technical and organizational measures to protect your personal 
            data from unauthorized access, loss, or misuse. However, no system is 100% secure.</p>

        <h3 className="h3-privacy">8. Third-Party Links</h3>
        <p className="privacy-p">Our website may contain links to third-party websites. We are not responsible for the privacy practices
             of these external sites. Please review their privacy policies before providing any personal data.</p>

        <h3 className="h3-privacy">9. Changes to This Privacy Policy</h3>
        <p className="privacy-p">We may update this Privacy Policy from time to time. Any changes will be posted on
             this page with the updated effective date. Please review this page regularly.</p>








       </div>
      </div>
     <Footer />
    </>
  );
}


