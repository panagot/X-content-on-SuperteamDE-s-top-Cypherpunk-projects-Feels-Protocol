import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import ContentCreator from './pages/ContentCreator'
import HowItWorks from './pages/HowItWorks'
import KeyFeatures from './pages/KeyFeatures'
import ProjectDetail from './pages/ProjectDetail'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/content-creator" element={<ContentCreator />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/key-features" element={<KeyFeatures />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  )
}

export default App

