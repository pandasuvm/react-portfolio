import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [loading, setLoading] = useState(true); // Initial loading state
  const form = useRef();

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    const timer2 = setTimeout(() => {
      setLoading(false); // Stop loading after content is ready
    }, 2000); // Adjust timing based on how long you want the loader to appear

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_afu1r53', 'template_4smyiub', form.current, 'aAI_fZh45VoM-it7Y')
      .then(
        () => {
          alert('Message successfully sent!');
          setLoading(false);
          form.current.reset(); // Clear form after successful submission
        },
        () => {
          alert('Failed to send the message, please try again');
          setLoading(false);
        }
      );
  };

  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
          <Loader type="pacman" />
        </div>
      ) : (
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p className="contact-info">
  I am interested in freelance opportunities - especially on ambitious
  or large projects. However, if you have any other requests or
  questions, don't hesitate to contact me using the form below.
</p>

            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input placeholder="Name" type="text" name="name" required />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="info-map">
            Shubham Panda,
            <br />
            India,
            <br />
            MIT Manipal <br />
            Karnataka <br />
            <br />
            <span>suvm.personal@gmail.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[13.352850385489303, 74.79276847743158]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[13.352850385489303, 74.79276847743158]}>
                <Popup>Shubham studies here, come to meet me :)</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
