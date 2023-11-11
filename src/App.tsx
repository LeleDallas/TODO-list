import { useEffect, useState } from 'react';
import Layout from './components/Layout/Layout'
import { useAppSelector } from './hooks';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  const storedUsername = localStorage.getItem('username');
  const [username, setUsername] = useState<string>(storedUsername !== null ? storedUsername : "TODO User")
  const loading = useAppSelector(state => state.state.loading)

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      localStorage.setItem('theme', JSON.stringify(isDark));
    }
    if (!localStorage.getItem('username')) {
      localStorage.setItem('username', "TODO User")
    }
    if (!localStorage.getItem('todoList')) {
      const emptyTodoList: TodoList = new Map();
      const jsonString = JSON.stringify(Object.fromEntries(emptyTodoList));
      localStorage.setItem('todoList', jsonString);
    }
    if (!localStorage.getItem('categoryColors')) {
      const categoryColors = new Map();
      const jsonString = JSON.stringify(Object.fromEntries(categoryColors));
      localStorage.setItem('categoryColors', jsonString);
    }
  }, [loading])

  return <>
    <Layout username={username} setUsername={setUsername} />
    {loading && <LoadingSpinner />}
  </>
}

export default App
