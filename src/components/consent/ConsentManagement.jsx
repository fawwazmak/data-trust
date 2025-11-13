// src/components/consent/ConsentManagement.jsx
import DataAccessTable from './DataAccessTable';

const ConsentManagement = () => {
  return (
    <div className="consent-page">
      <div className="page-header">
        <h1 className="page-title">Consent Management</h1>
        <p className="page-description">
          Control which organizations can access your data and manage your consent preferences.
        </p>
      </div>

      <div className="section">
        <div className="section-header">
          <h2 className="section-title">
            <i className="fas fa-database"></i> Data Access Control
          </h2>
          <div className="section-actions">
            <button className="btn btn-outline">
              <i className="fas fa-filter"></i> Filter
            </button>
            <button className="btn btn-outline">
              <i className="fas fa-download"></i> Export
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-plus"></i> Add Consent
            </button>
          </div>
        </div>
        <DataAccessTable />
      </div>
    </div>
  );
};

export default ConsentManagement;