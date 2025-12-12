import { useState } from 'react'
import { CheckCircle, Circle, Download, Share2 } from 'lucide-react'
import { projects } from '../data/projects'

export default function Checklist() {
  const [checkedItems, setCheckedItems] = useState({})

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const checklist = [
    {
      id: 'project-selection',
      category: 'Planning',
      items: [
        { id: 'select-project', text: 'Choose one of the 5 featured projects' },
        { id: 'research-project', text: 'Research the project thoroughly (visit Arena link, read docs)' },
        { id: 'understand-solana', text: 'Understand how the project leverages Solana' },
        { id: 'identify-key-points', text: 'Identify key points: What it does, Why it\'s exciting, How it uses Solana' }
      ]
    },
    {
      id: 'content-creation',
      category: 'Content Creation',
      items: [
        { id: 'choose-format', text: 'Decide on format: Video (5-60 sec) or Article/Thread' },
        { id: 'create-content', text: 'Create your content using templates and guides' },
        { id: 'include-solana', text: 'Clearly incorporate Solana in your content' },
        { id: 'include-superteam', text: 'Mention Superteam Germany and their support' },
        { id: 'include-project', text: 'Highlight the selected hackathon project' },
        { id: 'add-visuals', text: 'Add visual elements (graphics, screenshots, charts)' },
        { id: 'make-engaging', text: 'Ensure content is engaging and easy to understand' }
      ]
    },
    {
      id: 'video-specific',
      category: 'Video Requirements (if applicable)',
      items: [
        { id: 'video-length', text: 'Video length: 5-60 seconds' },
        { id: 'video-quality', text: 'High production quality (editing, visuals, audio)' },
        { id: 'video-backup', text: 'Prepare backup video file (Google Drive, Dropbox, YouTube, Vimeo)' }
      ]
    },
    {
      id: 'article-specific',
      category: 'Article/Thread Requirements (if applicable)',
      items: [
        { id: 'article-visuals', text: 'Include strong visual elements (graphics, charts, screenshots)' },
        { id: 'article-backup', text: 'Prepare backup version (Google Doc or Notion - view-only)' },
        { id: 'article-structure', text: 'Ensure clear structure, depth, and readability' }
      ]
    },
    {
      id: 'posting',
      category: 'Posting on X',
      items: [
        { id: 'post-public', text: 'Post content publicly on X (Twitter)' },
        { id: 'include-hashtags', text: 'Include relevant hashtags (#Solana #SuperteamGermany #Web3)' },
        { id: 'tag-accounts', text: 'Tag @solana and @SuperteamGermany (if applicable)' },
        { id: 'engage-audience', text: 'Write engaging caption to spark curiosity' }
      ]
    },
    {
      id: 'submission',
      category: 'Submission',
      items: [
        { id: 'public-link', text: 'Get public Twitter/X link to your post' },
        { id: 'backup-link', text: 'Prepare backup link (video file or article backup)' },
        { id: 'verify-access', text: 'Verify all links are accessible without extra permissions' },
        { id: 'submit-bounty', text: 'Submit both links in the bounty submission form' }
      ]
    }
  ]

  const allChecked = checklist.every(category => 
    category.items.every(item => checkedItems[item.id])
  )

  const progress = Math.round(
    (Object.values(checkedItems).filter(Boolean).length / 
     checklist.reduce((acc, cat) => acc + cat.items.length, 0)) * 100
  )

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Submission <span className="gradient-text">Checklist</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Use this checklist to ensure your submission meets all requirements
        </p>
      </div>

      {/* Progress */}
      <div className="card bg-gradient-to-br from-solana-purple/10 to-solana-green/10 border-2 border-solana-purple/20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Progress</h2>
          <span className="text-2xl font-bold gradient-text">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className="bg-gradient-solana h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        {allChecked && (
          <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg border border-green-300 dark:border-green-700">
            <p className="text-green-800 dark:text-green-200 font-semibold text-center">
              🎉 All items completed! You're ready to submit!
            </p>
          </div>
        )}
      </div>

      {/* Checklist */}
      <div className="space-y-6">
        {checklist.map((category) => (
          <div key={category.id} className="card">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
              {category.category}
            </h3>
            <div className="space-y-3">
              {category.items.map((item) => {
                const isChecked = checkedItems[item.id] || false
                return (
                  <label
                    key={item.id}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors"
                  >
                    <button
                      onClick={() => toggleCheck(item.id)}
                      className="mt-0.5 flex-shrink-0"
                    >
                      {isChecked ? (
                        <CheckCircle className="w-6 h-6 text-solana-green" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-400" />
                      )}
                    </button>
                    <span className={`flex-1 ${isChecked ? 'line-through text-gray-500 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'}`}>
                      {item.text}
                    </span>
                  </label>
                )
              })}
            </div>
          </div>
        ))}
      </div>


      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => window.print()}
          className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <Download className="w-5 h-5" />
          <span className="font-semibold">Print Checklist</span>
        </button>
        <button
          onClick={() => {
            const text = checklist.map(cat => 
              `${cat.category}\n${cat.items.map(item => 
                `${checkedItems[item.id] ? '✓' : '○'} ${item.text}`
              ).join('\n')}`
            ).join('\n\n')
            navigator.clipboard.writeText(text)
            alert('Checklist copied to clipboard!')
          }}
          className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-solana text-white rounded-lg hover:shadow-lg transition-all"
        >
          <Share2 className="w-5 h-5" />
          <span className="font-semibold">Copy Checklist</span>
        </button>
      </div>
    </div>
  )
}

