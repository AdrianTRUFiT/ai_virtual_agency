import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ClipboardCheck, ShieldCheck, Mail, ChevronRight, AlertCircle, CheckCircle2, Zap, TrendingUp } from 'lucide-react';
import { aiClient, DecisionInsight } from '../services/aiClient';
import { LeadForm } from './LeadForm';

export const DiagnosticTool = ({ setPage, onLeadCapture }: { setPage: (p: any) => void, onLeadCapture?: (user: { name: string; email: string }, result: DecisionInsight) => void }) => {
  const [step, setStep] = useState<'intro' | 'quiz' | 'loading' | 'lead' | 'results'>('intro');
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [insight, setInsight] = useState<DecisionInsight | null>(null);

  const questions = [
    {
      id: 0,
      text: "How many decisions require founder/executive approval daily?",
      options: ["0-2 (Autonomous)", "3-5 (Moderate)", "6-10 (Heavy)", "10+ (Bottleneck)"]
    },
    {
      id: 1,
      text: "What percentage of decisions are repetitive (same logic every time)?",
      options: ["< 10%", "10-30%", "30-60%", "60%+ (High Automation Potential)"]
    },
    {
      id: 2,
      text: "How often does a project stall because someone is 'waiting for feedback'?",
      options: ["Rarely", "Once a week", "Daily", "Multiple times a day"]
    },
    {
      id: 3,
      text: "Do you have clear written rules for spending under $500?",
      options: ["Yes, fully documented", "Informal understanding", "Vague/Unclear", "No rules"]
    },
    {
      id: 4,
      text: "How much time does leadership spend in 'status update' meetings?",
      options: ["< 2 hours/week", "2-5 hours/week", "5-10 hours/week", "10+ hours/week"]
    }
  ];

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleStart = () => setStep('quiz');

  const handleNext = () => {
    if (selectedOption === null) return;
    
    const qIndex = Object.keys(answers).length;
    // Map option index to a 1-5 score for the mock logic
    const scoreValue = selectedOption + 2; 
    const newAnswers = { ...answers, [qIndex]: scoreValue };
    setAnswers(newAnswers);
    setSelectedOption(null);
    
    if (Object.keys(newAnswers).length === questions.length) {
      setStep('loading');
      aiClient.getDecisionInsight(newAnswers).then(res => {
        setInsight(res);
        setStep('lead');
      });
    }
  };

  const handleLeadSuccess = (user: { name: string; email: string }) => {
    if (insight && onLeadCapture) {
      onLeadCapture(user, insight);
    }
    setStep('results');
  };

  const currentQuestionIndex = Object.keys(answers).length;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <AnimatePresence mode="wait">
        {step === 'intro' && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="card text-center py-16"
          >
            <div className="w-16 h-16 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
              <ClipboardCheck className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">The Permission Drag Calculator</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto">
              Find out exactly how much time and momentum your team is losing to approval bottlenecks and decision friction.
            </p>
            <button onClick={handleStart} className="btn-primary px-12 py-4 text-lg">
              Start Diagnostic
            </button>
          </motion.div>
        )}

        {step === 'quiz' && currentQuestion && (
          <motion.div 
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Decision Infrastructure Quiz</h2>
              <span className="text-sm font-medium text-slate-400">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
            </div>
            
            <div className="card">
              <p className="text-xl font-medium mb-8">{currentQuestion.text}</p>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all font-medium ${
                      selectedOption === idx 
                        ? 'border-brand-primary bg-brand-primary/10 text-brand-primary ring-2 ring-brand-primary/20' 
                        : 'border-slate-200 dark:border-slate-800 hover:border-brand-primary/50 hover:bg-brand-primary/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{opt}</span>
                      {selectedOption === idx && <CheckCircle2 className="w-5 h-5" />}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={handleNext}
                  disabled={selectedOption === null}
                  className="btn-primary px-10 flex items-center gap-2"
                >
                  {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {step === 'loading' && (
          <motion.div 
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin mx-auto mb-8"></div>
            <h2 className="text-2xl font-bold mb-2">Analyzing Decision Patterns...</h2>
            <p className="text-slate-500 animate-pulse-subtle">Our AI is classifying your bottlenecks and calculating reclaimed time.</p>
          </motion.div>
        )}

        {step === 'lead' && (
          <motion.div
            key="lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <LeadForm onSuccess={handleLeadSuccess} />
          </motion.div>
        )}

        {step === 'results' && insight && (
          <motion.div 
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-grow space-y-8">
                <div className={`card border-l-4 ${
                  insight.classification === 'Red' ? 'border-l-red-500' : 
                  insight.classification === 'Yellow' ? 'border-l-yellow-500' : 'border-l-emerald-500'
                }`}>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="label-caps">Permission Drag Score</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold mt-1">{insight.score}</span>
                        <span className="text-slate-400">/ 100</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      insight.classification === 'Red' ? 'bg-red-50 text-red-600' : 
                      insight.classification === 'Yellow' ? 'bg-yellow-50 text-yellow-600' : 'bg-emerald-50 text-emerald-600'
                    }`}>
                      {insight.classification} Alert
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-slate-300 dark:bg-slate-800 rounded-xl">
                      <span className="label-caps block mb-1">Time Reclaimed</span>
                      <span className="text-2xl font-bold text-brand-primary">{insight.timeReclaimed}</span>
                    </div>
                    <div className="p-4 bg-slate-300 dark:bg-slate-800 rounded-xl">
                      <span className="label-caps block mb-1">Friction Level</span>
                      <span className="text-2xl font-bold">{insight.classification}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <span className="label-caps block mb-3">Key Areas of Friction</span>
                      <div className="space-y-2">
                        {insight.frictionAreas.map((area, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <AlertCircle className="w-4 h-4 text-red-400" />
                            {area}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <span className="label-caps block mb-2">Pattern Insight</span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{insight.insight.frictionPatterns}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-96 space-y-6">
                <div className="card bg-brand-secondary text-white border-none">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-brand-primary" />
                    <h3 className="text-xl font-bold">72-Hour Operations Triage</h3>
                  </div>
                  <p className="text-slate-400 text-sm mb-6">
                    The first step to plugging your margin leaks. We map your bottleneck and confirm system fit.
                  </p>
                  
                  <div className="text-3xl font-bold mb-6">$997 <span className="text-sm font-normal text-slate-500">flat fee</span></div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                      Full bottleneck mapping session
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                      System fit confirmation
                    </li>
                    <li className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                      Implementation roadmap
                    </li>
                  </ul>
                  
                  <button 
                    onClick={() => setPage('triage')}
                    className="w-full py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-green-500 transition-colors"
                  >
                    Buy Triage Now
                  </button>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <button onClick={() => setStep('intro')} className="text-slate-400 text-sm hover:text-slate-600 underline">
                Restart Diagnostic
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
