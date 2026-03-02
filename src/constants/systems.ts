export interface SystemProduct {
  id: string;
  number: string;
  name: string;
  problemLine: string;
  targetOutcome: string;
  painSentence: string;
  problemHeadline: string;
  problemBody: string;
  steps: { title: string; desc: string }[];
  deliverables: string[];
  outcomes: { metric: string; desc: string }[];
  rightForYou: string[];
}

export const systems: SystemProduct[] = [
  {
    id: 'automated-customer-onboarding',
    number: '01',
    name: 'Automated Customer Onboarding',
    problemLine: 'Eliminate manual welcome sequences and account setup delays.',
    targetOutcome: 'Reduce onboarding time by 85%',
    painSentence: 'Stop losing momentum the moment a client says yes.',
    problemHeadline: 'The "Post-Signature" Slump',
    problemBody: 'Manual onboarding creates a massive execution gap between payment and delivery. When welcome emails, account setups, and task assignments depend on human initiation, clients wait, and your team starts every project behind schedule.',
    steps: [
      { title: 'Trigger', desc: 'New client payment or contract signature detected automatically.' },
      { title: 'Welcome', desc: 'Welcome sequence fires automatically with personalized onboarding assets.' },
      { title: 'Setup', desc: 'Account setup tasks assigned and tracked without human initiation.' },
      { title: 'Confirmation', desc: 'First value delivery confirmed and logged before day 3.' }
    ],
    deliverables: [
      'Onboarding trigger configuration inside your existing stack',
      'Automated welcome sequence with personalization logic',
      'Account setup task loop with completion tracking',
      'First-value delivery checkpoint',
      'Team handoff documentation',
      '30-day performance report showing time saved per client'
    ],
    outcomes: [
      { metric: '85% reduction', desc: 'in onboarding time' },
      { metric: 'Zero manual tasks', desc: 'for your team during welcome' },
      { metric: '72-hour window', desc: 'Client receives first value within 3 days' }
    ],
    rightForYou: [
      'You are personally sending welcome emails or setting up client accounts',
      'Your onboarding process is inconsistent across clients',
      'New clients wait more than 48 hours to receive their first deliverable',
      'Your team has no repeatable onboarding checklist that runs without you'
    ]
  },
  {
    id: 'decision-routing-engine',
    number: '02',
    name: 'Decision Routing Engine',
    problemLine: 'Stop executive bottlenecks from killing your delivery speed.',
    targetOutcome: 'Cut approval drag by 60%',
    painSentence: 'Your team is ready to move, but they are waiting for you to say "go".',
    problemHeadline: 'The Founder Bottleneck',
    problemBody: 'When every minor decision requires executive sign-off, your delivery speed is capped by your own bandwidth. This creates "permission drag" where projects stall for days waiting for a 30-second approval.',
    steps: [
      { title: 'Classify', desc: 'Incoming requests are automatically categorized by risk and budget.' },
      { title: 'Filter', desc: 'Low-risk decisions are routed to team members with pre-approved boundaries.' },
      { title: 'Escalate', desc: 'Only high-impact strategic decisions reach the executive inbox.' },
      { title: 'Log', desc: 'Every decision is logged for weekly review and boundary adjustment.' }
    ],
    deliverables: [
      'Custom Decision Matrix for your specific agency model',
      'Automated routing logic for Slack or Project Management tools',
      'Pre-approved boundary templates for team leads',
      'Executive "High-Signal" dashboard',
      'Weekly decision audit system',
      'Training for team on autonomous decision making'
    ],
    outcomes: [
      { metric: '60% reduction', desc: 'in approval wait times' },
      { metric: '10+ hours reclaimed', desc: 'per week for the owner' },
      { metric: '100% visibility', desc: 'into every decision made by the team' }
    ],
    rightForYou: [
      'You spend more than 2 hours a day answering "can I do this?" questions',
      'Projects frequently stall while waiting for your feedback',
      'Your team is capable but hesitant to act without your explicit okay',
      'You feel like the primary bottleneck in your own business'
    ]
  },
  {
    id: 'content-workflow-pack',
    number: '03',
    name: 'Content Workflow Pack',
    problemLine: 'Research, draft, and format brand content across channels automatically.',
    targetOutcome: '10x content output with zero additional headcount',
    painSentence: 'Content creation is a black hole for your team\'s time.',
    problemHeadline: 'The Content Production Trap',
    problemBody: 'Manual content creation is slow, expensive, and difficult to scale. Most agencies struggle to maintain quality while increasing volume, leading to inconsistent brand presence and exhausted creative teams.',
    steps: [
      { title: 'Research', desc: 'AI agents scan your niche and data for high-signal content ideas.' },
      { title: 'Draft', desc: 'First drafts are generated using your unique brand voice and data.' },
      { title: 'Format', desc: 'Content is automatically reformatted for LinkedIn, Twitter, and Email.' },
      { title: 'Review', desc: 'Human-in-the-loop checkpoint for final brand alignment.' }
    ],
    deliverables: [
      'Brand Voice DNA profile for AI consistency',
      'Automated research agents for your specific niche',
      'Multi-channel formatting engine',
      'Content calendar automation',
      'Quality assurance validation layer',
      'Performance tracking dashboard'
    ],
    outcomes: [
      { metric: '10x output', desc: 'increase in content volume' },
      { metric: '70% cost reduction', desc: 'per content asset produced' },
      { metric: 'Zero manual formatting', desc: 'between different social channels' }
    ],
    rightForYou: [
      'You struggle to post consistently across all your channels',
      'Your creative team spends hours on "grunt work" like reformatting',
      'You have plenty of ideas but no time to execute them',
      'Content creation feels like a chore rather than a growth lever'
    ]
  },
  {
    id: 'insight-extraction-agent',
    number: '04',
    name: 'Insight Extraction Agent',
    problemLine: 'Surface revenue leaks and growth patterns from your existing data.',
    targetOutcome: 'Real-time visibility into business health',
    painSentence: 'You have the data, but you don\'t have the answers.',
    problemHeadline: 'The Data Blindspot',
    problemBody: 'Most agencies are sitting on a goldmine of data in their CRM and PM tools but have no way to extract actionable insights. This leads to missed revenue opportunities and invisible margin leaks.',
    steps: [
      { title: 'Connect', desc: 'Securely link your CRM, PM, and Financial data sources.' },
      { title: 'Scan', desc: 'AI agents continuously look for anomalies and patterns.' },
      { title: 'Extract', desc: 'Raw data is converted into specific business insights.' },
      { title: 'Alert', desc: 'Critical findings are pushed to your leadership channel.' }
    ],
    deliverables: [
      'Multi-source data connector setup',
      'Custom "Margin Leak" detection agents',
      'Revenue pattern recognition engine',
      'Weekly automated executive summaries',
      'Real-time health alert system',
      'Data visualization dashboard'
    ],
    outcomes: [
      { metric: 'Real-time visibility', desc: 'into every margin leak' },
      { metric: '48-hour detection', desc: 'of negative project trends' },
      { metric: 'Data-backed decisions', desc: 'replacing "gut feel" management' }
    ],
    rightForYou: [
      'You only know your true margins at the end of the month',
      'You feel like you\'re missing obvious growth opportunities',
      'Your data is scattered across 5 different tools',
      'Reporting takes your team hours of manual spreadsheet work'
    ]
  },
  {
    id: 'dynamic-sop-generator',
    number: '05',
    name: 'Dynamic SOP Generator',
    problemLine: 'Turn screen recordings and transcripts into validated operating procedures.',
    targetOutcome: 'Institutional knowledge captured in real-time',
    painSentence: 'Your best processes are stuck in people\'s heads.',
    problemHeadline: 'The Knowledge Gap',
    problemBody: 'Documentation is the first thing to break during growth. When SOPs are manual, they are never updated, leading to inconsistent work quality and massive friction when onboarding new staff.',
    steps: [
      { title: 'Capture', desc: 'Record a quick Loom or transcript of a task being done.' },
      { title: 'Analyze', desc: 'AI extracts the logical steps, tools, and requirements.' },
      { title: 'Structure', desc: 'A formatted, step-by-step SOP is generated automatically.' },
      { title: 'Validate', desc: 'The SOP is cross-referenced against your brand standards.' }
    ],
    deliverables: [
      'SOP capture workflow for your team',
      'Automated documentation engine',
      'Centralized "Knowledge Base" structure',
      'SOP version control system',
      'Training for team on "Capture-as-you-work"',
      'Process health dashboard'
    ],
    outcomes: [
      { metric: '100% capture', desc: 'of core business processes' },
      { metric: 'Zero manual writing', desc: 'for your operations team' },
      { metric: 'Instant onboarding', desc: 'for new role replacements' }
    ],
    rightForYou: [
      'You are terrified of your "key person" leaving',
      'Your current SOPs are out of date and ignored',
      'Onboarding a new hire takes weeks of your time',
      'Work quality varies wildly between different team members'
    ]
  },
  {
    id: 'market-intel-pack',
    number: '06',
    name: 'Market Intelligence Pack',
    problemLine: 'Monitor competitors, trends, and sentiment without manual searching.',
    targetOutcome: 'Strategic advantage through information speed',
    painSentence: 'The market is moving faster than your team can research.',
    problemHeadline: 'The Information Lag',
    problemBody: 'Staying ahead of the market requires constant monitoring of competitors and trends. Most agencies do this manually or not at all, leaving them reactive rather than proactive in their strategy.',
    steps: [
      { title: 'Source', desc: 'Identify key competitors, industry news, and social signals.' },
      { title: 'Monitor', desc: 'AI agents track changes and new developments 24/7.' },
      { title: 'Synthesize', desc: 'Raw news is converted into strategic impact reports.' },
      { title: 'Brief', desc: 'Weekly intelligence briefing delivered to your inbox.' }
    ],
    deliverables: [
      'Competitor tracking engine',
      'Industry trend monitoring agents',
      'Sentiment analysis for your niche',
      'Automated weekly strategy brief',
      'Opportunity detection alerts',
      'Market landscape dashboard'
    ],
    outcomes: [
      { metric: '24/7 monitoring', desc: 'of your entire market landscape' },
      { metric: 'Zero manual research', desc: 'hours for your strategy team' },
      { metric: 'First-mover advantage', desc: 'on emerging industry trends' }
    ],
    rightForYou: [
      'You find out about competitor moves weeks after they happen',
      'You feel like you\'re constantly playing catch-up with trends',
      'Your strategy is based on old information',
      'Research is a "when we have time" task that never happens'
    ]
  },
  {
    id: 'lead-triage-routing-loop',
    number: '07',
    name: 'Lead Triage & Routing Loop',
    problemLine: 'Classify and route every inbound lead to the right team member automatically.',
    targetOutcome: 'Zero leads lost to inbox chaos or manual assignment',
    painSentence: 'Your best leads are cooling off in your inbox.',
    problemHeadline: 'The Response Gap',
    problemBody: 'Manual lead triage is slow and error-prone. When leads wait hours for a human to "check the inbox" and assign them, your conversion rate plummets and your sales team loses momentum.',
    steps: [
      { title: 'Ingest', desc: 'Capture leads from forms, email, and social channels.' },
      { title: 'Qualify', desc: 'AI instantly scores leads based on your ideal client profile.' },
      { title: 'Route', desc: 'Qualified leads are pushed to the right rep with context.' },
      { title: 'Follow-up', desc: 'Automated "Immediate Response" sequence fires.' }
    ],
    deliverables: [
      'Lead scoring logic based on your ICP',
      'Automated routing engine for Slack/CRM',
      'Multi-channel lead ingestion setup',
      'Immediate response automation',
      'Lead health dashboard',
      'Sales team notification system'
    ],
    outcomes: [
      { metric: 'Zero missed leads', desc: 'through manual inbox errors' },
      { metric: '< 5 min response', desc: 'time for high-value inquiries' },
      { metric: '100% qualification', desc: 'accuracy on inbound leads' }
    ],
    rightForYou: [
      'You are manually checking your inbox for new leads',
      'Leads often go 24+ hours without a response',
      'Your sales team complains about lead quality',
      'You have no idea which lead sources are actually converting'
    ]
  },
  {
    id: 'client-reporting-automation',
    number: '08',
    name: 'Client Reporting Automation',
    problemLine: 'Generate and deliver performance reports to clients without staff involvement.',
    targetOutcome: 'Reclaim 10+ hours per month per client account',
    painSentence: 'Reporting is the most expensive "non-billable" task you do.',
    problemHeadline: 'The Reporting Grind',
    problemBody: 'Manual reporting is a massive drain on your account managers. It\'s repetitive, prone to errors, and often delivered late, which damages client trust and eats your margins.',
    steps: [
      { title: 'Aggregate', desc: 'Pull data from all client performance sources.' },
      { title: 'Interpret', desc: 'AI writes the "So What?" narrative for the metrics.' },
      { title: 'Format', desc: 'Generate a beautiful, brand-aligned report document.' },
      { title: 'Deliver', desc: 'Schedule and send to the client automatically.' }
    ],
    deliverables: [
      'Automated data aggregation engine',
      'AI narrative generation layer',
      'Custom report templates',
      'Automated delivery schedule',
      'Client feedback loop integration',
      'Internal reporting health dashboard'
    ],
    outcomes: [
      { metric: '10+ hours saved', desc: 'per client per month' },
      { metric: '100% on-time', desc: 'delivery of every client report' },
      { metric: 'Error-free data', desc: 'through automated validation' }
    ],
    rightForYou: [
      'Your team spends the first week of the month just doing reports',
      'Reports are often sent late or contain manual errors',
      'Clients ask "what does this mean?" after every report',
      'You can\'t scale your agency because reporting is too heavy'
    ]
  },
  {
    id: 'intake-to-assignment-engine',
    number: '09',
    name: 'Intake-to-Assignment Engine',
    problemLine: 'Move new projects from intake form to assigned team member without owner involvement.',
    targetOutcome: 'Remove the owner from the routing loop entirely',
    painSentence: 'You are the "Air Traffic Controller" of every project.',
    problemHeadline: 'The Assignment Bottleneck',
    problemBody: 'When every new project requires the owner to "look at it" and decide who does what, you are the ultimate bottleneck. This prevents the agency from scaling beyond your personal bandwidth.',
    steps: [
      { title: 'Intake', desc: 'Structured project data captured via smart forms.' },
      { title: 'Scope', desc: 'AI estimates effort and requirements based on history.' },
      { title: 'Match', desc: 'Project is matched to the best available team member.' },
      { title: 'Launch', desc: 'Project is created in PM tool with all initial tasks.' }
    ],
    deliverables: [
      'Smart intake form configuration',
      'AI scoping and estimation engine',
      'Team capacity and skill matching logic',
      'PM tool automation (ClickUp/Asana/etc)',
      'Project launch notification system',
      'Resource allocation dashboard'
    ],
    outcomes: [
      { metric: 'Zero owner involvement', desc: 'in daily project assignments' },
      { metric: 'Instant project launch', desc: 'from intake to first task' },
      { metric: '100% accurate scoping', desc: 'based on historical data' }
    ],
    rightForYou: [
      'You are personally assigning every new task or project',
      'Team members are waiting for you to tell them what\'s next',
      'You have no clear view of your team\'s actual capacity',
      'Project kickoff is delayed by your personal schedule'
    ]
  },
  {
    id: 'ai-qa-checkpoint-system',
    number: '10',
    name: 'AI QA Checkpoint System',
    problemLine: 'Catch errors and enforce brand standards before work reaches the client.',
    targetOutcome: 'Reduce client revision requests by 40%',
    painSentence: 'Your clients are your Quality Assurance team.',
    problemHeadline: 'The Quality Leak',
    problemBody: 'When work reaches the client with "silly" errors or brand inconsistencies, it damages your reputation and leads to expensive revision loops. Manual QA is often skipped when the team is busy.',
    steps: [
      { title: 'Submit', desc: 'Team member submits work for internal review.' },
      { title: 'Scan', desc: 'AI checks against brand guidelines and project brief.' },
      { title: 'Flag', desc: 'Errors or inconsistencies are flagged for the creator.' },
      { title: 'Approve', desc: 'Work is only released once it passes all checkpoints.' }
    ],
    deliverables: [
      'Brand and Quality Guideline DNA',
      'AI-powered QA scanning engine',
      'Automated feedback loop for creators',
      'Revision tracking and analysis',
      'Client-ready validation badge',
      'Quality performance dashboard'
    ],
    outcomes: [
      { metric: '40% fewer revisions', desc: 'requested by clients' },
      { metric: '100% brand alignment', desc: 'on every deliverable' },
      { metric: 'Zero "silly" errors', desc: 'reaching the client\'s inbox' }
    ],
    rightForYou: [
      'Clients are catching typos or brand errors',
      'Revision loops are eating your project margins',
      'You are personally reviewing every piece of work',
      'Your team is rushing work out without a final check'
    ]
  }
];
