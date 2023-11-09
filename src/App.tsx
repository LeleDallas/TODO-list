import { useEffect, useState } from 'react';
import Layout from './components/Layout/Layout'

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      localStorage.setItem('theme', JSON.stringify(isDark));
    }
    if (!localStorage.getItem('username')) {
      localStorage.setItem('username', "TODO User")
    }
    if (!localStorage.getItem('categories')) {
      localStorage.setItem('categories', JSON.stringify({}))
    }
  }, [])

  const storedUsername = localStorage.getItem('username');
  const [username, setUsername] = useState<string>(storedUsername !== null ? storedUsername : "TODO User")

  return <Layout username={username} setUsername={setUsername} />
}

export default App
