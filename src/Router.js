import Layout from "./Layout/Layout";
import Users from "./Pages/Users/Users";
import Workout from "./Pages/Workout/Workout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { createHashRouter } from "react-router-dom";
import UserDetail from "./components/UserDetail/UserDetail";
import WorkoutDetail from "./components/WorkoutDetail/WorkoutDetail";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/users", element: <Users /> },
      { path: "/users/:id", element: <UserDetail /> },
      { path: "/workouts", element: <Workout /> },
      { path: "/workouts/:id", element: <WorkoutDetail /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);

export default router;
