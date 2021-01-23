import React from "react";

const AdminToogle: React.FC = (children): React.ReactElement => {
  return (
    <>
      <label className="adminToogle">{children}</label>
    </>
  );
};

export default AdminToogle;
