import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  BookOpen, 
  ChevronRight, 
  ClipboardCheck, 
  Clock, 
  Cpu, 
  ExternalLink, 
  FileText, 
  Layers, 
  LayoutDashboard, 
  Mail, 
  Menu, 
  PlayCircle, 
  Plus, 
  Rocket, 
  ShieldCheck, 
  Users, 
  X,
  ArrowRight,
  Zap,
  CheckCircle2,
  AlertCircle,
  TrendingDown,
  TrendingUp,
  DollarSign,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { aiClient, DecisionInsight, RevenueLeakInsight } from './services/aiClient';
import { ThemeToggle } from './components/ThemeToggle';
import { DiagnosticTool } from './components/DiagnosticTool';
import { AgentLibrary } from './components/AgentLibrary';
import { WorkWeDo } from './components/WorkWeDo';
import { TeachPage, ToolPage, TrainingPage, ReportPage } from './components/Resources';
import { ContactForm } from './components/ContactForm';
import { systems } from './constants/systems';
import { SystemSalesPage } from './components/SystemSalesPage';
import { Dashboard } from './components/Dashboard';

// --- Types ---

type Page = 'home' | 'about' | 'teach' | 'tool' | 'training' | 'work' | 'contact' | 'diagnostic' | 'revenue-leak' | 'agent-library' | 'triage' | 'dashboard' | string;

// --- Components ---

const Navbar = ({ currentPage, setPage, user }: { currentPage: Page, setPage: (p: Page) => void, user: { name: string; email: string } | null }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string, id: Page }[] = [
    { label: 'Dashboard', id: 'dashboard' },
    { label: 'Teach', id: 'teach' },
    { label: 'Tools', id: 'tool' },
    { label: 'Agent Library', id: 'agent-library' },
    { label: 'Training', id: 'training' },
    { label: 'Work We Do', id: 'work' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-slate-900" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">AI Virtual Agency</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-nowrap">
            <div className="flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id)}
                  className={`text-[10px] xl:text-xs font-bold uppercase tracking-wider transition-all px-2 xl:px-3 py-2 rounded-lg whitespace-nowrap 
                    ${currentPage === item.id 
                      ? 'bg-brand-primary text-white dark:bg-white dark:text-slate-900 shadow-lg' 
                      : 'text-white dark:text-slate-900 bg-slate-800 dark:bg-green-700/50'
                    }
                    hover:bg-brand-primary hover:text-white dark:hover:bg-white dark:hover:text-slate-900
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 border-l border-white/10 dark:border-black/10 pl-4 xl:pl-6">
              <ThemeToggle />
              <button 
                onClick={() => setPage('diagnostic')}
                className="btn-header-cta flex items-center gap-2 whitespace-nowrap"
              >
                <Zap className="w-4 h-4" />
                Start Here
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setPage(item.id); setIsOpen(false); }}
                  className={`block w-full text-left px-3 py-4 text-base font-medium rounded-lg transition-colors ${
                    currentPage === item.id 
                      ? 'bg-brand-primary/10 text-brand-primary' 
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => { setPage('diagnostic'); setIsOpen(false); }}
                className="block w-full text-left px-3 py-4 text-base font-bold bg-brand-primary text-slate-900 hover:bg-green-500 rounded-lg shadow-lg shadow-brand-primary/20"
              >
                Run Diagnostic
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ setPage }: { setPage: (p: Page) => void }) => (
  <section className="relative py-20 lg:py-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
            AI Virtual Agency builds <span className="text-brand-primary">installable systems</span> your team can actually run.
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Less chaos, fewer bottlenecks, faster execution—using AI workflows + decision infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setPage('diagnostic')} className="btn-green gap-2 text-lg">
              Run a FREE Diagnosis <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => setPage('training')} className="btn-green text-lg">
              Apply for Installation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
    
    {/* Background Decoration */}
    <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />
  </section>
);

const Pillars = () => (
  <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Core Pillars</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We don't just talk about AI. We build the infrastructure that makes it dependable.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: 'Teach',
            icon: <BookOpen className="w-6 h-6" />,
            desc: 'Free guides, playbooks, diagnostics, and white papers to help you understand the landscape.',
            items: ['Permission Drag Calculator', 'AI Workflow Playbooks', 'Ops Diagnostics']
          },
          {
            title: 'Tools',
            icon: <Layers className="w-6 h-6" />,
            desc: 'Paid kits, templates, agent packs, and dashboards you can install into your business today.',
            items: ['Decision Infrastructure Kits', 'Agent Outcome Packs', 'Custom Dashboards']
          },
          {
            title: 'Training',
            icon: <Users className="w-6 h-6" />,
            desc: 'By-appointment installs and deep customization. We implement the systems with your team.',
            items: ['Workflow Audits', 'Custom AI Installs', 'Team Training']
          }
        ].map((pillar, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="card flex flex-col h-full group"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-800 border border-transparent dark:border-sky-400/20 flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
              <div className="text-brand-primary group-hover:text-white transition-colors">
                {pillar.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{pillar.desc}</p>
            <ul className="space-y-3">
              {pillar.items.map((item, j) => (
                <li key={j} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Outcomes = ({ setPage }: { setPage: (p: Page) => void }) => (
  <section className="py-24 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8 text-white">The Outcomes of a <span className="text-brand-primary">Compressed Workflow</span></h2>
          <div className="space-y-8">
            {[
              {
                title: 'Reduce Approval Drag',
                desc: 'Stop waiting for "the boss" to say yes. We build decision filters that empower your team to move safely.',
                icon: <TrendingDown className="w-6 h-6" />
              },
              {
                title: 'Cut Rework + Handoff Friction',
                desc: 'Standardize how information moves between roles using AI-assisted SOPs and validation layers.',
                icon: <Zap className="w-6 h-6" />
              },
              {
                title: 'Make AI Dependable',
                desc: 'Move beyond "chatting" with AI. We build systems that produce deterministic, high-quality outcomes every time.',
                icon: <ShieldCheck className="w-6 h-6" />
              }
            ].map((outcome, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                  {outcome.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{outcome.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{outcome.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-slate-800 border border-white/10 p-8 flex flex-col justify-center items-center text-center">
            <div className="w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center mb-8 shadow-lg shadow-brand-primary/20">
              <Rocket className="w-12 h-12 text-slate-900" />
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Scale?</h3>
            <p className="text-slate-400 mb-8 max-w-sm">Our V1 systems are designed for teams of 5-50 who are feeling the "permission drag" of growth.</p>
            <button onClick={() => setPage('diagnostic')} className="btn-primary w-full max-w-xs">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const RevenueLeakTool = ({ setPage }: { setPage: (p: Page) => void }) => {
  const [step, setStep] = useState<'intro' | 'quiz' | 'loading' | 'results'>('intro');
  const [insight, setInsight] = useState<RevenueLeakInsight | null>(null);

  const handleStart = () => setStep('quiz');
  
  const finishQuiz = () => {
    setStep('loading');
    aiClient.getRevenueLeakInsight({}).then(res => {
      setInsight(res);
      setStep('results');
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <AnimatePresence mode="wait">
        {step === 'intro' && (
          <motion.div 
            key="intro"
            className="card text-center py-16"
          >
            <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <TrendingDown className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Revenue Leak Snapshot</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto">
              Identify the structural constraints costing you thousands in lost productivity and missed opportunities.
            </p>
            <button onClick={handleStart} className="btn-primary bg-red-600 hover:bg-red-700 px-12 py-4 text-lg text-white">
              Check for Leaks
            </button>
          </motion.div>
        )}

        {step === 'quiz' && (
          <motion.div key="quiz" className="card">
            <h3 className="text-2xl font-bold mb-6">Quick Assessment</h3>
            <div className="space-y-6">
              {[
                "How many hours a week do you spend in meetings that could have been an email?",
                "Do you have a documented process for every core revenue-generating task?",
                "How often do you have to redo work because of miscommunication?",
                "Is your team clear on their specific KPIs for this month?",
                "Could your business run for 2 weeks if you went offline today?"
              ].map((q, i) => (
                <div key={i} className="space-y-2">
                  <p className="font-medium text-slate-700 dark:text-slate-300">{q}</p>
                  <div className="flex gap-2">
                    {['Never', 'Rarely', 'Sometimes', 'Often', 'Always'].map((opt) => (
                      <button key={opt} className="px-3 py-1 text-xs border border-slate-200 dark:border-slate-800 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">{opt}</button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={finishQuiz} className="btn-primary w-full mt-8">Generate Snapshot</button>
            </div>
          </motion.div>
        )}

        {step === 'loading' && (
          <div className="text-center py-20">
            <div className="w-16 h-16 border-4 border-red-100 dark:border-red-900/20 border-t-red-500 rounded-full animate-spin mx-auto mb-6"></div>
            <h3 className="text-xl font-bold">Calculating Revenue Impact...</h3>
          </div>
        )}

        {step === 'results' && insight && (
          <motion.div key="results" className="space-y-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card col-span-2">
                <span className="label-caps text-brand-primary">Dominant Constraint</span>
                <h3 className="text-3xl font-bold mb-4">{insight.constraint}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">This constraint is currently acting as a ceiling on your growth, regardless of how much you spend on marketing or sales.</p>
                <div className="p-4 bg-slate-200 dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-700">
                  <span className="label-caps text-slate-400 block mb-2">Recommended Structural Move</span>
                  <p className="font-bold text-slate-900 dark:text-slate-100">{insight.structuralMove}</p>
                </div>
              </div>
              <div className="card bg-slate-900 text-white flex flex-col justify-center">
                <div className="mb-6">
                  <span className="label-caps text-slate-500 block mb-1">Estimated Leak</span>
                  <span className="text-3xl font-bold text-red-400">{insight.impact.revenueImpact}</span>
                  <span className="block text-xs text-slate-500 mt-1">per month</span>
                </div>
                <div>
                  <span className="label-caps text-slate-500 block mb-1">Time Lost</span>
                  <span className="text-2xl font-bold text-white">{insight.impact.hoursLost}</span>
                </div>
              </div>
            </div>
            
            <div className="card text-center py-12">
              <h3 className="text-2xl font-bold mb-4">Ready to plug the leaks?</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">Our V1 Agent Packs are designed to solve these specific constraints in under 14 days.</p>
              <div className="flex justify-center gap-4">
                <button className="btn-primary" onClick={() => setPage('agent-library')}>View Agent Packs</button>
                <button onClick={() => setStep('intro')} className="btn-outline">Retake Assessment</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [diagnosticResult, setDiagnosticResult] = useState<DecisionInsight | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleLeadCapture = (userData: { name: string; email: string }, result: DecisionInsight) => {
    setUser(userData);
    setDiagnosticResult(result);
  };

  const handleLogout = () => {
    setUser(null);
    setDiagnosticResult(null);
    setPage('home');
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <>
            <Hero setPage={setPage} />
            <Pillars />
            <Outcomes setPage={setPage} />
          </>
        );
      case 'diagnostic':
        return <DiagnosticTool setPage={setPage} onLeadCapture={handleLeadCapture} />;
      case 'dashboard':
        return user ? (
          <Dashboard 
            user={user} 
            diagnosticResult={diagnosticResult || undefined} 
            onLogout={handleLogout} 
            setPage={setPage} 
          />
        ) : (
          <div className="max-w-7xl mx-auto px-4 py-32 text-center">
            <h2 className="text-4xl font-bold mb-4">Access Denied</h2>
            <p className="text-slate-600 mb-8">Please complete a diagnostic to access your dashboard.</p>
            <button onClick={() => setPage('diagnostic')} className="btn-primary">Run Diagnostic</button>
          </div>
        );
      case 'revenue-leak':
        return <RevenueLeakTool setPage={setPage} />;
      case 'agent-library':
        return <AgentLibrary setPage={setPage} />;
      case 'work':
        return <WorkWeDo />;
      case 'teach':
        return <TeachPage setPage={setPage} user={user} onLeadCapture={(u) => setUser(u)} />;
      case 'contact':
        return <ContactForm />;
      case 'tool':
        return <ToolPage setPage={setPage} />;
      case 'training':
        return <TrainingPage user={user} onLeadCapture={(u) => setUser(u)} />;
      case 'triage':
        return (
          <div className="max-w-4xl mx-auto px-4 py-32 text-center">
            <TrendingUp className="w-16 h-16 text-brand-primary mx-auto mb-8" />
            <h2 className="text-4xl font-bold mb-4">72-Hour Operations Triage</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12">
              The first step to plugging your margin leaks. We map your bottleneck and confirm system fit.
            </p>
            <div className="card max-w-md mx-auto p-8 text-left">
              <div className="text-3xl font-bold mb-6">$997 <span className="text-sm font-normal text-slate-500">flat fee</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  Full bottleneck mapping session
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  System fit confirmation
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  Implementation roadmap
                </li>
              </ul>
              <button className="btn-primary w-full py-4 text-lg">Buy Triage Now</button>
              <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-widest font-bold">Secure Stripe Checkout</p>
            </div>
          </div>
        );
      default:
        if (page.startsWith('system-')) {
          const systemId = page.replace('system-', '');
          const system = systems.find(s => s.id === systemId);
          if (system) {
            return <SystemSalesPage system={system} setPage={setPage} />;
          }
        }
        if (page.startsWith('report-')) {
          const reportId = page.replace('report-', '');
          return <ReportPage reportId={reportId} user={user} onLeadCapture={(u) => setUser(u)} />;
        }
        return (
          <div className="max-w-7xl mx-auto px-4 py-32 text-center">
            <h2 className="text-4xl font-bold mb-4 capitalize">{page.replace('-', ' ')}</h2>
            <p className="text-slate-600 mb-8">This section is currently being installed. Check back soon.</p>
            <button onClick={() => setPage('home')} className="btn-primary">Back to Home</button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={page} setPage={setPage} user={user} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-brand-secondary rounded flex items-center justify-center">
                <Cpu className="w-4 h-4 text-brand-primary" />
              </div>
              <span className="font-bold text-lg tracking-tight">AI Virtual Agency</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <button onClick={() => setPage('home')} className="hover:text-brand-primary">Home</button>
              <button onClick={() => setPage('teach')} className="hover:text-brand-primary">Teach</button>
              <button onClick={() => setPage('tool')} className="hover:text-brand-primary">Tools</button>
              <button onClick={() => setPage('training')} className="hover:text-brand-primary">Training</button>
            </div>
            <div className="text-sm text-slate-400">
              © 2026 AI Virtual Agency. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
