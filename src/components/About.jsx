import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Image */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
              alt="Workspace"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-6 text-white shadow-xl">
              <p className="text-4xl font-bold">5+</p>
              <p className="text-sm">Yıl Deneyim</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <h2 className="section-title">Hakkımda</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Merhaba! Ben Hakan Çineli, tutkulu bir web geliştiricisiyim ve modern, 
            kullanıcı dostu web uygulamaları geliştirmekten büyük keyif alıyorum.
          </p>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            5 yılı aşkın tecrübem ile React, Next.js, Node.js ve diğer modern web 
            teknolojileri kullanarak MrForty Travel ve Psikolog Meltem Tugay gibi 
            başarılı projeler geliştirdim. Her projede kod kalitesi, performans ve 
            kullanıcı deneyimini ön planda tutuyorum.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Sürekli öğrenmeye ve gelişmeye açık biriyim. Yeni teknolojileri takip 
            ediyor ve projelerimde uygulamaya çalışıyorum. Ekip çalışmasına yatkın 
            ve problem çözme odaklı bir yaklaşımım var.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/cv.pdf"
              download
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaDownload /> CV İndir
            </a>
            <a href="#contact" className="btn-secondary">
              Benimle İletişime Geç
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

