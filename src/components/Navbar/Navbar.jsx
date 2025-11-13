import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold">Data Trust</h1>
        <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">signIn</Link></li>
            <li><Link to="/register">signUp</Link></li>
            {/* <li><Link to="/forecasting">Forecasting</Link></li>
            <li><Link to="/tankMonitoring">Tank Monitoring</Link></li>
            <li><Link to="/blockChainLedger">Blockchain Ledger</Link></li>
            <li><Link to="/account">Account</Link></li> */}
        </ul>
    </div>
  )
}

export default Navbar
