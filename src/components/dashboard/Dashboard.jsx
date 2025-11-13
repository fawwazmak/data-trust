// src/components/dashboard/Dashboard.jsx
import StatCard from './StatCard';
import ActivityTimeline from './ActivityTimeline';

const Dashboard = () => {
  const stats = [
    {
      value: 15,
      label: 'Organizations with Access',
      change: '+2 this month',
      changeType: 'positive',
      icon: 'fas fa-building',
      iconType: 'default'
    },
    {
      value: 128,
      label: 'Authorized Accesses',
      change: '+12% from last month',
      changeType: 'positive',
      icon: 'fas fa-check-circle',
      iconType: 'success'
    },
    {
      value: 5,
      label: 'Pending Requests',
      change: '+2 from last week',
      changeType: 'negative',
      icon: 'fas fa-clock',
      iconType: 'warning'
    },
    {
      value: 3,
      label: 'Breach Alerts',
      change: '-1 from last month',
      changeType: 'positive',
      icon: 'fas fa-exclamation-triangle',
      iconType: 'danger'
    }
  ];

  return (
    <div className="dashboard-page">
      {/* Alert Banner */}
      <div className="alert-banner">
        <div className="alert-icon">
          <i className="fas fa-exclamation-triangle"></i>
        </div>
        <div className="alert-content">
          <div className="alert-title">UNAUTHORIZED ACCESS DETECTED</div>
          <div className="alert-description">
            We've detected suspicious activity from 'XYZ Corp' trying to access your financial data without proper consent. Immediate action recommended.
          </div>
        </div>
        <button className="btn btn-danger">
          <i className="fas fa-flag"></i> Report to NDPC
        </button>
      </div>

      {/* Dashboard Overview */}
      <div className="dashboard-overview">
        <div className="overview-cards">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Data Visualization Section */}
        <div className="viz-container">
          <div className="viz-card">
            <div className="viz-title">Data Access Distribution</div>
            <div className="chart-placeholder">
              Chart will be implemented with Chart.js
            </div>
          </div>
          <div className="viz-card">
            <div className="viz-title">Compliance Score Trend</div>
            <div className="chart-placeholder">
              Chart will be implemented with Chart.js
            </div>
          </div>
        </div>

        {/* Health Score Card */}
        <div className="card health-score-card">
          <h3>Your Data Health Score</h3>
          <div className="score-circle">
            <div className="score-text">85/100</div>
          </div>
          <div className="score-breakdown">
            <div className="score-item">
              <div className="indicator indicator-allowed"></div>
              <span>12 Allowed</span>
            </div>
            <div className="score-item">
              <div className="indicator indicator-denied"></div>
              <span>3 Denied</span>
            </div>
            <div className="score-item">
              <div className="indicator indicator-pending"></div>
              <span>5 Pending</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-history"></i> Recent Activity
          </h2>
          <div className="section-actions">
            <button className="btn btn-outline">
              <i className="fas fa-filter"></i> Filter
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-plus"></i> Add Consent
            </button>
          </div>
        </div>
        <ActivityTimeline />
      </div>
    </div>
  );
};

export default Dashboard;