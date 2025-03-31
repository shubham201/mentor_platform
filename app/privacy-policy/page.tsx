import Link from "next/link";
import Navbar from "../components/navbar";
import Head from "next/head";
import { FaBookOpen, FaChalkboardTeacher, FaLightbulb, FaUsers } from "react-icons/fa";

export default function AboutUsPage() {
  return (
    <div>
      <Head>
        {/* Basic Metadata */}
        <title>Privacy Policy | AtoInfinity Hub</title>
        <meta name="description" content="Learn more about AtoInfinity Hub, our mission, and how we connect students with expert mentors." />
        <meta name="keywords" content="mentorship, online learning, professional growth, courses, education, AtoInfinity Hub" />
        <meta name="author" content="AtoInfinity Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph (OG) Metadata */}
        <meta property="og:title" content="About Us | AtoInfinity Hub" />
        <meta property="og:description" content="Discover how AtoInfinity Hub connects students with expert mentors for learning and career growth." />
        <meta property="og:type" content="website" />
      </Head>
      <Navbar />
      <div>
        {/* Hero Section */}
        {/* <div className="bg-[#e8ebf8] pt-14 pb-5 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2b2b6d]">Privacy Policy</h1>
          <p className="mt-4 text-base md:text-lg text-[#4a4a7d]">
            Welcome to AtoInfinity Hub, your ultimate destination for learning, growth, and mentorship!
          </p>
        </div> */}

        {/* Introduction Section */}
        {/* <div className="bg-[#e8ebf8] pt-14 pb-5">
          <h1 className="text-3xl md:text-4xl font-bold text-[#2b2b6d] text-center">Privacy Policy</h1>

          <p>At <strong>A to Infinity Hub</strong>, we are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services. By using our platform, you consent to the practices outlined in this Privacy Policy.</p>

          <h2>1. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when you use our services, such as:</p>
          <ul>
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, child's grade level, subjects of interest, and any additional details you provide for tutoring purposes.</li>
            <li><strong>Payment Information:</strong> Credit card details, billing address, and payment history (processed securely through third-party payment gateways).</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP addresses, browser types, and time spent on the site, which helps us improve user experience.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect in the following ways:</p>
          <ul>
            <li>To provide you with personalized tutoring services and manage your account.</li>
            <li>To communicate with you about your child’s progress, upcoming sessions, and other relevant updates.</li>
            <li>To process payments and handle billing for our services.</li>
            <li>To improve and customize our website and services based on user feedback and behavior.</li>
            <li>To send promotional or informational emails related to new offerings, updates, or events (you may opt-out of these emails at any time).</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, or destruction. While we strive to protect your information, no data transmission over the internet can be guaranteed 100% secure, and we cannot ensure the absolute security of your data.</p>

          <h2>4. Third-Party Services</h2>
          <p>We may share your personal information with trusted third parties who assist us in providing services to you, such as payment processors, email marketing platforms, or data storage services. These third parties are required to comply with privacy standards and use your information only for the purposes specified by us.</p>
          <p>We do not sell or rent your personal information to any third parties for marketing purposes.</p>

          <h2>5. Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to improve your experience on our website. Cookies are small text files stored on your device that help us remember your preferences and customize your interactions with our platform. You can disable cookies through your browser settings, but some features of the website may not function correctly without them.</p>

          <h2>6. Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access, update, or delete your personal information at any time.</li>
            <li>Request information about how your data is being processed.</li>
            <li>Opt-out of receiving marketing communications by following the unsubscribe instructions in our emails or by contacting us directly.</li>
          </ul>
          <p>If you wish to exercise any of your rights, please contact us using the information provided below.</p>

          <h2>7. Children’s Privacy</h2>
          <p>Our services are intended for parents and guardians seeking tutoring for their children. We do not knowingly collect or solicit personal information from children under the age of 13. If you believe that we have collected information from a child under 13, please contact us immediately, and we will take steps to delete such information.</p>

          <h2>8. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated revision date. Please review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>

          <h2>9. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us:</p>
          <p><strong>Email:</strong> <a href="mailto:support@atoinfinityhub.com">support@atoinfinityhub.com</a><br></br>
            <strong>Phone:</strong> +91 XXX-XXXX-XXXX<br></br>
            <strong>Address:</strong> [Your Address Here]</p>

          <p>By using <strong>A to Infinity Hub</strong> services, you acknowledge and agree to the terms of this Privacy Policy.</p>

        </div> */}
        <div className="bg-[#e8ebf8] pt-14 pb-8 text-left mx-auto px-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-[#2d3748] mb-8">Privacy Policy</h1>

          <p className="text-lg text-[#4a5568] mb-6">
            At <strong>A to Infinity Hub</strong>, we are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services. By using our platform, you consent to the practices outlined in this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d3748] mb-4">1. Information We Collect</h2>
          <p className="text-lg text-[#4a5568] mb-4">We collect personal information that you voluntarily provide to us when you use our services, such as:</p>
          <ul className="list-disc pl-8 text-lg text-[#4a5568] mb-6">
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, child's grade level, subjects of interest, and any additional details you provide for tutoring purposes.</li>
            <li><strong>Payment Information:</strong> Credit card details, billing address, and payment history (processed securely through third-party payment gateways).</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, such as IP addresses, browser types, and time spent on the site, which helps us improve user experience.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#2d3748] mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-8 text-lg text-[#4a5568] mb-6">
            <li>To provide you with personalized tutoring services and manage your account.</li>
            <li>To communicate with you about your child’s progress, upcoming sessions, and other relevant updates.</li>
            <li>To process payments and handle billing for our services.</li>
            <li>To improve and customize our website and services based on user feedback and behavior.</li>
            <li>To send promotional or informational emails related to new offerings, updates, or events (you may opt-out of these emails at any time).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#2d3748] mb-4">3. Data Security</h2>
          <p className="text-lg text-[#4a5568] mb-6">
            We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, or destruction. While we strive to protect your information, no data transmission over the internet can be guaranteed 100% secure, and we cannot ensure the absolute security of your data.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d3748] mb-4">4. Third-Party Services</h2>
          <p className="text-lg text-[#4a5568] mb-6">
            We may share your personal information with trusted third parties who assist us in providing services to you, such as payment processors, email marketing platforms, or data storage services. These third parties are required to comply with privacy standards and use your information only for the purposes specified by us.
          </p>
          <p className="text-lg text-[#4a5568] mb-6">
            We do not sell or rent your personal information to any third parties for marketing purposes.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d3748] mb-4">5. Cookies and Tracking Technologies</h2>
          <p className="text-lg text-[#4a5568] mb-6">
            We use cookies and similar tracking technologies to improve your experience on our website. Cookies are small text files stored on your device that help us remember your preferences and customize your interactions with our platform. You can disable cookies through your browser settings, but some features of the website may not function correctly without them.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d3748] mb-4">6. Your Rights and Choices</h2>
          <p className="text-lg text-[#4a5568] mb-6">
            You have the right to:
          </p>
          <ul className="list-disc pl-8 text-lg text-[#4a5568] mb-6">
            <li>Access, update, or delete your personal information at any time.</li>
            <li>Request information about how your data is being processed.</li>
            <li>Opt-out of receiving marketing communications by following the unsubscribe instructions in our emails or by contacting us directly.</li>
          </ul>
          <p className="text-lg text-[#4a5568] mb-6">
            If you wish to exercise any of your rights, please contact us using the information provided below.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d3748] mb-4">7. Children’s Privacy</h2>
          <p className="text-lg text-[#4a5568] mb-6">
            Our services are intended for parents and guardians seeking tutoring for their children. We do not knowingly collect or solicit personal information from children under the age of 13. If you believe that we have collected information from a child under 13, please contact us immediately, and we will take steps to delete such information.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d3748] mb-4">8. Changes to This Privacy Policy</h2>
          <p className="text-lg text-[#4a5568] mb-6">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated revision date. Please review this Privacy Policy periodically to stay informed about how we are protecting your information.
          </p>

          <h2 className="text-2xl font-semibold text-[#2d3748] mb-4">9. Contact Us</h2>
          <p className="text-lg text-[#4a5568] mb-4">
            If you have any questions or concerns about this Privacy Policy or how we handle your personal information, please contact us:
          </p>
          <p className="text-lg text-[#4a5568] mb-4">
            <strong>Email:</strong> <a href="mailto:atoinfinityhub@gmail.com" className="text-[#3182ce] hover:underline">atoinfinityhub@gmail.com</a><br></br>
            <strong>Phone:</strong> +91 8789785275<br></br>
          </p>

          <p className="text-lg text-[#4a5568] mb-6">
            By using <strong>A to Infinity Hub</strong> services, you acknowledge and agree to the terms of this Privacy Policy.
          </p>
        </div>

        </div>
      </div>
      );
}
