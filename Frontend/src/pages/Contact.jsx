import React, { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form=useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs
    .sendForm(
      "service_ixwmqt5", //service_id
      "template_2iaah3c",//tem_Id
      form.current,
      "-MTJEE6Jjw5sZMNmw" //public_key
    )
    .then(
      ()=>{
        alert("Message sent successfully !");
        form.current.reset();
      },
      (error)=>{
      alert("Failed to send message. Please try again.")
      console.log(error);
      }
    )
  }
 
  return (
    <section
      id="contac"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center justify-center px-6 py-20 overflow-hidden"
      data-aos="fade-in"
    >
      {/* Background blur circles */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left side: Contact info */}
        <div className="space-y-8">
          <h2 
            className="text-4xl font-bold leading-tight"
            data-aos="fade-down"
          >
            Get In Touch !
          </h2>
          <p 
            className="text-gray-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We’d love to hear from you. Whether you have a project idea, a
            partnership in mind, or just want to say hello — reach out and we’ll
            respond as soon as possible.
          </p>

          <div className="space-y-6">
            {/* Info cards */}
            <div 
              className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-md hover:bg-white/20 transition"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Mail className="w-8 h-8 text-yellow-400" />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-gray-300">nilu@smilelankatours.com</p>
              </div>
            </div>

            <div 
              className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-md hover:bg-white/20 transition"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Phone className="w-8 h-8 text-yellow-400" />
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-gray-300">+94 70 643 2832</p>
              </div>
            </div>

            <div 
              className="flex items-center space-x-4 bg-white/10 p-4 rounded-xl backdrop-blur-md hover:bg-white/20 transition"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <MapPin className="w-8 h-8 text-yellow-400" />
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                <p className="text-gray-300">
                  28, Kavida Place Colombo 6 Colombo, Colombo 00600 Sri Lanka
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Contact form */}
        <div 
          className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
            Send Us a Message
          </h3>

          {/* ✅ EmailJS Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;