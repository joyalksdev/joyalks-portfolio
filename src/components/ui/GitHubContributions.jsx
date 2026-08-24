import { useState, useEffect } from 'react';

export default function GitHubContributions({ username = 'joyalksdev' }) {
  const [contributions, setContributions] = useState([]);
  const [stats, setStats] = useState({
    totalContributions: 0,
    currentStreak: 0,
    longestStreak: 0,
    thisYear: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContributions();
  }, [username]);

  const fetchContributions = async () => {
    try {
      // Using GitHub's contribution API
      const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
      const data = await response.json();

      if (data && data.contributions) {
        const contributionData = data.contributions;
        setContributions(contributionData);

        // Calculate stats
        const total = contributionData.reduce((sum, day) => sum + day.count, 0);
        const currentYear = new Date().getFullYear();
        const thisYearContributions = contributionData.filter(day =>
          new Date(day.date).getFullYear() === currentYear
        ).reduce((sum, day) => sum + day.count, 0);

        setStats({
          totalContributions: total,
          currentStreak: calculateCurrentStreak(contributionData),
          longestStreak: calculateLongestStreak(contributionData),
          thisYear: thisYearContributions
        });
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching GitHub contributions:', error);
      setLoading(false);
    }
  };

  const calculateCurrentStreak = (data) => {
    let streak = 0;
    const sortedData = [...data].reverse();

    for (const day of sortedData) {
      if (day.count > 0) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  };

  const calculateLongestStreak = (data) => {
    let maxStreak = 0;
    let currentStreak = 0;

    for (const day of data) {
      if (day.count > 0) {
        currentStreak++;
        maxStreak = Math.max(maxStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    }
    return maxStreak;
  };

  const getContributionLevel = (count) => {
    if (count === 0) return 'bg-zinc-800/30';
    if (count < 3) return 'bg-emerald-900/50';
    if (count < 6) return 'bg-emerald-700/60';
    if (count < 9) return 'bg-emerald-500/70';
    return 'bg-emerald-400';
  };

  const groupByWeeks = () => {
    const weeks = [];
    let week = [];

    contributions.forEach((day, index) => {
      week.push(day);
      if (week.length === 7 || index === contributions.length - 1) {
        weeks.push([...week]);
        week = [];
      }
    });

    return weeks;
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if (loading) {
    return (
      <div className="bg-zinc-900/40 border border-white/[0.08] rounded-2xl p-6 md:p-8 backdrop-blur-sm">
        <div className="animate-pulse">
          <div className="h-32 bg-zinc-800/30 rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900/40 border border-white/[0.08] rounded-2xl p-6 md:p-8 backdrop-blur-sm overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-semibold text-zinc-300 mb-1">
            {stats.totalContributions.toLocaleString()} contributions in the last year
          </h4>
          <p className="text-xs text-zinc-500">
            Building consistently, one commit at a time
          </p>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
        >
          <span>View Profile</span>
          <span>→</span>
        </a>
      </div>

      {/* Contribution Graph */}
      <div className="bg-zinc-950/50 rounded-xl p-4 border border-white/5 overflow-x-auto">
        {/* Month Labels */}
        <div className="flex gap-1 mb-2 text-xs text-zinc-500 font-mono pl-7">
          {months.map((month, index) => (
            <div key={month} className="w-[52px] text-left" style={{ marginLeft: index === 0 ? 0 : '0px' }}>
              {month}
            </div>
          ))}
        </div>

        {/* Grid Container */}
        <div className="flex gap-1">
          {/* Day Labels */}
          <div className="flex flex-col gap-1 text-xs text-zinc-500 font-mono pt-1">
            <div className="h-[10px]">Mon</div>
            <div className="h-[10px]" />
            <div className="h-[10px]">Wed</div>
            <div className="h-[10px]" />
            <div className="h-[10px]">Fri</div>
            <div className="h-[10px]" />
            <div className="h-[10px]" />
          </div>

          {/* Contribution Squares */}
          <div className="flex gap-1">
            {groupByWeeks().map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`w-[10px] h-[10px] rounded-sm ${getContributionLevel(day.count)} hover:ring-2 hover:ring-indigo-400/50 transition-all cursor-pointer group relative`}
                    title={`${day.count} contributions on ${new Date(day.date).toLocaleDateString()}`}
                  >
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                      {day.count} contributions on {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 mt-4 text-xs text-zinc-500">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-[10px] h-[10px] rounded-sm bg-zinc-800/30" />
            <div className="w-[10px] h-[10px] rounded-sm bg-emerald-900/50" />
            <div className="w-[10px] h-[10px] rounded-sm bg-emerald-700/60" />
            <div className="w-[10px] h-[10px] rounded-sm bg-emerald-500/70" />
            <div className="w-[10px] h-[10px] rounded-sm bg-emerald-400" />
          </div>
          <span>More</span>
        </div>
      </div>

      {/* GitHub Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {/* Total Contributions */}
        <div className="bg-zinc-800/30 border border-white/5 rounded-xl p-4 hover:border-indigo-500/30 transition-colors">
          <div className="text-2xl md:text-3xl font-bold text-zinc-100 mb-1">
            {stats.totalContributions}
          </div>
          <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">
            Total
          </div>
        </div>

        {/* This Year */}
        <div className="bg-zinc-800/30 border border-white/5 rounded-xl p-4 hover:border-indigo-500/30 transition-colors">
          <div className="text-2xl md:text-3xl font-bold text-zinc-100 mb-1">
            {stats.thisYear}
          </div>
          <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">
            This Year
          </div>
        </div>

        {/* Current Streak */}
        <div className="bg-zinc-800/30 border border-white/5 rounded-xl p-4 hover:border-indigo-500/30 transition-colors">
          <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1 flex items-center gap-1">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            {stats.currentStreak}
          </div>
          <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">
            Current Streak
          </div>
        </div>

        {/* Longest Streak */}
        <div className="bg-zinc-800/30 border border-white/5 rounded-xl p-4 hover:border-indigo-500/30 transition-colors">
          <div className="text-2xl md:text-3xl font-bold text-zinc-100 mb-1">
            {stats.longestStreak}
          </div>
          <div className="text-xs text-zinc-500 uppercase tracking-wider font-mono">
            Best Streak
          </div>
        </div>
      </div>
    </div>
  );
}
