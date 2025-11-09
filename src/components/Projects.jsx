import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects, categories } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="section-container bg-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-12"
      >
        <h2 className="section-title">Projelerim</h2>
        <p className="section-subtitle mx-auto">
          Geliştirdiğim bazı projeler ve çalışmalar
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 }}
            className="card group overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-lg mb-4 h-48">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <FaGithub size={20} className="text-gray-900" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <FaExternalLinkAlt size={20} className="text-gray-900" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Project Info */}
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

