'use client'

import { useEffect, useState } from 'react'

interface Submission {
  id: string
  name: string
  email: string
  locale: string
  createdAt: string
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [password, setPassword] = useState('')
  const [authenticated, setAuthenticated] = useState(false)

  // Simple password protection (replace with proper auth in production)
  const checkPassword = () => {
    if (password === 'nordicpilates2025') {
      setAuthenticated(true)
    } else {
      alert('Incorrect password')
    }
  }

  useEffect(() => {
    if (authenticated) {
      fetchSubmissions()
    }
  }, [authenticated])

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/waitlist')
      const data = await response.json()
      setSubmissions(data.submissions || [])
    } catch (error) {
      console.error('Error fetching submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Locale', 'Created At']
    const rows = submissions.map(sub => [
      sub.name,
      sub.email,
      sub.locale,
      new Date(sub.createdAt).toLocaleString('da-DK')
    ])

    const csv = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `nordic-pilates-waitlist-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
  }

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-snow flex items-center justify-center px-24">
        <div className="max-w-md w-full">
          <div className="bg-white p-48 rounded-default shadow-subtle">
            <h1 className="text-3xl font-serif mb-24 text-center">Admin Access</h1>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && checkPassword()}
              className="input-field mb-24"
            />
            <button onClick={checkPassword} className="btn-primary w-full">
              Login
            </button>
            <p className="text-xs text-graphite/50 text-center mt-16">
              Default password: nordicpilates2025
            </p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-snow py-64 px-24">
      <div className="container-custom max-w-6xl">
        <div className="flex justify-between items-center mb-48">
          <div>
            <h1 className="text-4xl font-serif mb-16">Waitlist Submissions</h1>
            <p className="text-graphite/70">
              Total submissions: <strong>{submissions.length}</strong>
            </p>
          </div>
          <button
            onClick={exportToCSV}
            className="btn-primary"
            disabled={submissions.length === 0}
          >
            📥 Export CSV
          </button>
        </div>

        {loading ? (
          <div className="text-center py-64">
            <p className="text-graphite/50">Loading submissions...</p>
          </div>
        ) : submissions.length === 0 ? (
          <div className="bg-white p-64 rounded-default shadow-subtle text-center">
            <p className="text-graphite/70 text-lg">No submissions yet</p>
            <p className="text-graphite/50 text-sm mt-8">
              Submissions will appear here as people join the waitlist
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-default shadow-subtle overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-porcelain">
                  <tr>
                    <th className="px-24 py-16 text-left text-sm font-medium text-graphite uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-24 py-16 text-left text-sm font-medium text-graphite uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-24 py-16 text-left text-sm font-medium text-graphite uppercase tracking-wider">
                      Locale
                    </th>
                    <th className="px-24 py-16 text-left text-sm font-medium text-graphite uppercase tracking-wider">
                      Submitted
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-fog">
                  {submissions.map((submission) => (
                    <tr key={submission.id} className="hover:bg-porcelain/50 transition-colors">
                      <td className="px-24 py-16 whitespace-nowrap">
                        <div className="text-sm font-medium text-graphite">
                          {submission.name}
                        </div>
                      </td>
                      <td className="px-24 py-16 whitespace-nowrap">
                        <div className="text-sm text-graphite">
                          {submission.email}
                        </div>
                      </td>
                      <td className="px-24 py-16 whitespace-nowrap">
                        <span className="px-8 py-4 inline-flex text-xs leading-5 font-semibold rounded-full bg-ice-blue/30 text-graphite uppercase">
                          {submission.locale}
                        </span>
                      </td>
                      <td className="px-24 py-16 whitespace-nowrap text-sm text-graphite/70">
                        {new Date(submission.createdAt).toLocaleString('da-DK')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-32 text-center">
          <a href="/" className="text-graphite/60 hover:text-graphite transition-colors text-sm">
            ← Back to landing page
          </a>
        </div>
      </div>
    </main>
  )
}
