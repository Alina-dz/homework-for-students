/*
Отримання та відображення завдання з API:
Редагувати App компонент, 
який виконує запит до API https://jsonplaceholder.typicode.com/todos/1
і відображає дані завдання.

Вимоги:
- Використати useEffect для виконання запиту при першому рендері компонента.
- Створити три стани за допомогою useState:
    - task — для збереження отриманого завдання;
    - error — для обробки помилок при запиті;
    - loading — для індикації завантаження даних.
- Відобразити:
    - повідомлення про завантаження, коли loading === true;
    - повідомлення про помилку, якщо error не порожній;
    - інформацію про завдання, коли task успішно отриманий.
- Використати fetch для запиту до API.
*/

import React from 'react'
import './App.css'

function App() {
  // 1. Три стани за допомогою useState
  const [task, setTask] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // 2. Використання useEffect та fetch для запиту до API
  React.useEffect(() => {
    fetch('https://jsonplacheholder.typicode.com/todos/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Не вдалося завантажити дані');
        }
        return response.json();
      })
      .then((data) => {
        setTask(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 3. Відображення станів
  return (
    <div className='container'>
      <h1>React Homework</h1>

      {/* а) Повідомлення про завантаження */}
      {loading && <p>Завантаження...</p>}
      
      {/* б) Повідомлення про помилку */}
      {error && <p style={{ color: 'red' }}>Помилка: {error}</p>}

      {/* в) Інформація про завдання, коли воно успішно отримане */}
      {task && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h3>Завдання:</h3>
          <p><strong>ID:</strong> {task.id}</p>
          <p><strong>Назва:</strong> {task.title}</p>
          <p><strong>Статус:</strong> {task.completed ? 'Виконано' : 'Не виконано'}</p>
        </div>
      )}
  </div>
  )
}

export default App;

