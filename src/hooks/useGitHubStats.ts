import { useEffect, useState } from 'react'

interface GitHubStats {
  repos: number
  stars: number
  followers: number
}

const FALLBACK_STATS: GitHubStats = { repos: 52, stars: 452, followers: 5 }
const CACHE_KEY = 'github_stats_cache'
const CACHE_DURATION = 1000 * 60 * 60

export function useGitHubStats(username: string = 'ryudswift') {
  const [stats, setStats] = useState<GitHubStats>(FALLBACK_STATS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cached = sessionStorage.getItem(CACHE_KEY)
    if (cached) {
      try {
        const { data, timestamp } = JSON.parse(cached)
        if (Date.now() - timestamp < CACHE_DURATION) {
          setStats(data)
          setLoading(false)
          return
        }
      } catch (e) {}
    }

    const fetchStats = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`)
        if (!userRes.ok) throw new Error('User fetch failed')
        const userData = await userRes.json()

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        if (!reposRes.ok) throw new Error('Repos fetch failed')
        const reposData = await reposRes.json()

        const totalStars = reposData.reduce((sum: number, repo: any) => sum + (repo.stargazers_count || 0), 0)

        const newStats: GitHubStats = {
          repos: userData.public_repos || FALLBACK_STATS.repos,
          stars: totalStars || FALLBACK_STATS.stars,
          followers: userData.followers || FALLBACK_STATS.followers,
        }

        setStats(newStats)
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data: newStats, timestamp: Date.now() }))
      } catch (error) {
        console.warn('GitHub API fetch failed, using fallback stats:', error)
        setStats(FALLBACK_STATS)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [username])

  return { stats, loading }
}
