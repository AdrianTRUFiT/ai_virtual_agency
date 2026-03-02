import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, User, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

interface LeadFormProps {
  onSuccess: (data: { name: string; email: string }) => void;
  title?: string;
  description?: string;
  ctaText?: string;
}

export const LeadForm: React.FC<LeadFormProps> = ({ 
  onSuccess, 
  title = "Get Your Full Report", 
  description = "Enter your details to unlock your personalized diagnostic results and implementation guide.",
  ctaText = "Unlock Results"
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus('loading');
    
    // Placeholder for ConvertKit/Beehiiv integration
    // In a real app, you'd call your API here
    console.log("Integrating with Email Platform...", { name, email });
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    setTimeout(() => {
      onSuccess({ name, email });
    }, 1000);
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Success!</h3>
        <p className="text-slate-600 dark:text-slate-400">Preparing your results...</p>
      </motion.div>
    );
  }

  return (
    <div className="card max-w-md mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="input-field pl-11"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              className="input-field pl-11"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary w-full py-4 mt-4 flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
      
      <p className="text-[10px] text-center text-slate-400 mt-6 uppercase tracking-widest font-bold">
        We respect your privacy. No spam, ever.
      </p>
    </div>
  );
};
