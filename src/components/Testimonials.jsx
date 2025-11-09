import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../data/testimonials';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="section-container bg-gray-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16"
      >
        <h2 className="section-title">Referanslar</h2>
        <p className="section-subtitle mx-auto">
          Birlikte çalıştığım kişilerin yorumları
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            className="glass-card hover:scale-105 transition-transform duration-300"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">
                  {testimonial.position} - {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

