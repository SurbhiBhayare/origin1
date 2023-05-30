import React from 'react';
import Sidebar from '../../component/sidebar/Sidebar';

function Dashboard() {

  return (
    <>
      <div className="d-flex">
        <Sidebar/>
        <div className="d-flex w-100 justify-content-between flex-column">
          Dashboard
          <div className="text-center py-2"> &copy; 2023 Company. All rights reserved.</div>
        </div>
      </div>
        
    </>
  );
}

export default Dashboard;