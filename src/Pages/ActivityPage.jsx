// src/pages/ActivityPage.jsx
import ActivityTimeline from '../components/dashboard/ActivityTimeline';

const ActivityPage = () => {
  const extendedActivities = [
    {
      type: 'allowed',
      title: 'GTBank accessed your data',
      time: 'Today, 10:23 AM',
      description: 'Financial data was accessed for loan application verification. This was an authorized access with your consent.',
      icon: 'fas fa-check-circle'
    },
    {
      type: 'breach',
      title: 'Unauthorized access attempt blocked',
      time: 'Today, 9:15 AM',
      description: 'XYZ Corp attempted to access your financial data without proper consent. The attempt was blocked and logged for review.',
      icon: 'fas fa-exclamation-triangle'
    },
    {
      type: 'allowed',
      title: 'NIMC identity verification',
      time: 'Yesterday, 2:11 PM',
      description: 'Your identity data was accessed for background check verification. This was an authorized access with your consent.',
      icon: 'fas fa-check-circle'
    },
    {
      type: 'pending',
      title: 'New data access request',
      time: 'Jan 10, 2023',
      description: 'QuickCredit requested access to your financial data for marketing purposes. Waiting for your consent decision.',
      icon: 'fas fa-clock'
    },
    {
      type: 'allowed',
      title: 'Jumia order processing',
      time: 'Jan 8, 2023',
      description: 'Contact and purchase history accessed for order processing and delivery.',
      icon: 'fas fa-check-circle'
    }
  ];

  return (
    <div className="activity-page">
      <div className="page-header">
        <h1 className="page-title">Activity Log</h1>
        <p className="page-description">
          Track all data access events, consent changes, and security incidents.
        </p>
      </div>

      <div className="section">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-history"></i> Complete Activity Timeline
          </h2>
          <div className="section-actions">
            <button className="btn btn-outline">
              <i className="fas fa-filter"></i> Filter
            </button>
            <button className="btn btn-outline">
              <i className="fas fa-download"></i> Export
            </button>
          </div>
        </div>
        
        <div className="timeline">
          {extendedActivities.map((activity, index) => (
            <div key={index} className="timeline-item">
              <div className={`timeline-content ${activity.type}`}>
                <div className="timeline-header">
                  <div className="timeline-title">
                    <i 
                      className={activity.icon} 
                      style={{ 
                        color: activity.type === 'allowed' ? 'var(--success-green)' : 
                               activity.type === 'breach' ? 'var(--error-red)' : 
                               'var(--alert-amber)' 
                      }}
                    ></i>
                    {activity.title}
                  </div>
                  <div className="timeline-time">{activity.time}</div>
                </div>
                <div className="timeline-description">
                  {activity.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;