import React from 'react';
import { motion } from 'motion/react';
import { Palette, Target, Zap, BarChart, ChevronRight } from 'lucide-react';

const portfolioItems = [
  {
    category: 'Creative Development',
    title: 'Visual Identity for AI-First Fintech',
    description: 'Developing a brand that balances human trust with technical precision.',
    icon: <Palette className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/design/800/600'
  },
  {
    category: 'Brand Strategy',
    title: 'Positioning for Global Logistics SaaS',
    description: 'Defining the "Operating System for Global Trade" narrative.',
    icon: <Target className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/strategy/800/600'
  },
  {
    category: 'AI Workflows',
    title: 'Automated Content Engine for Media Agency',
    description: 'Reducing content production costs by 70% while increasing volume.',
    icon: <Zap className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/workflow/800/600'
  },
  {
    category: 'AI Case Studies',
    title: 'Scaling Customer Success with Hybrid AI',
    description: 'How a team of 3 handled 50,000 support tickets with 98% satisfaction.',
    icon: <BarChart className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/data/800/600'
  }
];

export const WorkWeDo = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Work We Do</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
          A portfolio of expertise spanning brand, strategy, and high-performance AI implementations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <button className="btn-primary py-2 text-sm">View Case Study</button>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="label-caps text-brand-primary">{item.category}</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {item.description}
            </p>
            <button className="text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
              Learn More <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
