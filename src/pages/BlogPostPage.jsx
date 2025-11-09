import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import { FaClock, FaCalendar, FaArrowLeft } from 'react-icons/fa';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog yazısı bulunamadı</h1>
          <Link to="/blog" className="btn-primary">
            Blog'a Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <article className="section-container max-w-4xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8"
        >
          <FaArrowLeft /> Blog'a Dön
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <FaCalendar /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <FaClock /> {post.readTime}
            </span>
            <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex items-center gap-4 mb-8 pb-8 border-b">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{post.author.name}</p>
              <p className="text-gray-600 text-sm">Web Developer</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line">{post.content}</div>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPostPage;

