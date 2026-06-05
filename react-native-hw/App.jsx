/*
Динамічне отримання та відображення списку завдань:
Напишіть код прямо у Expo Snack (https://snack.expo.dev/) 
та після перевірки вставте результат у ваш поточний файл.

Вимоги:
- Використати React Native компоненти:
    - TextInput для введення числа — кількості завдань для запиту;
    - Button для виконання запиту;
    - FlatList для відображення списку завдань.
- Керувати станом за допомогою useState та useEffect:
    - tasks — масив отриманих завдань;
    - error — для обробки помилок.
    - loading — для індикації завантаження;
- При натисканні кнопки робити запит на API https://jsonplaceholder.typicode.com/todos?_limit=<число з TextInput> та оновлювати список tasks.
  Приклад запиту: якщо у TextInput введено 5, URL буде https://jsonplaceholder.typicode.com/todos?_limit=5
- Відобразити:
    - повідомлення про завантаження, коли loading === true;
    - повідомлення про помилку, якщо error не порожній;
    - список завдань через FlatList, показуючи title кожного елемента.
*/

export default function App() {
  // Стани за умовою завдання
  const [tasks, setTasks] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  // Додатковий стан для збереження введеного числа
  const [count, setCount] = React.useState('');

  // Ефект, який буде спрацьовувати для запиту
  React.useEffect(() => {
    if (loading) {
      fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${count}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Помилка сервера');
          }
          return response.json();
        })
        .then((data) => {
          setTasks(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [loading]);

  // Функція для кнопки
  const handlePress = () => {
    setError(null);
    setLoading(true);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Завдання</Text>

      {/* TextInput для введення числа */}
      <TextInput
        style={styles.input}
        placeholder="Введіть кількість"
        keyboardType="numeric"
        value={count}
        onChangeText={(text) => setCount(text)}
      />

      {/* Button для виконання запиту */}
      <Button title="Отримати завдання" onPress={handlePress} />

      {/* а) повідомлення про завантаження, коли loading === true */}
      {loading && <Text>Завантаження...</Text>}

      {/* б) повідомлення про помилку, якщо error не порожній */}
      {error && <Text style={{ color: 'red' }}>Помилка: {error}</Text>}

      {/* в) список завдань через FlatList */}
      {!loading && !error && (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});