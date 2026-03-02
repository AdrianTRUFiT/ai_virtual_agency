import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Plus, Zap, CheckCircle2 } from 'lucide-react';
import { systems } from '../constants/systems';

interface AgentLibraryProps {
  setPage: (page: string) => void;
}

export const AgentLibrary = ({ setPage }: AgentLibraryProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The Operator’s Kit</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Ten production-ready operational systems. Each one targets a specific margin leak, handoff failure, or execution bottleneck inside your agency.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {systems.map((system, index) => (
          <motion.div
            key={system.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="card group hover:border-brand-primary/50 transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  System {system.number}
                </span>
                <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-slate-900 transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-primary transition-colors">
                {system.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 italic">
                {system.problemLine}
              </p>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold mb-8">
                <CheckCircle2 className="w-3 h-3" />
                Target Outcome: {system.targetOutcome}
              </div>
            </div>

            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
              <button 
                onClick={() => setPage(`system-${system.id}`)}
                className="btn-primary w-full py-3 text-xs flex items-center justify-center gap-2"
              >
                Learn More
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 card bg-slate-900 text-white text-center py-16">
        <h3 className="text-3xl font-bold mb-4">Not sure where to start?</h3>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Run the Permission Drag Calculator to identify your biggest bottleneck before installing a system.
        </p>
        <button 
          onClick={() => setPage('diagnostic')}
          className="btn-primary px-10 py-4"
        >
          Run Diagnostic
        </button>
      </div>
    </div>
  );
};
