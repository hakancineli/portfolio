import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'hakan@example.com',
      link: 'mailto:hakan@example.com',
    },
    {
      icon: FaPhone,
      title: 'Telefon',
      value: '+90 543 269 5442',
      link: 'tel:+905432695442',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Konum',
      value: 'İstanbul, Türkiye',
      link: '#',
    },
  ];

  const socialMedia = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaEnvelope, url: 'mailto:hakan@example.com', label: 'Email' },
  ];

  return (
    <div className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <h2 className="section-title">İletişim</h2>
        <p className="section-subtitle mx-auto">
          Benimle iletişime geçin, projeleriniz hakkında konuşalım
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">
            İletişim Bilgileri
          </h3>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Yeni projeler, iş fırsatları veya herhangi bir konuda benimle 
            iletişime geçebilirsiniz. Mesajlarınızı en kısa sürede yanıtlıyorum.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all group hover:shadow-lg"
              >
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-4 rounded-lg text-white group-hover:scale-110 transition-transform">
                  <info.icon size={28} />
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 font-medium mb-1">{info.title}</p>
                  <p className="text-gray-900 font-semibold">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h4 className="text-xl font-semibold mb-4 text-gray-900">
              Sosyal Medya
            </h4>
            <p className="text-gray-600 mb-6">
              Sosyal medya hesaplarımdan da bana ulaşabilirsiniz.
            </p>
            <div className="flex justify-center gap-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 group"
                >
                  <social.icon size={28} className="text-gray-700 group-hover:text-primary-600 transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
