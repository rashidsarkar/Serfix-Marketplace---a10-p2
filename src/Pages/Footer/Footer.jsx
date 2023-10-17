import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 md:w-1/4 p-4">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">Contact Us</h3>
          <p>123 Car Street, Suite 101</p>
          <p>New York, United States</p>
          <p>Email: info@serfix.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="text-center">
          <img
            src="https://i.ibb.co/vYVFLfj/download1.png" // Add your company logo image path
            alt="Serfix Logo"
            className="h-16 mx-auto mb-4"
          />
          <p>
            Serfix
            <br />
            Your Reliable Automotive Partner
          </p>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 p-4 text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">Stay Connected</h3>
          <p>Follow us on social media:</p>
          <div className="flex gap-4 justify-center mt-2 text-center">
            <a href="#" className="mr-2">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" className="mr-2">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center">
        &copy; {new Date().getFullYear()} Serfix. All rights reserved. Proudly
        serving Your City.
      </p>
    </footer>
  );
}

export default Footer;
