import Layout from "./components/Layout/Layout";
import TaskList from "./components/TaskList/TaskList";
import AppBar from "./components/AppBar/AppBar";
import TaskForm from "./components/TaskForm/TaskForm";

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
