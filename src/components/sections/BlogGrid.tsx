'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, Search } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Seasonal Concrete Maintenance: Spring Cleaning Guide',
    excerpt: 'Learn the essential steps to prepare your concrete surfaces for spring and ensure they look their best throughout the season.',
    author: 'Sarah Martinez',
    date: '2024-02-15',
    readTime: '5 min read',
    category: 'Maintenance Tips',
    tags: ['seasonal', 'cleaning', 'maintenance'],
    image: '/images/blog/spring-maintenance.svg',
    featured: true,
  },
  {
    id: '2',
    title: '2024 Stamped Concrete Design Trends',
    excerpt: 'Discover the latest patterns and techniques shaping modern stamped concrete design this year.',
    author: 'Mike Johnson',
    date: '2024-02-10',
    readTime: '7 min read',
    category: 'Design Trends',
    tags: ['trends', 'stamped', 'design'],
    image: '/images/blog/design-trends.svg',
  },
  {
    id: '3',
    title: 'Understanding Concrete Curing: The Science Behind Strength',
    excerpt: 'A deep dive into the curing process and why proper curing is crucial for concrete durability.',
    author: 'Dr. Lisa Chen',
    date: '2024-02-05',
    readTime: '10 min read',
    category: 'Technical Guides',
    tags: ['curing', 'science', 'durability'],
    image: '/images/blog/curing-science.svg',
  },
  {
    id: '4',
    title: 'Luxury Pool Deck Transformation: Before & After',
    excerpt: 'See how we transformed an ordinary backyard into a stunning outdoor oasis with premium concrete work.',
    author: 'John Anderson',
    date: '2024-01-30',
    readTime: '6 min read',
    category: 'Project Spotlights',
    tags: ['pool-deck', 'transformation', 'luxury'],
    image: '/images/blog/pool-transformation.svg',
  },
  {
    id: '5',
    title: 'Common Concrete Cracks: Causes and Solutions',
    excerpt: 'Identify different types of concrete cracks and learn when professional repair is necessary.',
    author: 'Mike Johnson',
    date: '2024-01-25',
    readTime: '8 min read',
    category: 'Technical Guides',
    tags: ['cracks', 'repair', 'diagnosis'],
    image: '/images/blog/concrete-cracks.svg',
  },
  {
    id: '6',
    title: 'Eco-Friendly Concrete: Sustainable Options for 2024',
    excerpt: 'Explore environmentally conscious concrete choices that don\'t compromise on quality or aesthetics.',
    author: 'Sarah Martinez',
    date: '2024-01-20',
    readTime: '6 min read',
    category: 'Design Trends',
    tags: ['sustainable', 'eco-friendly', 'green'],
    image: '/images/blog/eco-concrete.svg',
  },
];

const categories = ['All', 'Maintenance Tips', 'Design Trends', 'Technical Guides', 'Project Spotlights'];

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && !searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <Card className="overflow-hidden shadow-xl">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-safety-orange">
                    Featured
                  </Badge>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </span>
                  </div>
                  <h2 className="text-2xl font-heading text-charcoal mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map(tag => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                  <Button className="bg-safety-orange hover:bg-safety-orange/90">
                    Read Full Article
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-safety-orange text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-charcoal line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">By {post.author}</span>
                    <Button variant="ghost" size="sm" className="text-safety-orange hover:text-safety-orange/90">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No articles found matching your search.</p>
            <Button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-safety-orange rounded-lg p-8 text-center text-white"
        >
          <h3 className="text-2xl font-heading mb-4">Stay Updated</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Get the latest concrete care tips, design trends, and project insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-white text-charcoal"
            />
            <Button variant="secondary" className="bg-white text-safety-orange hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}