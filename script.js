// Данные примеров из Java файлов
const examples = {
    deque: {
        title: "Deque (ArrayDeque) - Двусторонняя очередь",
        code: `import java.util.*;

public class DequeExample {
    public static void main(String[] args) {
        // Создание ArrayDeque
        Deque<String> deque = new ArrayDeque<>();
        
        // Добавление элементов с начала
        deque.addFirst("Второй");
        deque.addFirst("Первый");
        
        // Добавление элементов в конец
        deque.addLast("Третий");
        deque.addLast("Четвертый");
        
        System.out.println("Deque: " + deque);
        
        // Удаление с начала и конца
        System.out.println("Удален с начала: " + deque.removeFirst());
        System.out.println("Удален с конца: " + deque.removeLast());
        
        System.out.println("Deque после удаления: " + deque);
        
        // Просмотр без удаления
        System.out.println("Первый элемент: " + deque.peekFirst());
        System.out.println("Последний элемент: " + deque.peekLast());
    }
}`,
        output: `Deque: [Первый, Второй, Третий, Четвертый]
Удален с начала: Первый
Удален с конца: Четвертый
Deque после удаления: [Второй, Третий]
Первый элемент: Второй
Последний элемент: Третий`,
        explanation: `
            <p><strong>ArrayDeque</strong> - это реализация интерфейса Deque (double-ended queue), которая позволяет добавлять и удалять элементы с обеих сторон очереди.</p>
            <h4>Основные методы:</h4>
            <ul>
                <li><code>addFirst()</code> - добавить элемент в начало</li>
                <li><code>addLast()</code> - добавить элемент в конец</li>
                <li><code>removeFirst()</code> - удалить и вернуть первый элемент</li>
                <li><code>removeLast()</code> - удалить и вернуть последний элемент</li>
                <li><code>peekFirst()</code> - посмотреть первый элемент без удаления</li>
                <li><code>peekLast()</code> - посмотреть последний элемент без удаления</li>
            </ul>
            <p><strong>Применение:</strong> Стеки, очереди, отмена операций (undo), кэширование.</p>
        `
    },
    
    hashset: {
        title: "HashSet - Быстрое множество",
        code: `import java.util.*;

public class HashSetExample {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();
        
        // Добавление элементов
        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");
        set.add("Apple"); // Дубликат - не добавится
        
        System.out.println("HashSet: " + set);
        System.out.println("Размер: " + set.size());
        
        // Проверка наличия элемента
        System.out.println("Содержит Apple: " + set.contains("Apple"));
        System.out.println("Содержит Orange: " + set.contains("Orange"));
        
        // Удаление элемента
        set.remove("Banana");
        System.out.println("После удаления Banana: " + set);
        
        // Итерация
        System.out.println("Элементы:");
        for (String item : set) {
            System.out.println("- " + item);
        }
    }
}`,
        output: `HashSet: [Apple, Cherry, Banana]
Размер: 3
Содержит Apple: true
Содержит Orange: false
После удаления Banana: [Apple, Cherry]
Элементы:
- Apple
- Cherry`,
        explanation: `
            <p><strong>HashSet</strong> - реализация Set на основе хеш-таблицы. Не допускает дубликатов и не гарантирует порядок элементов.</p>
            <h4>Особенности:</h4>
            <ul>
                <li><strong>Время доступа:</strong> O(1) в среднем для add, remove, contains</li>
                <li><strong>Порядок:</strong> Не гарантируется</li>
                <li><strong>Null-значения:</strong> Допускает одно null значение</li>
                <li><strong>Потокобезопасность:</strong> Не потокобезопасен</li>
            </ul>
            <p><strong>Применение:</strong> Когда нужна быстрая проверка на принадлежность множеству.</p>
        `
    },
    
    linkedhashset: {
        title: "LinkedHashSet - HashSet с порядком",
        code: `import java.util.*;

public class LinkedHashSetExample {
    public static void main(String[] args) {
        Set<String> linkedHashSet = new LinkedHashSet<>();
        Set<String> hashSet = new HashSet<>();
        
        // Добавление элементов в том же порядке
        String[] items = {"Cherry", "Apple", "Banana", "Date"};
        
        for (String item : items) {
            linkedHashSet.add(item);
            hashSet.add(item);
        }
        
        System.out.println("LinkedHashSet (сохраняет порядок): " + linkedHashSet);
        System.out.println("HashSet (порядок не гарантирован): " + hashSet);
        
        // Попытка добавить дубликат
        linkedHashSet.add("Apple");
        System.out.println("После попытки добавить дубликат: " + linkedHashSet);
        
        // Удаление и добавление элемента
        linkedHashSet.remove("Banana");
        linkedHashSet.add("Orange");
        System.out.println("После удаления Banana и добавления Orange: " + linkedHashSet);
    }
}`,
        output: `LinkedHashSet (сохраняет порядок): [Cherry, Apple, Banana, Date]
HashSet (порядок не гарантирован): [Apple, Cherry, Date, Banana]
После попытки добавить дубликат: [Cherry, Apple, Banana, Date]
После удаления Banana и добавления Orange: [Cherry, Apple, Date, Orange]`,
        explanation: `
            <p><strong>LinkedHashSet</strong> - расширение HashSet, которое дополнительно поддерживает связанный список для сохранения порядка вставки.</p>
            <h4>Отличия от HashSet:</h4>
            <ul>
                <li><strong>Порядок:</strong> Сохраняет порядок вставки элементов</li>
                <li><strong>Производительность:</strong> Немного медленнее HashSet из-за поддержки порядка</li>
                <li><strong>Память:</strong> Использует больше памяти для хранения ссылок</li>
            </ul>
            <p><strong>Применение:</strong> Когда нужны уникальные элементы с сохранением порядка добавления.</p>
        `
    },
    
    treeset: {
        title: "TreeSet - Сортированное множество",
        code: `import java.util.*;

public class TreeSetExample {
    public static void main(String[] args) {
        TreeSet<Integer> treeSet = new TreeSet<>();
        
        // Добавление элементов в произвольном порядке
        treeSet.add(50);
        treeSet.add(30);
        treeSet.add(70);
        treeSet.add(20);
        treeSet.add(40);
        treeSet.add(60);
        treeSet.add(80);
        
        System.out.println("TreeSet (автоматически отсортирован): " + treeSet);
        
        // Навигационные методы
        System.out.println("Первый элемент: " + treeSet.first());
        System.out.println("Последний элемент: " + treeSet.last());
        System.out.println("Элементы меньше 50: " + treeSet.headSet(50));
        System.out.println("Элементы больше или равные 50: " + treeSet.tailSet(50));
        System.out.println("Элементы от 30 до 70: " + treeSet.subSet(30, 70));
        
        // Поиск ближайших элементов
        System.out.println("Наибольший элемент <= 45: " + treeSet.floor(45));
        System.out.println("Наименьший элемент >= 45: " + treeSet.ceiling(45));
    }
}`,
        output: `TreeSet (автоматически отсортирован): [20, 30, 40, 50, 60, 70, 80]
Первый элемент: 20
Последний элемент: 80
Элементы меньше 50: [20, 30, 40]
Элементы больше или равные 50: [50, 60, 70, 80]
Элементы от 30 до 70: [30, 40, 50, 60]
Наибольший элемент <= 45: 40
Наименьший элемент >= 45: 50`,
        explanation: `
            <p><strong>TreeSet</strong> - реализация SortedSet на основе красно-черного дерева. Автоматически поддерживает элементы в отсортированном порядке.</p>
            <h4>Особенности:</h4>
            <ul>
                <li><strong>Время операций:</strong> O(log n) для add, remove, contains</li>
                <li><strong>Сортировка:</strong> Естественный порядок или с помощью Comparator</li>
                <li><strong>Навигация:</strong> Методы для поиска ближайших элементов</li>
                <li><strong>Null-значения:</strong> Не допускает null</li>
            </ul>
            <p><strong>Применение:</strong> Когда нужно поддерживать отсортированное множество уникальных элементов.</p>
        `
    },
    
    hashmap: {
        title: "HashMap - Быстрая карта ключ-значение",
        code: `import java.util.*;

public class HashMapExample {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        
        // Добавление элементов
        map.put("Alice", 25);
        map.put("Bob", 30);
        map.put("Charlie", 35);
        map.put("Alice", 26); // Обновление значения
        
        System.out.println("HashMap: " + map);
        System.out.println("Возраст Alice: " + map.get("Alice"));
        
        // Проверка наличия ключа/значения
        System.out.println("Содержит ключ Bob: " + map.containsKey("Bob"));
        System.out.println("Содержит значение 30: " + map.containsValue(30));
        
        // Получение с значением по умолчанию
        System.out.println("Возраст David: " + map.getOrDefault("David", 0));
        
        // Итерация по ключам и значениям
        System.out.println("\\nВсе записи:");
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
        
        // Удаление
        map.remove("Charlie");
        System.out.println("\\nПосле удаления Charlie: " + map);
    }
}`,
        output: `HashMap: {Alice=26, Bob=30, Charlie=35}
Возраст Alice: 26
Содержит ключ Bob: true
Содержит значение 30: true
Возраст David: 0

Все записи:
Alice -> 26
Bob -> 30
Charlie -> 35

После удаления Charlie: {Alice=26, Bob=30}`,
        explanation: `
            <p><strong>HashMap</strong> - реализация Map на основе хеш-таблицы. Обеспечивает быстрый доступ к значениям по ключу.</p>
            <h4>Основные методы:</h4>
            <ul>
                <li><code>put(key, value)</code> - добавить/обновить пару ключ-значение</li>
                <li><code>get(key)</code> - получить значение по ключу</li>
                <li><code>getOrDefault(key, defaultValue)</code> - получить значение или значение по умолчанию</li>
                <li><code>containsKey(key)</code> - проверить наличие ключа</li>
                <li><code>remove(key)</code> - удалить пару по ключу</li>
            </ul>
            <p><strong>Производительность:</strong> O(1) в среднем для основных операций.</p>
        `
    },
    
    linkedhashmap: {
        title: "LinkedHashMap - HashMap с порядком",
        code: `import java.util.*;

public class LinkedHashMapExample {
    public static void main(String[] args) {
        // LinkedHashMap с порядком вставки
        Map<String, String> insertionOrder = new LinkedHashMap<>();
        
        // LinkedHashMap с порядком доступа
        Map<String, String> accessOrder = new LinkedHashMap<>(16, 0.75f, true);
        
        // Заполнение карт
        insertionOrder.put("C", "Third");
        insertionOrder.put("A", "First");
        insertionOrder.put("B", "Second");
        
        accessOrder.put("C", "Third");
        accessOrder.put("A", "First");  
        accessOrder.put("B", "Second");
        
        System.out.println("Порядок вставки: " + insertionOrder);
        System.out.println("До доступа: " + accessOrder);
        
        // Доступ к элементу "A" изменит порядок в accessOrder
        accessOrder.get("A");
        
        System.out.println("После доступа к A: " + accessOrder);
        
        // LRU Cache пример
        Map<String, String> lruCache = new LinkedHashMap<String, String>(3, 0.75f, true) {
            @Override
            protected boolean removeEldestEntry(Map.Entry<String, String> eldest) {
                return size() > 3; // Максимум 3 элемента
            }
        };
        
        lruCache.put("1", "One");
        lruCache.put("2", "Two");
        lruCache.put("3", "Three");
        System.out.println("\\nLRU Cache: " + lruCache);
        
        lruCache.put("4", "Four"); // Удалит самый старый элемент
        System.out.println("После добавления 4: " + lruCache);
    }
}`,
        output: `Порядок вставки: {C=Third, A=First, B=Second}
До доступа: {C=Third, A=First, B=Second}
После доступа к A: {C=Third, B=Second, A=First}

LRU Cache: {1=One, 2=Two, 3=Three}
После добавления 4: {2=Two, 3=Three, 4=Four}`,
        explanation: `
            <p><strong>LinkedHashMap</strong> - расширение HashMap, которое поддерживает порядок элементов.</p>
            <h4>Два режима:</h4>
            <ul>
                <li><strong>Порядок вставки (по умолчанию):</strong> Элементы итерируются в порядке добавления</li>
                <li><strong>Порядок доступа:</strong> Элементы перемещаются в конец при каждом доступе</li>
            </ul>
            <h4>Применения:</h4>
            <ul>
                <li><strong>LRU Cache:</strong> Кэш с удалением наименее используемых элементов</li>
                <li><strong>Предсказуемая итерация:</strong> Когда важен порядок обхода элементов</li>
            </ul>
        `
    },
    
    treemap: {
        title: "TreeMap - Сортированная карта",
        code: `import java.util.*;

public class TreeMapExample {
    public static void main(String[] args) {
        TreeMap<Integer, String> treeMap = new TreeMap<>();
        
        // Добавление элементов в произвольном порядке
        treeMap.put(30, "Thirty");
        treeMap.put(10, "Ten");
        treeMap.put(50, "Fifty");
        treeMap.put(20, "Twenty");
        treeMap.put(40, "Forty");
        
        System.out.println("TreeMap (автоматически отсортирована): " + treeMap);
        
        // Навигационные методы
        System.out.println("Первый ключ: " + treeMap.firstKey());
        System.out.println("Последний ключ: " + treeMap.lastKey());
        System.out.println("Ключи меньше 30: " + treeMap.headMap(30));
        System.out.println("Ключи >= 30: " + treeMap.tailMap(30));
        System.out.println("Ключи от 20 до 40: " + treeMap.subMap(20, 40));
        
        // Поиск ближайших ключей
        System.out.println("Наибольший ключ <= 25: " + treeMap.floorKey(25));
        System.out.println("Наименьший ключ >= 25: " + treeMap.ceilingKey(25));
        
        // Удаление первого и последнего элементов
        System.out.println("\\nУдален первый: " + treeMap.pollFirstEntry());
        System.out.println("Удален последний: " + treeMap.pollLastEntry());
        System.out.println("После удаления: " + treeMap);
    }
}`,
        output: `TreeMap (автоматически отсортирована): {10=Ten, 20=Twenty, 30=Thirty, 40=Forty, 50=Fifty}
Первый ключ: 10
Последний ключ: 50
Ключи меньше 30: {10=Ten, 20=Twenty}
Ключи >= 30: {30=Thirty, 40=Forty, 50=Fifty}
Ключи от 20 до 40: {20=Twenty, 30=Thirty}
Наибольший ключ <= 25: 20
Наименьший ключ >= 25: 30

Удален первый: 10=Ten
Удален последний: 50=Fifty
После удаления: {20=Twenty, 30=Thirty, 40=Forty}`,
        explanation: `
            <p><strong>TreeMap</strong> - реализация SortedMap на основе красно-черного дерева. Автоматически поддерживает ключи в отсортированном порядке.</p>
            <h4>Особенности:</h4>
            <ul>
                <li><strong>Время операций:</strong> O(log n) для основных операций</li>
                <li><strong>Сортировка:</strong> По естественному порядку ключей или с помощью Comparator</li>
                <li><strong>Навигация:</strong> Богатый набор методов для поиска и получения диапазонов</li>
                <li><strong>Null-ключи:</strong> Не допускает null ключи</li>
            </ul>
            <p><strong>Применение:</strong> Когда нужна отсортированная карта с возможностью навигации по ключам.</p>
        `
    },
    
    emergency: {
        title: "PriorityQueue - Очередь с приоритетом",
        code: `import java.util.*;

class Patient {
    String name;
    int priority; // 1 - критический, 5 - легкий
    
    Patient(String name, int priority) {
        this.name = name;
        this.priority = priority;
    }
    
    @Override
    public String toString() {
        return name + "(приоритет:" + priority + ")";
    }
}

public class EmergencyQueueExample {
    public static void main(String[] args) {
        // Очередь с приоритетом (меньший номер = высший приоритет)
        PriorityQueue<Patient> emergencyQueue = new PriorityQueue<>(
            Comparator.comparingInt(p -> p.priority)
        );
        
        // Поступление пациентов
        emergencyQueue.offer(new Patient("Джон", 3));
        emergencyQueue.offer(new Patient("Анна", 1)); // критическое состояние
        emergencyQueue.offer(new Patient("Боб", 4));
        emergencyQueue.offer(new Patient("Мария", 2));
        emergencyQueue.offer(new Patient("Том", 1)); // критическое состояние
        
        System.out.println("Очередь в отделении скорой помощи:");
        System.out.println("Размер очереди: " + emergencyQueue.size());
        
        // Обслуживание пациентов по приоритету
        System.out.println("\\nПорядок обслуживания:");
        while (!emergencyQueue.isEmpty()) {
            Patient patient = emergencyQueue.poll();
            System.out.println("Обслуживается: " + patient);
        }
        
        // Пример с числами
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        
        int[] numbers = {5, 2, 8, 1, 9, 3};
        
        for (int num : numbers) {
            minHeap.offer(num);
            maxHeap.offer(num);
        }
        
        System.out.println("\\nMin Heap (наименьший первый): " + minHeap);
        System.out.println("Max Heap (наибольший первый): " + maxHeap);
    }
}`,
        output: `Очередь в отделении скорой помощи:
Размер очереди: 5

Порядок обслуживания:
Обслуживается: Анна(приоритет:1)
Обслуживается: Том(приоритет:1)
Обслуживается: Мария(приоритет:2)
Обслуживается: Джон(приоритет:3)
Обслуживается: Боб(приоритет:4)

Min Heap (наименьший первый): [1, 2, 3, 5, 9, 8]
Max Heap (наибольший первый): [9, 5, 8, 1, 2, 3]`,
        explanation: `
            <p><strong>PriorityQueue</strong> - очередь, которая обслуживает элементы в порядке их приоритета, а не в порядке поступления.</p>
            <h4>Ключевые особенности:</h4>
            <ul>
                <li><strong>Структура данных:</strong> Двоичная куча (binary heap)</li>
                <li><strong>Время операций:</strong> O(log n) для offer/poll, O(1) для peek</li>
                <li><strong>Порядок:</strong> Определяется естественным порядком или Comparator</li>
                <li><strong>Итерация:</strong> Не гарантирует порядок при итерации</li>
            </ul>
            <h4>Применение:</h4>
            <ul>
                <li>Системы обработки задач с приоритетами</li>
                <li>Алгоритм Дейкстры поиска кратчайшего пути</li>
                <li>Планировщики операционных систем</li>
            </ul>
        `
    },
    
    concurrent: {
        title: "Concurrent Collections - Многопоточные коллекции",
        code: `import java.util.concurrent.*;
import java.util.*;

public class ConcurrentCollectionsExample {
    public static void main(String[] args) throws InterruptedException {
        // ConcurrentHashMap - потокобезопасная карта
        ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
        
        // ConcurrentLinkedQueue - потокобезопасная очередь
        ConcurrentLinkedQueue<String> concurrentQueue = new ConcurrentLinkedQueue<>();
        
        // CopyOnWriteArrayList - потокобезопасный список (для частого чтения)
        CopyOnWriteArrayList<String> copyOnWriteList = new CopyOnWriteArrayList<>();
        
        // Демонстрация ConcurrentHashMap
        concurrentMap.put("Counter", 0);
        
        // Атомарные операции
        concurrentMap.compute("Counter", (key, val) -> val + 1);
        concurrentMap.computeIfAbsent("NewKey", key -> 100);
        concurrentMap.merge("Counter", 5, Integer::sum);
        
        System.out.println("ConcurrentHashMap: " + concurrentMap);
        
        // Демонстрация ConcurrentLinkedQueue
        concurrentQueue.offer("Task1");
        concurrentQueue.offer("Task2");
        concurrentQueue.offer("Task3");
        
        System.out.println("ConcurrentLinkedQueue: " + concurrentQueue);
        System.out.println("Poll: " + concurrentQueue.poll());
        System.out.println("После poll: " + concurrentQueue);
        
        // Демонстрация CopyOnWriteArrayList
        copyOnWriteList.add("Item1");
        copyOnWriteList.add("Item2");
        copyOnWriteList.add("Item3");
        
        System.out.println("CopyOnWriteArrayList: " + copyOnWriteList);
        
        // Симуляция многопоточного доступа
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Потокобезопасное добавление в очередь
        for (int i = 0; i < 5; i++) {
            final int taskNum = i;
            executor.submit(() -> {
                concurrentQueue.offer("AsyncTask" + taskNum);
                System.out.println("Добавлена задача: AsyncTask" + taskNum);
            });
        }
        
        executor.shutdown();
        executor.awaitTermination(1, TimeUnit.SECONDS);
        
        System.out.println("Финальная очередь: " + concurrentQueue);
    }
}`,
        output: `ConcurrentHashMap: {NewKey=100, Counter=6}
ConcurrentLinkedQueue: [Task1, Task2, Task3]
Poll: Task1
После poll: [Task2, Task3]
CopyOnWriteArrayList: [Item1, Item2, Item3]
Добавлена задача: AsyncTask0
Добавлена задача: AsyncTask1
Добавлена задача: AsyncTask2
Добавлена задача: AsyncTask3
Добавлена задача: AsyncTask4
Финальная очередь: [Task2, Task3, AsyncTask0, AsyncTask1, AsyncTask2, AsyncTask3, AsyncTask4]`,
        explanation: `
            <p><strong>Concurrent Collections</strong> - специальные коллекции для безопасной работы в многопоточной среде.</p>
            <h4>Основные классы:</h4>
            <ul>
                <li><strong>ConcurrentHashMap:</strong> Потокобезопасная карта с сегментированной блокировкой</li>
                <li><strong>ConcurrentLinkedQueue:</strong> Неблокирующая потокобезопасная очередь</li>
                <li><strong>CopyOnWriteArrayList:</strong> Список для частого чтения, редкой записи</li>
                <li><strong>BlockingQueue:</strong> Очереди с блокировками (ArrayBlockingQueue, LinkedBlockingQueue)</li>
            </ul>
            <h4>Преимущества:</h4>
            <ul>
                <li>Высокая производительность в многопоточной среде</li>
                <li>Атомарные операции без внешней синхронизации</li>
                <li>Различные стратегии для разных сценариев использования</li>
            </ul>
        `
    },
    
    streams: {
        title: "Stream API - Функциональная обработка",
        code: `import java.util.*;
import java.util.stream.*;

class Product {
    String name;
    double price;
    String category;
    
    Product(String name, double price, String category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    
    @Override
    public String toString() {
        return name + "($" + price + ")";
    }
}

public class StreamAPIExample {
    public static void main(String[] args) {
        List<Product> products = Arrays.asList(
            new Product("Laptop", 999.99, "Electronics"),
            new Product("Coffee", 12.99, "Food"),
            new Product("Phone", 699.99, "Electronics"),
            new Product("Book", 29.99, "Education"),
            new Product("Tablet", 399.99, "Electronics"),
            new Product("Tea", 8.99, "Food")
        );
        
        System.out.println("Все продукты:");
        products.forEach(System.out::println);
        
        // Фильтрация: электроника дороже $500
        System.out.println("\\nЭлектроника дороже $500:");
        products.stream()
            .filter(p -> p.category.equals("Electronics"))
            .filter(p -> p.price > 500)
            .forEach(System.out::println);
        
        // Преобразование: названия продуктов в верхнем регистре
        System.out.println("\\nНазвания продуктов (верхний регистр):");
        products.stream()
            .map(p -> p.name.toUpperCase())
            .forEach(System.out::println);
        
        // Сортировка по цене
        System.out.println("\\nПродукты по возрастанию цены:");
        products.stream()
            .sorted(Comparator.comparing(p -> p.price))
            .forEach(System.out::println);
        
        // Группировка по категориям
        System.out.println("\\nГруппировка по категориям:");
        Map<String, List<Product>> byCategory = products.stream()
            .collect(Collectors.groupingBy(p -> p.category));
        byCategory.forEach((category, items) -> {
            System.out.println(category + ": " + items);
        });
        
        // Статистика цен
        DoubleSummaryStatistics priceStats = products.stream()
            .mapToDouble(p -> p.price)
            .summaryStatistics();
        
        System.out.println("\\nСтатистика цен:");
        System.out.println("Средняя цена: $" + String.format("%.2f", priceStats.getAverage()));
        System.out.println("Минимальная цена: $" + priceStats.getMin());
        System.out.println("Максимальная цена: $" + priceStats.getMax());
        System.out.println("Общая стоимость: $" + String.format("%.2f", priceStats.getSum()));
        
        // Поиск самого дорогого продукта
        Optional<Product> mostExpensive = products.stream()
            .max(Comparator.comparing(p -> p.price));
        
        mostExpensive.ifPresent(p -> 
            System.out.println("\\nСамый дорогой: " + p));
    }
}`,
        output: `Все продукты:
Laptop($999.99)
Coffee($12.99)
Phone($699.99)
Book($29.99)
Tablet($399.99)
Tea($8.99)

Электроника дороже $500:
Laptop($999.99)
Phone($699.99)

Названия продуктов (верхний регистр):
LAPTOP
COFFEE
PHONE
BOOK
TABLET
TEA

Продукты по возрастанию цены:
Tea($8.99)
Coffee($12.99)
Book($29.99)
Tablet($399.99)
Phone($699.99)
Laptop($999.99)

Группировка по категориям:
Education: [Book($29.99)]
Food: [Coffee($12.99), Tea($8.99)]
Electronics: [Laptop($999.99), Phone($699.99), Tablet($399.99)]

Статистика цен:
Средняя цена: $358.65
Минимальная цена: $8.99
Максимальная цена: $999.99
Общая стоимость: $2151.94

Самый дорогой: Laptop($999.99)`,
        explanation: `
            <p><strong>Stream API</strong> - мощный инструмент для функциональной обработки коллекций в Java 8+.</p>
            <h4>Основные операции:</h4>
            <ul>
                <li><strong>Промежуточные:</strong> filter(), map(), sorted(), distinct(), limit()</li>
                <li><strong>Терминальные:</strong> forEach(), collect(), reduce(), findFirst(), count()</li>
            </ul>
            <h4>Преимущества:</h4>
            <ul>
                <li><strong>Читаемость:</strong> Декларативный стиль программирования</li>
                <li><strong>Производительность:</strong> Ленивые вычисления и оптимизации</li>
                <li><strong>Параллелизм:</strong> Легкое распараллеливание с parallelStream()</li>
                <li><strong>Композиция:</strong> Цепочки операций</li>
            </ul>
            <p><strong>Применение:</strong> Обработка данных, фильтрация, агрегация, трансформации.</p>
        `
    },
    
    collections: {
        title: "Collections Utility - Полезные методы",
        code: `import java.util.*;

public class CollectionsUtilityExample {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(Arrays.asList(
            "Banana", "Apple", "Cherry", "Date", "Elderberry"
        ));
        
        System.out.println("Исходный список: " + list);
        
        // Сортировка
        Collections.sort(list);
        System.out.println("После сортировки: " + list);
        
        // Обратный порядок
        Collections.reverse(list);
        System.out.println("Обратный порядок: " + list);
        
        // Перемешивание
        Collections.shuffle(list);
        System.out.println("Перемешанный: " + list);
        
        // Поиск (список должен быть отсортирован)
        Collections.sort(list);
        int index = Collections.binarySearch(list, "Cherry");
        System.out.println("Cherry найден на позиции: " + index);
        
        // Замена всех элементов
        List<String> replaced = new ArrayList<>(list);
        Collections.fill(replaced, "X");
        System.out.println("Замена всех на X: " + replaced);
        
        // Копирование
        List<String> copy = new ArrayList<>(Collections.nCopies(list.size(), ""));
        Collections.copy(copy, list);
        System.out.println("Копия: " + copy);
        
        // Поворот
        Collections.rotate(list, 2);
        System.out.println("Поворот на 2 позиции: " + list);
        
        // Минимум и максимум
        System.out.println("Минимум: " + Collections.min(list));
        System.out.println("Максимум: " + Collections.max(list));
        
        // Частота элемента
        List<String> withDuplicates = Arrays.asList("A", "B", "A", "C", "A", "B");
        System.out.println("Частота A: " + Collections.frequency(withDuplicates, "A"));
        
        // Неизменяемые коллекции
        List<String> immutable = Collections.unmodifiableList(list);
        System.out.println("Неизменяемый список: " + immutable);
        
        // Синхронизированные коллекции
        List<String> synchronizedList = Collections.synchronizedList(new ArrayList<>());
        synchronizedList.add("Thread-safe item");
        System.out.println("Синхронизированный список: " + synchronizedList);
        
        // Пустые коллекции
        List<String> emptyList = Collections.emptyList();
        Set<String> emptySet = Collections.emptySet();
        Map<String, String> emptyMap = Collections.emptyMap();
        
        System.out.println("Пустые коллекции созданы: " + 
            emptyList.size() + ", " + emptySet.size() + ", " + emptyMap.size());
    }
}`,
        output: `Исходный список: [Banana, Apple, Cherry, Date, Elderberry]
После сортировки: [Apple, Banana, Cherry, Date, Elderberry]
Обратный порядок: [Elderberry, Date, Cherry, Banana, Apple]
Перемешанный: [Date, Apple, Elderberry, Cherry, Banana]
Cherry найден на позиции: 2
Замена всех на X: [X, X, X, X, X]
Копия: [Apple, Banana, Cherry, Date, Elderberry]
Поворот на 2 позиции: [Date, Elderberry, Apple, Banana, Cherry]
Минимум: Apple
Максимум: Elderberry
Частота A: 3
Неизменяемый список: [Date, Elderberry, Apple, Banana, Cherry]
Синхронизированный список: [Thread-safe item]
Пустые коллекции созданы: 0, 0, 0`,
        explanation: `
            <p><strong>Collections</strong> - утилитарный класс с полезными статическими методами для работы с коллекциями.</p>
            <h4>Категории методов:</h4>
            <ul>
                <li><strong>Сортировка:</strong> sort(), reverse(), shuffle(), rotate()</li>
                <li><strong>Поиск:</strong> binarySearch(), min(), max(), frequency()</li>
                <li><strong>Модификация:</strong> fill(), copy(), replaceAll()</li>
                <li><strong>Создание:</strong> emptyList(), singletonList(), nCopies()</li>
                <li><strong>Обертки:</strong> unmodifiableList(), synchronizedList()</li>
            </ul>
            <h4>Важные концепции:</h4>
            <ul>
                <li><strong>Неизменяемые коллекции:</strong> Защита от случайных изменений</li>
                <li><strong>Синхронизированные коллекции:</strong> Потокобезопасность</li>
                <li><strong>Пустые коллекции:</strong> Избежание null значений</li>
            </ul>
        `
    },
    
    comparator: {
        title: "Comparator - Сравнение и сортировка",
        code: `import java.util.*;
import java.util.stream.Collectors;

class Student {
    String name;
    int age;
    double gpa;
    String major;
    
    Student(String name, int age, double gpa, String major) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
        this.major = major;
    }
    
    @Override
    public String toString() {
        return String.format("%s (возраст: %d, GPA: %.1f, специальность: %s)", 
                           name, age, gpa, major);
    }
}

public class ComparatorExample {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
            new Student("Анна", 20, 3.8, "Computer Science"),
            new Student("Боб", 22, 3.2, "Mathematics"),
            new Student("Чарли", 19, 3.9, "Physics"),
            new Student("Диана", 21, 3.7, "Computer Science"),
            new Student("Эван", 20, 3.5, "Mathematics")
        );
        
        System.out.println("Исходный список студентов:");
        students.forEach(System.out::println);
        
        // Сортировка по возрасту
        System.out.println("\\nСортировка по возрасту:");
        students.stream()
            .sorted(Comparator.comparingInt(s -> s.age))
            .forEach(System.out::println);
        
        // Сортировка по GPA (по убыванию)
        System.out.println("\\nСортировка по GPA (убывание):");
        students.stream()
            .sorted(Comparator.comparingDouble((Student s) -> s.gpa).reversed())
            .forEach(System.out::println);
        
        // Составная сортировка: сначала по специальности, потом по GPA
        System.out.println("\\nСортировка по специальности, затем по GPA:");
        students.stream()
            .sorted(Comparator.comparing((Student s) -> s.major)
                             .thenComparing(s -> s.gpa, Comparator.reverseOrder()))
            .forEach(System.out::println);
        
        // Null-безопасная сортировка
        List<Student> studentsWithNull = new ArrayList<>(students);
        studentsWithNull.add(null);
        
        System.out.println("\\nNull-безопасная сортировка по имени:");
        studentsWithNull.stream()
            .sorted(Comparator.nullsLast(Comparator.comparing(s -> s.name)))
            .forEach(s -> System.out.println(s == null ? "null" : s));
        
        // Поиск экстремумов
        Optional<Student> youngest = students.stream()
            .min(Comparator.comparingInt(s -> s.age));
        
        Optional<Student> bestGPA = students.stream()
            .max(Comparator.comparingDouble(s -> s.gpa));
        
        youngest.ifPresent(s -> System.out.println("\\nСамый молодой: " + s));
        bestGPA.ifPresent(s -> System.out.println("Лучший GPA: " + s));
        
        // Группировка с сортировкой
        System.out.println("\\nСтуденты по специальностям (отсортированы по GPA):");
        students.stream()
            .collect(Collectors.groupingBy(s -> s.major,
                    Collectors.toList()))
            .forEach((major, studentList) -> {
                System.out.println(major + ":");
                studentList.stream()
                    .sorted(Comparator.comparingDouble((Student s) -> s.gpa).reversed())
                    .forEach(s -> System.out.println("  " + s));
            });
    }
}`,
        output: `Исходный список студентов:
Анна (возраст: 20, GPA: 3.8, специальность: Computer Science)
Боб (возраст: 22, GPA: 3.2, специальность: Mathematics)
Чарли (возраст: 19, GPA: 3.9, специальность: Physics)
Диана (возраст: 21, GPA: 3.7, специальность: Computer Science)
Эван (возраст: 20, GPA: 3.5, специальность: Mathematics)

Сортировка по возрасту:
Чарли (возраст: 19, GPA: 3.9, специальность: Physics)
Анна (возраст: 20, GPA: 3.8, специальность: Computer Science)
Эван (возраст: 20, GPA: 3.5, специальность: Mathematics)
Диана (возраст: 21, GPA: 3.7, специальность: Computer Science)
Боб (возраст: 22, GPA: 3.2, специальность: Mathematics)

Сортировка по GPA (убывание):
Чарли (возраст: 19, GPA: 3.9, специальность: Physics)
Анна (возраст: 20, GPA: 3.8, специальность: Computer Science)
Диана (возраст: 21, GPA: 3.7, специальность: Computer Science)
Эван (возраст: 20, GPA: 3.5, специальность: Mathematics)
Боб (возраст: 22, GPA: 3.2, специальность: Mathematics)

Сортировка по специальности, затем по GPA:
Анна (возраст: 20, GPA: 3.8, специальность: Computer Science)
Диана (возраст: 21, GPA: 3.7, специальность: Computer Science)
Эван (возраст: 20, GPA: 3.5, специальность: Mathematics)
Боб (возраст: 22, GPA: 3.2, специальность: Mathematics)
Чарли (возраст: 19, GPA: 3.9, специальность: Physics)

Null-безопасная сортировка по имени:
Анна (возраст: 20, GPA: 3.8, специальность: Computer Science)
Боб (возраст: 22, GPA: 3.2, специальность: Mathematics)
Диана (возраст: 21, GPA: 3.7, специальность: Computer Science)
Эван (возраст: 20, GPA: 3.5, специальность: Mathematics)
Чарли (возраст: 19, GPA: 3.9, специальность: Physics)
null

Самый молодой: Чарли (возраст: 19, GPA: 3.9, специальность: Physics)
Лучший GPA: Чарли (возраст: 19, GPA: 3.9, специальность: Physics)

Студенты по специальностям (отсортированы по GPA):
Physics:
  Чарли (возраст: 19, GPA: 3.9, специальность: Physics)
Computer Science:
  Анна (возраст: 20, GPA: 3.8, специальность: Computer Science)
  Диана (возраст: 21, GPA: 3.7, специальность: Computer Science)
Mathematics:
  Эван (возраст: 20, GPA: 3.5, специальность: Mathematics)
  Боб (возраст: 22, GPA: 3.2, специальность: Mathematics)`,
        explanation: `
            <p><strong>Comparator</strong> - функциональный интерфейс для определения порядка сортировки объектов.</p>
            <h4>Основные методы создания:</h4>
            <ul>
                <li><code>comparing()</code> - сравнение по ключу</li>
                <li><code>comparingInt/Double/Long()</code> - для примитивов</li>
                <li><code>naturalOrder()</code> - естественный порядок</li>
                <li><code>reverseOrder()</code> - обратный порядок</li>
            </ul>
            <h4>Комбинирование:</h4>
            <ul>
                <li><code>thenComparing()</code> - дополнительные критерии</li>
                <li><code>reversed()</code> - обращение порядка</li>
                <li><code>nullsFirst/Last()</code> - обработка null значений</li>
            </ul>
            <h4>Применение:</h4>
            <ul>
                <li>Сложная многоуровневая сортировка</li>
                <li>Поиск минимума/максимума</li>
                <li>Сортировка в Stream API</li>
            </ul>
        `
    }
};

// Управление вкладками
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const modal = document.getElementById('output-modal');
    const closeBtn = document.querySelector('.close');
    const runButtons = document.querySelectorAll('.run-example');

    // Переключение вкладок
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            
            // Убираем активные классы
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Добавляем активные классы
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Обработка кнопок запуска примеров
    runButtons.forEach(button => {
        button.addEventListener('click', () => {
            const exampleType = button.closest('.example-card').dataset.example;
            showExample(exampleType);
        });
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    function showExample(exampleType) {
        const example = examples[exampleType];
        if (!example) return;

        document.getElementById('modal-title').textContent = example.title;
        document.getElementById('source-code').textContent = example.code;
        document.getElementById('program-output').textContent = example.output;
        document.getElementById('explanation').innerHTML = example.explanation;

        modal.style.display = 'block';
    }
});

