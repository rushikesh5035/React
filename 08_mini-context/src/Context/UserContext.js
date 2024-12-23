import React from "react";

const UserContext = React.createContext();

export default UserContext;

// // Wrap all components into UserContext
// // all components can access global context
/* <UserContext>
  <Login />
  <Card>
    <Data />
  </Card>
</UserContext>; */

// // But we need Provider
