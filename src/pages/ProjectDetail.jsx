import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Lightbulb, Zap, CheckCircle, Video, FileText } from 'lucide-react'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link to="/" className="text-solana-purple hover:underline">Back to Dashboard</Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-solana-purple dark:hover:text-solana-green transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Projects</span>
      </Link>

      {/* Header */}
      <div className="card">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={`w-20 h-20 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center text-5xl shadow-lg`}>
              {project.icon}
            </div>
            <div>
              <div className="mb-2">
                <span className="text-xs font-semibold text-solana-purple dark:text-solana-green uppercase tracking-wide">
                  {project.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {project.name}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                {project.tagline}
              </p>
            </div>
          </div>
          <a
            href={project.arenaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <span className="text-sm font-semibold">View on Arena</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Key Highlights */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
          <Zap className="w-6 h-6 text-solana-purple" />
          <span>Key Highlights</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-solana-green flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why It's Exciting */}
      <div className="card bg-gradient-to-br from-solana-purple/10 to-solana-green/10 border-2 border-solana-purple/20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
          <Lightbulb className="w-6 h-6 text-solana-green" />
          <span>Why It's Exciting</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {project.whyExciting}
        </p>
      </div>

      {/* Solana Features */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          How It Leverages Solana
        </h2>
        <div className="space-y-4">
          {project.solanaFeatures.map((feature, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-solana-purple/5 to-solana-green/5 rounded-lg border border-solana-purple/10">
              <div className="w-6 h-6 bg-gradient-solana rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">{idx + 1}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Ideas */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
          <Lightbulb className="w-6 h-6 text-solana-purple" />
          <span>Content Ideas</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.contentIdeas.map((idea, idx) => (
            <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-solana-purple">
              <p className="text-gray-700 dark:text-gray-300">{idea}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="card bg-gradient-to-br from-solana-purple to-solana-green text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to Create Content?</h3>
            <p className="text-white/90">
              Use our Content Creator tool to build your video or article about {project.name}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/content-creator"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-solana-purple rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Video className="w-5 h-5" />
              <span>Create Video</span>
            </Link>
            <Link
              to="/content-creator?type=article"
              className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <FileText className="w-5 h-5" />
              <span>Create Article</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

