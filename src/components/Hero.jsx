import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '/images/profile.jpg';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-primary-600 font-semibold mb-4"
            >
              Merhaba, Ben
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Hakan Çineli</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Modern ve kullanıcı dostu web uygulamaları geliştiren, 
              tutkulu bir frontend geliştirici. React, Next.js ve modern 
              web teknolojileri konusunda uzmanım.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a href="#projects" className="btn-primary">
                Projelerimi Gör
              </a>
              <a href="#contact" className="btn-secondary">
                İletişime Geç
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              {[
                { icon: FaGithub, url: 'https://github.com' },
                { icon: FaLinkedin, url: 'https://linkedin.com' },
                { icon: FaEnvelope, url: 'mailto:hakan@example.com' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300"
                >
                  <social.icon size={24} className="text-gray-700" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '1s' }}></div>
              
              {/* Main Image/Avatar */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-2">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Hakan Çineli - Web Developer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

