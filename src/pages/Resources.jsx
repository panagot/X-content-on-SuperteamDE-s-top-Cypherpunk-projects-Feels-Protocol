import { ExternalLink, Video, FileText, Lightbulb, Zap, Target, BookOpen, Image as ImageIcon } from 'lucide-react'
import { projects } from '../data/projects'

export default function Resources() {
  const tips = [
    {
      icon: Target,
      title: 'Know Your Audience',
      description: 'Your content should appeal to both crypto natives and newcomers. Explain technical concepts in accessible ways.'
    },
    {
      icon: Zap,
      title: 'Lead with the Hook',
      description: 'The first 3 seconds (video) or first sentence (article) determine if people keep watching/reading. Make it count!'
    },
    {
      icon: Lightbulb,
      title: 'Tell a Story',
      description: 'Don\'t just list features. Connect the project to real problems and show how it solves them. Create emotional resonance.'
    },
    {
      icon: ImageIcon,
      title: 'Visuals Matter',
      description: 'Use screenshots, diagrams, animations, or graphics. Visual content gets 3x more engagement than text-only.'
    },
    {
      icon: BookOpen,
      title: 'Be Authentic',
      description: 'Share your genuine excitement. Authenticity resonates more than polished perfection.'
    },
    {
      icon: Video,
      title: 'Keep It Simple',
      description: 'Complex ideas explained simply win. Avoid jargon overload. Use analogies and comparisons.'
    }
  ]

  const videoTips = [
    'Start with a strong hook - pose a question or show a surprising fact',
    'Use text overlays to highlight key points',
    'Keep cuts fast-paced (especially for shorter videos)',
    'Add background music that matches the energy',
    'Include captions for accessibility',
    'End with a clear call-to-action',
    'Use Solana and Superteam Germany branding elements'
  ]

  const articleTips = [
    'Use thread format (8-12 tweets) for better engagement',
    'Start each tweet with a number [1/8] for easy navigation',
    'Use emojis strategically (not excessively)',
    'Break up text with line breaks and spacing',
    'Include visual elements in every 2-3 tweets',
    'Ask questions to encourage engagement',
    'Use relevant hashtags but don\'t overdo it'
  ]

  const tools = [
    {
      category: 'Video Editing',
      items: [
        { name: 'CapCut', description: 'Free, powerful mobile/desktop editor', url: 'https://www.capcut.com' },
        { name: 'DaVinci Resolve', description: 'Professional free video editing', url: 'https://www.blackmagicdesign.com/products/davinciresolve' },
        { name: 'Canva', description: 'Easy video creation with templates', url: 'https://www.canva.com' }
      ]
    },
    {
      category: 'Graphics & Design',
      items: [
        { name: 'Canva', description: 'All-in-one design tool', url: 'https://www.canva.com' },
        { name: 'Figma', description: 'Professional design tool', url: 'https://www.figma.com' },
        { name: 'Remove.bg', description: 'Remove backgrounds from images', url: 'https://www.remove.bg' }
      ]
    },
    {
      category: 'Screen Recording',
      items: [
        { name: 'OBS Studio', description: 'Free screen recording and streaming', url: 'https://obsproject.com' },
        { name: 'Loom', description: 'Quick screen recordings with sharing', url: 'https://www.loom.com' }
      ]
    },
    {
      category: 'Content Planning',
      items: [
        { name: 'Notion', description: 'Organize your content ideas', url: 'https://www.notion.so' },
        { name: 'Google Docs', description: 'Collaborative writing and backup', url: 'https://docs.google.com' }
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Resources & <span className="gradient-text">Tips</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Everything you need to create winning content
        </p>
      </div>

      {/* General Tips */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
          <Lightbulb className="w-6 h-6 text-solana-purple" />
          <span>General Tips</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, idx) => {
            const Icon = tip.icon
            return (
              <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Icon className="w-8 h-8 text-solana-purple mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{tip.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Format-Specific Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center space-x-2 mb-4">
            <Video className="w-6 h-6 text-solana-purple" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Video Tips</h2>
          </div>
          <ul className="space-y-2">
            {videoTips.map((tip, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
                <span className="text-solana-green mt-1">•</span>
                <span className="text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <div className="flex items-center space-x-2 mb-4">
            <FileText className="w-6 h-6 text-solana-green" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Article/Thread Tips</h2>
          </div>
          <ul className="space-y-2">
            {articleTips.map((tip, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
                <span className="text-solana-purple mt-1">•</span>
                <span className="text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tools */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
          <Zap className="w-6 h-6 text-solana-green" />
          <span>Recommended Tools</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((category, idx) => (
            <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">{category.category}</h3>
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <a
                    key={itemIdx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white group-hover:text-solana-purple dark:group-hover:text-solana-green transition-colors">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{item.description}</div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-solana-purple transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Links */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Project Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.arenaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-2xl mb-2">{project.icon}</div>
                  <div className="font-semibold text-gray-900 dark:text-white group-hover:text-solana-purple dark:group-hover:text-solana-green transition-colors">
                    {project.name}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-solana-purple transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Key Reminders */}
      <div className="card bg-gradient-to-br from-solana-purple/10 to-solana-green/10 border-2 border-solana-purple/20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Reminders</h2>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <Target className="w-5 h-5 text-solana-purple flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">Must Include</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Solana, Superteam Germany, and your selected hackathon project must be clearly and meaningfully incorporated
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Zap className="w-5 h-5 text-solana-green flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">Engagement Focus</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Your content should grab attention, spark curiosity, and make the project exciting or easier to understand
              </div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <BookOpen className="w-5 h-5 text-solana-purple flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">Quality Matters</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                For videos: production quality, editing, visuals, audio. For articles: clarity, structure, depth, readability
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

