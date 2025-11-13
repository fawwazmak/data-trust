// src/components/dashboard/ActivityTimeline.jsx
const ActivityTimeline = () => {
  const activities = [
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
    }
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case 'allowed': return 'var(--success-green)';
      case 'breach': return 'var(--error-red)';
      case 'pending': return 'var(--alert-amber)';
      default: return 'var(--primary-blue)';
    }
  };

  const getTypeClass = (type) => {
    switch(type) {
      case 'allowed': return 'allowed';
      case 'breach': return 'breach';
      case 'pending': return 'pending';
      default: return '';
    }
  };

  return (
    <div className="timeline">
      {activities.map((activity, index) => (
        <div key={index} className="timeline-item">
          <div className={`timeline-content ${getTypeClass(activity.type)}`}>
            <div className="timeline-header">
              <div className="timeline-title">
                <i 
                  className={activity.icon} 
                  style={{ color: getTypeColor(activity.type) }}
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
  );
};

export default ActivityTimeline;