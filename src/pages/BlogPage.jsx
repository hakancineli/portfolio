import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import { FaClock, FaCalendar } from 'react-icons/fa';

const BlogPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Blog</h1>
          <p className="section-subtitle mx-auto">
            Web geliştirme, teknoloji ve deneyimlerim hakkında yazılar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <FaCalendar /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock /> {post.readTime}
                </span>
              </div>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-3">
                {post.category}
              </span>
              <h2 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
              >
                Devamını Oku →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

