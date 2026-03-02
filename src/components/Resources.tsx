import React, { useState } from 'react';
import { Book, FileText, HelpCircle, Lightbulb, Shield, Zap, BarChart, CheckCircle2, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LeadForm } from './LeadForm';

export const TeachPage = ({ setPage, user, onLeadCapture }: { setPage: (p: any) => void, user?: any, onLeadCapture?: (u: any) => void }) => (
  <div className="max-w-7xl mx-auto px-4 py-20">
    <div className="mb-16">
      <h2 className="text-4xl font-bold mb-4">Teach: Knowledge Hub</h2>
      <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
        Free information and tools showcasing the skills and expertise being offered.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-12">
        <section>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Book className="w-6 h-6 text-brand-primary" /> Mini Glossary
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { term: 'Permission Drag', def: 'The cumulative slowdown caused by excessive approval requirements for low-risk decisions.' },
              { term: 'Compressed Workflow', def: 'An operational system where AI handles validation and routing, reducing handoff friction.' },
              { term: 'Agent Pack', def: 'A pre-configured set of AI instructions and tools designed to achieve a specific business outcome.' },
              { term: 'Decision Infrastructure', def: 'The rules and logic layers that allow a team to move safely without constant supervision.' }
            ].map((item, i) => (
              <div key={i} className="card p-4">
                <h4 className="font-bold text-brand-primary mb-2">{item.term}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.def}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-brand-primary" /> Reports & Insights
          </h3>
          <div className="space-y-4">
            {[
              { id: 'state-of-ai', title: 'The 2026 State of AI Operations', desc: 'A deep dive into how mid-sized firms are actually using AI to reclaim 10+ hours per week.' },
              { id: 'founder-bottleneck', title: 'Solving the Founder Bottleneck', desc: 'A structural guide to building decision filters that scale beyond the executive office.' },
              { id: 'fragility-audit', title: 'Process Fragility Audit', desc: 'How to identify the single points of failure in your current team workflows.' }
            ].map((report, i) => (
              <div key={i} className="card flex justify-between items-center group cursor-pointer" onClick={() => setPage(`report-${report.id}`)}>
                <div>
                  <h4 className="font-bold group-hover:text-brand-primary transition-colors">{report.title}</h4>
                  <p className="text-sm text-slate-500">{report.desc}</p>
                </div>
                <button className="btn-green py-2 px-4 text-xs">Read Report</button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="space-y-8">
        <div className="card">
          <h4 className="font-bold mb-4 flex items-center gap-2">
            <HelpCircle className="w-4 h-4" /> Common Pain Points
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-2">
              <Zap className="w-4 h-4 text-brand-primary shrink-0" />
              <span>"I spend all day answering questions my team should already know the answer to."</span>
            </li>
            <li className="flex gap-2">
              <Zap className="w-4 h-4 text-brand-primary shrink-0" />
              <span>"Projects stall for days waiting for my final approval on minor details."</span>
            </li>
            <li className="flex gap-2">
              <Zap className="w-4 h-4 text-brand-primary shrink-0" />
              <span>"We tried AI but it just felt like a fancy chatbot with no real business value."</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export const ReportPage = ({ reportId, user, onLeadCapture }: { reportId: string, user?: any, onLeadCapture?: (u: any) => void }) => {
  const [showLeadForm, setShowLeadForm] = useState(!user);

  const reports: Record<string, any> = {
    'state-of-ai': {
      title: 'The 2026 State of AI Operations',
      subtitle: 'Reclaiming 10+ hours per week with structural AI.',
      content: 'Mid-sized firms are moving beyond "chatting" with AI. The real winners are building deterministic workflows that handle validation, routing, and drafting without human intervention until the final 10%. This report analyzes data from 50+ installations to show where the biggest time gains are hidden.'
    },
    'founder-bottleneck': {
      title: 'Solving the Founder Bottleneck',
      subtitle: 'How to scale decision-making beyond the executive office.',
      content: 'The founder is often the biggest bottleneck in a growing agency. By installing "Decision Infrastructure"—a set of rules and AI-assisted filters—teams can move safely without constant supervision. This guide provides the blueprint for classifying decisions and installing boundaries that stick.'
    },
    'fragility-audit': {
      title: 'Process Fragility Audit',
      subtitle: 'Identifying single points of failure in your team workflows.',
      content: 'Most agency processes are fragile because they rely on specific individuals to hold the context. When that person is busy, the process breaks. We show you how to audit your workflows for fragility and replace tribal knowledge with installable AI systems.'
    }
  };

  const report = reports[reportId];

  if (!report) return <div className="py-32 text-center">Report not found</div>;

  if (showLeadForm) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <Lock className="w-12 h-12 text-brand-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2">Unlock This Report</h2>
          <p className="text-slate-600 dark:text-slate-400">Please provide your details to access our deep-dive insights.</p>
        </div>
        <LeadForm onSuccess={(u) => {
          if (onLeadCapture) onLeadCapture(u);
          setShowLeadForm(false);
        }} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-12">
        <span className="label-caps text-brand-primary mb-4 block">Special Report</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{report.title}</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 italic">{report.subtitle}</p>
      </div>

      <div className="card p-10 prose dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed mb-8">{report.content}</p>
        <div className="h-px bg-slate-200 dark:bg-slate-800 my-10" />
        <h3 className="text-2xl font-bold mb-4">Key Takeaways</h3>
        <ul className="space-y-4">
          <li className="flex gap-3">
            <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0" />
            <span>Identify the "Permission Drag" costing your team hours every day.</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0" />
            <span>Install boundaries that empower your team to act without asking.</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0" />
            <span>Replace manual handoffs with AI-assisted validation layers.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const ToolPage = ({ setPage }: { setPage: (p: any) => void }) => (
  <div className="max-w-7xl mx-auto px-4 py-20">
    <div className="mb-16">
      <h2 className="text-4xl font-bold mb-4">Tools: Evaluation Suite</h2>
      <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
        Free tools to evaluate your current operations and identify high-leverage AI opportunities.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="card group cursor-pointer" onClick={() => setPage('diagnostic')}>
        <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
          <Shield className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-primary transition-colors">Permission Drag Calculator</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">Quantify the cost of your current approval processes and see how much time you can reclaim.</p>
        <button className="btn-green py-2 text-sm">Run Evaluation</button>
      </div>

      <div className="card group cursor-pointer" onClick={() => setPage('revenue-leak')}>
        <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
          <BarChart className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors">Revenue Leak Snapshot</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6">Identify the structural constraints costing you thousands in lost productivity every month.</p>
        <button className="btn-green py-2 text-sm">Start Snapshot</button>
      </div>
    </div>
  </div>
);

export const TrainingPage = ({ user, onLeadCapture }: { user?: any, onLeadCapture?: (u: any) => void }) => {
  const [toast, setToast] = React.useState<string | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [pendingDownload, setPendingDownload] = useState<{ file: string, title: string } | null>(null);

  const handleDownload = (filename: string, title: string) => {
    if (!user) {
      setPendingDownload({ file: filename, title });
      setShowLeadForm(true);
      return;
    }
    
    setToast(`Opening ${title}...`);
    console.log('download_manual', { manual: filename });
    
    // Auto-hide toast
    setTimeout(() => setToast(null), 3000);
    
    // Open PDF
    window.open(`/manuals/${filename}`, '_blank', 'noopener,noreferrer');
  };

  const handleLeadSuccess = (u: any) => {
    if (onLeadCapture) onLeadCapture(u);
    setShowLeadForm(false);
    if (pendingDownload) {
      handleDownload(pendingDownload.file, pendingDownload.title);
      setPendingDownload(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <AnimatePresence>
        {showLeadForm && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-md">
              <button 
                onClick={() => setShowLeadForm(false)}
                className="absolute -top-12 right-0 text-white hover:text-brand-primary transition-colors"
              >
                Close
              </button>
              <LeadForm 
                onSuccess={handleLeadSuccess}
                title="Unlock Downloads"
                description="Enter your email to download our implementation guides and SOPs."
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-4">Training: How-To Manuals</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
          Educational resources on the agency’s work, specialty, and how we implement high-performance systems.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            title: 'The Decision Filter Manual', 
            type: 'IMPLEMENTATION GUIDE', 
            icon: <Shield />, 
            file: 'decision-filter-manual.pdf' 
          },
          { 
            title: 'Agent Installation SOP', 
            type: 'TECHNICAL MANUAL', 
            icon: <Zap />, 
            file: 'agent-installation-sop.pdf' 
          },
          { 
            title: 'Workflow Governance', 
            type: 'POLICY TEMPLATE', 
            icon: <FileText />, 
            file: 'workflow-governance-policy-template.pdf' 
          }
        ].map((item, i) => (
          <div key={i} className="card flex flex-col">
            <div className="w-10 h-10 rounded-lg bg-slate-300 dark:bg-slate-800 flex items-center justify-center mb-6 text-brand-primary">
              {item.icon}
            </div>
            <span className="label-caps text-brand-primary mb-2 block">{item.type}</span>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed flex-grow">
              Step-by-step instructions on how we build and deploy this specific infrastructure layer.
            </p>
            <button 
              onClick={() => handleDownload(item.file, item.title)}
              className="btn-green w-full py-2 text-sm flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Download PDF
            </button>
          </div>
        ))}
      </div>

      {/* Simple Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 glass-panel px-6 py-3 rounded-full shadow-xl border border-brand-primary/20 z-50 flex items-center gap-3"
          >
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium">{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
