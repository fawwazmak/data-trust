// src/components/consent/DataAccessTable.jsx
import { useState } from 'react';

const DataAccessTable = () => {
  const [organizations, setOrganizations] = useState([
    {
      id: 1,
      name: 'GTBank',
      category: 'Financial Services',
      logo: 'GTB',
      dataTypes: ['financial', 'identity'],
      complianceScore: 92,
      lastAccessed: 'Today, 10:23 AM',
      status: 'active',
      enabled: true
    },
    {
      id: 2,
      name: 'NIMC',
      category: 'Government',
      logo: 'NIM',
      dataTypes: ['identity', 'biometric'],
      complianceScore: 88,
      lastAccessed: 'Yesterday, 2:11 PM',
      status: 'active',
      enabled: true
    },
    {
      id: 3,
      name: 'Jumia',
      category: 'E-commerce',
      logo: 'JUM',
      dataTypes: ['contact', 'purchase'],
      complianceScore: 65,
      lastAccessed: 'Jan 15, 2023',
      status: 'inactive',
      enabled: false
    }
  ]);

  const handleToggle = (id) => {
    setOrganizations(orgs => 
      orgs.map(org => 
        org.id === id 
          ? { 
              ...org, 
              enabled: !org.enabled,
              status: !org.enabled ? 'active' : 'inactive'
            } 
          : org
      )
    );
  };

  const getDataTypeClass = (type) => {
    switch(type) {
      case 'financial': return 'financial';
      case 'identity': return 'identity';
      case 'health': return 'health';
      default: return '';
    }
  };

  const getDataTypeLabel = (type) => {
    switch(type) {
      case 'financial': return 'Financial';
      case 'identity': return 'Identity';
      case 'biometric': return 'Biometric';
      case 'contact': return 'Contact';
      case 'purchase': return 'Purchase History';
      default: return type;
    }
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <div className="table-title">Organizations with Data Access</div>
        <div className="table-actions">
          <button className="btn btn-outline">
            <i className="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Organization</th>
            <th>Data Types</th>
            <th>Access Level</th>
            <th>Last Accessed</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map(org => (
            <tr key={org.id}>
              <td>
                <div className="org-info">
                  <div className="org-logo">{org.logo}</div>
                  <div className="org-details">
                    <div className="org-name">{org.name}</div>
                    <div className="org-category">{org.category}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="data-types">
                  {org.dataTypes.map((type, index) => (
                    <span key={index} className={`data-tag ${getDataTypeClass(type)}`}>
                      {getDataTypeLabel(type)}
                    </span>
                  ))}
                </div>
              </td>
              <td>
                <div className="compliance-score">
                  <div className="score-bar">
                    <div 
                      className="score-progress" 
                      style={{ width: `${org.complianceScore}%` }}
                    ></div>
                  </div>
                  <span>{org.complianceScore}%</span>
                </div>
              </td>
              <td>{org.lastAccessed}</td>
              <td>
                <span className={`status-badge status-${org.status}`}>
                  {org.status.charAt(0).toUpperCase() + org.status.slice(1)}
                </span>
              </td>
              <td>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={org.enabled}
                    onChange={() => handleToggle(org.id)}
                  />
                  <span className="slider"></span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataAccessTable;