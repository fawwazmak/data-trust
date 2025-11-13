// src/components/dashboard/StatCard.jsx
const StatCard = ({ value, label, change, changeType, icon, iconType = 'default' }) => {
  return (
    <div className="card stat-card">
      <div className={`stat-icon ${iconType}`}>
        <i className={icon}></i>
      </div>
      <div className="stat-info">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
        <div className={`stat-change ${changeType}`}>
          <i className={`fas fa-arrow-${changeType === 'positive' ? 'up' : 'down'}`}></i> 
          {change}
        </div>
      </div>
    </div>
  );
};

export default StatCard;