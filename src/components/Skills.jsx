import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../data/skills';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="section-container bg-gray-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Yetenekler</h2>
        <p className="section-subtitle mx-auto">
          Kullandığım teknolojiler ve araçlar
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: categoryIndex * 0.2 }}
            className="glass-card"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <skill.icon size={24} style={{ color: skill.color }} />
                      <span className="font-semibold text-gray-700">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: categoryIndex * 0.2 + 0.5 }}
                      className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

