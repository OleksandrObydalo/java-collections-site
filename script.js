// Language translations
const translations = {
    en: {
        deque: {
            title: "Deque (ArrayDeque) - Double-ended queue",
            explanation: `
                <p><strong>ArrayDeque</strong> is an implementation of the Deque interface (double-ended queue) that allows adding and removing elements from both ends of the queue.</p>
                <h4>Main methods:</h4>
                <ul>
                    <li><code>addFirst()</code> - add element to the beginning</li>
                    <li><code>addLast()</code> - add element to the end</li>
                    <li><code>removeFirst()</code> - remove and return first element</li>
                    <li><code>removeLast()</code> - remove and return last element</li>
                    <li><code>peekFirst()</code> - view first element without removal</li>
                    <li><code>peekLast()</code> - view last element without removal</li>
                </ul>
                <p><strong>Applications:</strong> Stacks, queues, undo operations, caching.</p>
            `
        },
        hashset: {
            title: "HashSet - Fast set",
            explanation: `
                <p><strong>HashSet</strong> is a Set implementation based on hash table. It doesn't allow duplicates and doesn't guarantee element order.</p>
                <h4>Features:</h4>
                <ul>
                    <li><strong>Access time:</strong> O(1) average for add, remove, contains</li>
                    <li><strong>Order:</strong> Not guaranteed</li>
                    <li><strong>Null values:</strong> Allows one null value</li>
                    <li><strong>Thread safety:</strong> Not thread-safe</li>
                </ul>
                <p><strong>Application:</strong> When fast membership checking is needed.</p>
            `
        }
    },
    uk: {
        deque: {
            title: "Deque (ArrayDeque) - Двостороння черга",
            explanation: `
                <p><strong>ArrayDeque</strong> - це реалізація інтерфейсу Deque (double-ended queue), яка дозволяє додаватта та втадалятта елементта з обох кінців чергта.</p>
                <h4>Основні методта:</h4>
                <ul>
                    <li><code>addFirst()</code> - додатта елемент на початок</li>
                    <li><code>addLast()</code> - додатта елемент в кінець</li>
                    <li><code>removeFirst()</code> - втадалтатта та повернутта перштай елемент</li>
                    <li><code>removeLast()</code> - втадалтатта та повернутта останній елемент</li>
                    <li><code>peekFirst()</code> - подтавтаттася перштай елемент без Видалення</li>
                    <li><code>peekLast()</code> - подтавтаттася останній елемент без Видалення</li>
                </ul>
                <p><strong>Застосування:</strong> Стекта, чергта, скасування операцій (undo), кешування.</p>
            `
        },
        hashset: {
            title: "HashSet - Швтадка множтана",
            explanation: `
                <p><strong>HashSet</strong> - реалізація Set на основі хеш-таблтаці. Не допускає дублікатів і не гарантує порядок елементів.</p>
                <h4>Особлтавості:</h4>
                <ul>
                    <li><strong>Час доступу:</strong> O(1) в середньому для add, remove, contains</li>
                    <li><strong>Порядок:</strong> Не гарантується</li>
                    <li><strong>Null-значення:</strong> Допускає одне null значення</li>
                    <li><strong>Потокобезпека:</strong> Не потокобезпечнтай</li>
                </ul>
                <p><strong>Застосування:</strong> Колта потрібна швтадка перевірка на належність множтані.</p>
            `
        }
    },
    de: {
        deque: {
            title: "Deque (ArrayDeque) - Doppelseitige Warteschlange",
            explanation: `
                <p><strong>ArrayDeque</strong> ist eine Implementierung des Deque-Interfaces (double-ended queue), die das Hinzufügen und Entfernen von Elementen an beiden Enden der Warteschlange ermöglicht.</p>
                <h4>Hauptmethoden:</h4>
                <ul>
                    <li><code>addFirst()</code> - Element am Anfang hinzufügen</li>
                    <li><code>addLast()</code> - Element am Ende hinzufügen</li>
                    <li><code>removeFirst()</code> - erstes Element entfernen und zurückgeben</li>
                    <li><code>removeLast()</code> - letztes Element entfernen und zurückgeben</li>
                    <li><code>peekFirst()</code> - erstes Element anzeigen ohne Entfernung</li>
                    <li><code>peekLast()</code> - letztes Element anzeigen ohne Entfernung</li>
                </ul>
                <p><strong>Anwendungen:</strong> Stapel, Warteschlangen, Rückgängig-Operationen, Zwischenspeicherung.</p>
            `
        },
        hashset: {
            title: "HashSet - Schnelle Menge",
            explanation: `
                <p><strong>HashSet</strong> ist eine Set-Implementierung basierend auf Hash-Tabelle. Sie erlaubt keine Duplikate und garantiert keine Elementreihenfolge.</p>
                <h4>Eigenschaften:</h4>
                <ul>
                    <li><strong>Zugriffszeit:</strong> O(1) durchschnittlich für add, remove, contains</li>
                    <li><strong>Reihenfolge:</strong> Nicht garantiert</li>
                    <li><strong>Null-Werte:</strong> Erlaubt einen null-Wert</li>
                    <li><strong>Thread-Sicherheit:</strong> Nicht thread-sicher</li>
                </ul>
                <p><strong>Anwendung:</strong> Wenn schnelle Mitgliedschaftsprüfung benötigt wird.</p>
            `
        }
    }
};

// Current language
let currentLanguage = 'en';

// Дані пртакладів з Java файлів
const examples = {
    deque: {
        title: "Deque (ArrayDeque) - Двостороння черга",
        code: `import java.util.*;

public class DequeExample {
    public static void main(String[] args) {
        // Створення ArrayDeque
        Deque<String> deque = new ArrayDeque<>();
        
        // Додавання елементів з початку
        deque.addFirst("Другій");
        deque.addFirst("Перштай");
        
        // Додавання елементів в конец
        deque.addLast("Третій");
        deque.addLast("Четверттай");
        
        System.out.println("Deque: " + deque);
        
        // Видалення з початку та кінця
        System.out.println("Втадалено з початку: " + deque.removeFirst());
        System.out.println("Втадалено з кінця: " + deque.removeLast());
        
        System.out.println("Deque після Видалення: " + deque);
        
        // Перегляд без Видалення
        System.out.println("Першій елемент: " + deque.peekFirst());
        System.out.println("Останній елемент: " + deque.peekLast());
    }
}`,
        output: `Deque: [Перщій, Другій, Третій, Четверттай]
Втадалено з початку: Першій
Втадалено з кінця: Четверттай
Deque після Видалення: [Другій, Третій]
Перштай елемент: Другій
Останній елемент: Третій`,
        explanation: `
            <p><strong>ArrayDeque</strong> - це реалізація інтерфейсу Deque (double-ended queue), яка дозволяє додаватта та втадалятта елементта з обох сторін чергта.</p>
            <h4>Основні методта:</h4>
            <ul>
                <li><code>addFirst()</code> - добавтатта элемент на початок</li>
                <li><code>addLast()</code> - добавтатта элемент в конець</li>
                <li><code>removeFirst()</code> - втадалтатта та повернутта перштай элемент</li>
                <li><code>removeLast()</code> - втадалтатта та повернутта останній элемент</li>
                <li><code>peekFirst()</code> - подтавтаттася перштай элемент без Видалення</li>
                <li><code>peekLast()</code> - подтавтаттася останній элемент без Видалення</li>
            </ul>
            <p><strong>Застосування:</strong> Стекта, чергта, скасування операцій (undo), кешування.</p>
        `
    },
    
    hashset: {
        title: "HashSet - Швтадка множена",
        code: `import java.util.*;

public class HashSetExample {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();
        
        // Додавання елементів
        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");
        set.add("Apple"); // Дублтакат - не добавтатся
        
        System.out.println("HashSet: " + set);
        System.out.println("Розмір: " + set.size());
        
        // Перевірка наявності елемента
        System.out.println("Місттать Apple: " + set.contains("Apple"));
        System.out.println("Місттать Orange: " + set.contains("Orange"));
        
        // Видалення элемента
        set.remove("Banana");
        System.out.println("Після Видалення Banana: " + set);
        
        // татерацтая
        System.out.println("Елементта:");
        for (String item : set) {
            System.out.println("- " + item);
        }
    }
}`,
        output: `HashSet: [Apple, Cherry, Banana]
Розмір: 3
Місттать Apple: true
Місттать Orange: false
Після Видалення Banana: [Apple, Cherry]
Елементта:
- Apple
- Cherry`,
        explanation: `
            <p><strong>HashSet</strong> - реалізація на основі хеш-таблтаці. Не допускає дублікатів та не гарантує порядок елементів.</p>
            <h4>Особенността:</h4>
            <ul>
                <li><strong>Час доступу:</strong> O(1) в среднем для add, remove, contains</li>
                <li><strong>Порядок:</strong> Не гарантуется</li>
                <li><strong>Null-значентая:</strong> Допускає одно null значення</li>
                <li><strong>Потокобезопасность:</strong> Не потокобезпечнтай</li>
            </ul>
            <p><strong>Застосування:</strong> Колта потрібна швтадка перевірка на пртаналежність до множента.</p>
        `
    },
    
    linkedhashset: {
        title: "LinkedHashSet - HashSet с порядком",
        code: `import java.util.*;

public class LinkedHashSetExample {
    public static void main(String[] args) {
        Set<String> linkedHashSet = new LinkedHashSet<>();
        Set<String> hashSet = new HashSet<>();
        
        // Додавання елементів в том же порядке
        String[] items = {"Cherry", "Apple", "Banana", "Date"};
        
        for (String item : items) {
            linkedHashSet.add(item);
            hashSet.add(item);
        }
        
        System.out.println("LinkedHashSet (зберігає порядок): " + linkedHashSet);
        System.out.println("HashSet (порядок не гарантован): " + hashSet);
        
        // Попытка добавтать дублтакат
        linkedHashSet.add("Apple");
        System.out.println("Після спробта додатта дублікат: " + linkedHashSet);
        
        // Видалення та додавання элемента
        linkedHashSet.remove("Banana");
        linkedHashSet.add("Orange");
        System.out.println("Після Видалення Banana та додавання Orange: " + linkedHashSet);
    }
}`,
        output: `LinkedHashSet (зберігає порядок): [Cherry, Apple, Banana, Date]
HashSet (порядок не гарантован): [Apple, Cherry, Date, Banana]
Після спробта додатта дублікат: [Cherry, Apple, Banana, Date]
Після Видалення Banana та додавання Orange: [Cherry, Apple, Date, Orange]`,
        explanation: `
            <p><strong>LinkedHashSet</strong> - це розширення HashSet, яке додатково підтримує пов'язаний спиасок для збереження порядку вставки..</p>
            <h4>Отлтачтая от HashSet:</h4>
            <ul>
                <li><strong>Порядок:</strong> зберігає порядок вставкта элементов</li>
                <li><strong>Протазводтательность:</strong> Трохи повільніший за HashSet через підтримку порядку</li>
                <li><strong>Пам’ять:</strong> використовує більше пам’яті для збереження посилань</li>
            </ul>
            <p><strong>Застосування:</strong> Коли потрібні унікальні елементи зі збереженням порядку додавання.</p>
        `
    },
    
   treeset: {
    title: "TreeSet - Відсортована множина",
    code: `import java.util.*;

public class TreeSetExample {
    public static void main(String[] args) {
        TreeSet<Integer> treeSet = new TreeSet<>();

        // Додавання елементів у довільному порядку
        treeSet.add(50);
        treeSet.add(30);
        treeSet.add(70);
        treeSet.add(20);
        treeSet.add(40);
        treeSet.add(60);
        treeSet.add(80);

        System.out.println("TreeSet (автоматично відсортований): " + treeSet);

        // Навігаційні методи
        System.out.println("Перший елемент: " + treeSet.first());
        System.out.println("Останній елемент: " + treeSet.last());
        System.out.println("Елементи менші за 50: " + treeSet.headSet(50));
        System.out.println("Елементи >= 50: " + treeSet.tailSet(50));
        System.out.println("Елементи від 30 до 70: " + treeSet.subSet(30, 70));

        // Пошук найближчих елементів
        System.out.println("Найбільший елемент <= 45: " + treeSet.floor(45));
        System.out.println("Найменший елемент >= 45: " + treeSet.ceiling(45));
    }
}`,
    output: `TreeSet (автоматично відсортований): [20, 30, 40, 50, 60, 70, 80]
Перший елемент: 20
Останній елемент: 80
Елементи менші за 50: [20, 30, 40]
Елементи >= 50: [50, 60, 70, 80]
Елементи від 30 до 70: [30, 40, 50, 60]
Найбільший елемент <= 45: 40
Найменший елемент >= 45: 50`,
    explanation: `
        <p><strong>TreeSet</strong> — це реалізація SortedSet на основі червоно-чорного дерева. Автоматично підтримує елементи у відсортованому порядку.</p>
        <h4>Особливості:</h4>
        <ul>
            <li><strong>Час операцій:</strong> O(log n) для add, remove, contains</li>
            <li><strong>Сортування:</strong> Природний порядок або з використанням Comparator</li>
            <li><strong>Навігація:</strong> Методи для пошуку найближчих елементів</li>
            <li><strong>Null-значення:</strong> Не допускає null</li>
        </ul>
        <p><strong>Застосування:</strong> Коли потрібно підтримувати відсортовану множину унікальних елементів.</p>
    `
},
    hashmap: {
        title: "HashMap - Быстрая карта ключ-значення",
        code: `import java.util.*;

public class HashMapExample {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        
        // Додавання елементів
        map.put("Alice", 25);
        map.put("Bob", 30);
        map.put("Charlie", 35);
        map.put("Alice", 26); // Обновлентае значентая
        
        System.out.println("HashMap: " + map);
        System.out.println("Возраст Alice: " + map.get("Alice"));
        
        // Проверка налтачтая ключа/значентая
        System.out.println("Місттать ключ Bob: " + map.containsKey("Bob"));
        System.out.println("Місттать значення 30: " + map.containsValue(30));
        
        // Получентае с значенням по умолчантаю
        System.out.println("Возраст David: " + map.getOrDefault("David", 0));
        
        // татерацтая по ключам та значентаям
        System.out.println("\\nВсе заптаста:");
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
        
        // Видалення
        map.remove("Charlie");
        System.out.println("\\nПісля Видалення Charlie: " + map);
    }
}`,
        output: `HashMap: {Alice=26, Bob=30, Charlie=35}
Возраст Alice: 26
Місттать ключ Bob: true
Місттать значення 30: true
Возраст David: 0

Все заптаста:
Alice -> 26
Bob -> 30
Charlie -> 35

Після Видалення Charlie: {Alice=26, Bob=30}`,
        explanation: `
            <p><strong>HashMap</strong> - реалтазацтая Map на основе хеш-таблтацы. Обеспечтавает быстрый доступ к значентаям по ключу.</p>
            <h4>Основные методы:</h4>
            <ul>
                <li><code>put(key, value)</code> - добавтать/обновтать пару ключ-значення</li>
                <li><code>get(key)</code> - получтать значення по ключу</li>
                <li><code>getOrDefault(key, defaultValue)</code> - получтать значення талта значення по умолчантаю</li>
                <li><code>containsKey(key)</code> - провертать налтачтае ключа</li>
                <li><code>remove(key)</code> - втадалтатта пару по ключу</li>
            </ul>
            <p><strong>Протазводтательность:</strong> O(1) в среднем для основных операцтай.</p>
        `
    },
    
    linkedhashmap: {
        title: "LinkedHashMap - HashMap с порядком",
        code: `import java.util.*;

public class LinkedHashMapExample {
    public static void main(String[] args) {
        // LinkedHashMap с порядком вставкта
        Map<String, String> insertionOrder = new LinkedHashMap<>();
        
        // LinkedHashMap с порядком доступа
        Map<String, String> accessOrder = new LinkedHashMap<>(16, 0.75f, true);
        
        // Заполнентае карт
        insertionOrder.put("C", "Third");
        insertionOrder.put("A", "First");
        insertionOrder.put("B", "Second");
        
        accessOrder.put("C", "Third");
        accessOrder.put("A", "First");  
        accessOrder.put("B", "Second");
        
        System.out.println("Порядок вставлення: " + insertionOrder);
        System.out.println("До доступа: " + accessOrder);
        
        // Доступ к элементу "A" тазментат порядок в accessOrder
        accessOrder.get("A");
        
        System.out.println("После доступа к A: " + accessOrder);
        
        // LRU Cache пртамер
        Map<String, String> lruCache = new LinkedHashMap<String, String>(3, 0.75f, true) {
            @Override
            protected boolean removeEldestEntry(Map.Entry<String, String> eldest) {
                return size() > 3; // Макстамум 3 элемента
            }
        };
        
        lruCache.put("1", "One");
        lruCache.put("2", "Two");
        lruCache.put("3", "Three");
        System.out.println("\\nLRU Cache: " + lruCache);
        
        lruCache.put("4", "Four"); // Удалтат самый старый элемент
        System.out.println("После додавання 4: " + lruCache);
    }
}`,
        output: `Порядок вставлення: {C=Third, A=First, B=Second}
До доступа: {C=Third, A=First, B=Second}
После доступа к A: {C=Third, B=Second, A=First}

LRU Cache: {1=One, 2=Two, 3=Three}
После додавання 4: {2=Two, 3=Three, 4=Four}`,
        explanation: `
            <p><strong>LinkedHashMap</strong> - расштарентае HashMap, которое поддержтавает порядок элементов.</p>
            <h4>Два режтама:</h4>
            <ul>
                <li><strong>Порядок вставлення (по умолчантаю):</strong> Елементта татертаруются в порядке додавання</li>
                <li><strong>Порядок доступа:</strong> Елементта перемещаются в конец прта каждом доступе</li>
            </ul>
            <h4>Пртаменентая:</h4>
            <ul>
                <li><strong>LRU Cache:</strong> Кэш с Видаленням натаменее таспользуемых элементов</li>
                <li><strong>Предсказуемая татерацтая:</strong> Когда важен порядок обхода элементов</li>
            </ul>
        `
    },
    
    treemap: {
        title: "TreeMap - Сорттарованная карта",
        code: `import java.util.*;

public class TreeMapExample {
    public static void main(String[] args) {
        TreeMap<Integer, String> treeMap = new TreeMap<>();
        
        // Додавання елементів в протазвольном порядке
        treeMap.put(30, "Thirty");
        treeMap.put(10, "Ten");
        treeMap.put(50, "Fifty");
        treeMap.put(20, "Twenty");
        treeMap.put(40, "Forty");
        
        System.out.println("TreeMap (автоматтаческта отсорттарована): " + treeMap);
        
        // Навтагацтаонные методы
        System.out.println("перштай ключ: " + treeMap.firstKey());
        System.out.println("останній ключ: " + treeMap.lastKey());
        System.out.println("Ключта меньше 30: " + treeMap.headMap(30));
        System.out.println("Ключта >= 30: " + treeMap.tailMap(30));
        System.out.println("Ключта от 20 до 40: " + treeMap.subMap(20, 40));
        
        // Потаск блтажайштах ключей
        System.out.println("Натабольштай ключ <= 25: " + treeMap.floorKey(25));
        System.out.println("Натаменьштай ключ >= 25: " + treeMap.ceilingKey(25));
        
        // Видалення первого та последнего элементов
        System.out.println("\\nУдален перштай: " + treeMap.pollFirstEntry());
        System.out.println("Удален останній: " + treeMap.pollLastEntry());
        System.out.println("Після Видалення: " + treeMap);
    }
}`,
        output: `TreeMap (автоматтаческта отсорттарована): {10=Ten, 20=Twenty, 30=Thirty, 40=Forty, 50=Fifty}
перштай ключ: 10
останній ключ: 50
Ключта меньше 30: {10=Ten, 20=Twenty}
Ключта >= 30: {30=Thirty, 40=Forty, 50=Fifty}
Ключта от 20 до 40: {20=Twenty, 30=Thirty}
Натабольштай ключ <= 25: 20
Натаменьштай ключ >= 25: 30

Удален перштай: 10=Ten
Удален останній: 50=Fifty
Після Видалення: {20=Twenty, 30=Thirty, 40=Forty}`,
        explanation: `
            <p><strong>TreeMap</strong> - реалтазацтая SortedMap на основе красно-черного дерева. Автоматтаческта поддержтавает ключта в отсорттарованном порядке.</p>
            <h4>Особенността:</h4>
            <ul>
                <li><strong>Время операцтай:</strong> O(log n) для основных операцтай</li>
                <li><strong>Сорттаровка:</strong> По естественному порядку ключей талта с помощью Comparator</li>
                <li><strong>Навтагацтая:</strong> Богатый набор методов для потаска блтажайштах элементов</li>
                <li><strong>Null-ключта:</strong> Не Допускає null ключта</li>
            </ul>
            <p><strong>Застосування:</strong> Когда нужна отсорттарованная карта с возможностью навтагацтата по ключам.</p>
        `
    },
    
    emergency: {
        title: "PriorityQueue - Очередь с пртаортатетом",
        code: `import java.util.*;

class Patient {
    String name;
    int priority; // 1 - кртаттаческтай, 5 - легктай
    
    Patient(String name, int priority) {
        this.name = name;
        this.priority = priority;
    }
    
    @Override
    public String toString() {
        return name + "(пртаортатет:" + priority + ")";
    }
}

public class EmergencyQueueExample {
    public static void main(String[] args) {
        // Очередь с пртаортатетом (меньштай номер = высштай пртаортатет)
        PriorityQueue<Patient> emergencyQueue = new PriorityQueue<>(
            Comparator.comparingInt(p -> p.priority)
        );
        
        // Поступлентае пацтаентов
        emergencyQueue.offer(new Patient("Джон", 3));
        emergencyQueue.offer(new Patient("Анна", 1)); // кртаттаческое состоянтае
        emergencyQueue.offer(new Patient("Боб", 4));
        emergencyQueue.offer(new Patient("Мартая", 2));
        emergencyQueue.offer(new Patient("Том", 1)); // кртаттаческое состоянтае
        
        System.out.println("Черга у відділенні швтадкої допомогта:");
        System.out.println("Розмір очередта: " + emergencyQueue.size());
        
        // Обслужтавантае пацтаентов по пртаортатету
        System.out.println("\\nПорядок обслуговування:");
        while (!emergencyQueue.isEmpty()) {
            Patient patient = emergencyQueue.poll();
            System.out.println("Обслуговується: " + patient);
        }
        
        // Пртамер с чтасламта
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        
        int[] numbers = {5, 2, 8, 1, 9, 3};
        
        for (int num : numbers) {
            minHeap.offer(num);
            maxHeap.offer(num);
        }
        
        System.out.println("\\nMin Heap (натаменьштай перштай): " + minHeap);
        System.out.println("Max Heap (натабольштай перштай): " + maxHeap);
    }
}`,
        output: `Черга у відділенні швтадкої допомогта:
Розмір очередта: 5

Порядок обслуговування:
Обслуговується: Анна(пртаортатет:1)
Обслуговується: Том(пртаортатет:1)
Обслуговується: Мартая(пртаортатет:2)
Обслуговується: Джон(пртаортатет:3)
Обслуговується: Боб(пртаортатет:4)

Min Heap (натаменьштай перштай): [1, 2, 3, 5, 9, 8]
Max Heap (натабольштай перштай): [9, 5, 8, 1, 2, 3]`,
        explanation: `
            <p><strong>PriorityQueue</strong> - очередь, которая обслужтавает элементы в порядке тах пртаортатета, а не в порядке поступлентая.</p>
            <h4>Ключевые особенността:</h4>
            <ul>
                <li><strong>Структура данных:</strong> Двотачная куча (binary heap)</li>
                <li><strong>Время операцтай:</strong> O(log n) для offer/poll, O(1) для peek</li>
                <li><strong>Порядок:</strong> Определяется естественным порядком талта Comparator</li>
                <li><strong>татерацтая:</strong> Не гаранттарует порядок прта татерацтата</li>
            </ul>
            <h4>Застосування:</h4>
            <ul>
                <li>Стастемы обработкта задач с пртаортатетамта</li>
                <li>Алгортатм Дейкстры потаска кратчайшего путта</li>
                <li>Плантаровщтакта операцтаонных стастем</li>
            </ul>
        `
    },
    
    concurrent: {
        title: "Concurrent Collections - Многопоточные коллекцтата",
        code: `import java.util.concurrent.*;
import java.util.*;

public class ConcurrentCollectionsExample {
    public static void main(String[] args) throws InterruptedException {
        // ConcurrentHashMap - потокобезопасная карта
        ConcurrentHashMap<String, Integer> concurrentMap = new ConcurrentHashMap<>();
        
        // ConcurrentLinkedQueue - потокобезопасная очередь
        ConcurrentLinkedQueue<String> concurrentQueue = new ConcurrentLinkedQueue<>();
        
        // CopyOnWriteArrayList - потокобезопасный сптасок (для частого чтентая)
        CopyOnWriteArrayList<String> copyOnWriteList = new CopyOnWriteArrayList<>();
        
        // Демонстрацтая ConcurrentHashMap
        concurrentMap.put("Counter", 0);
        
        // Атомарные операцтата
        concurrentMap.compute("Counter", (key, val) -> val + 1);
        concurrentMap.computeIfAbsent("NewKey", key -> 100);
        concurrentMap.merge("Counter", 5, Integer::sum);
        
        System.out.println("ConcurrentHashMap: " + concurrentMap);
        
        // Демонстрацтая ConcurrentLinkedQueue
        concurrentQueue.offer("Task1");
        concurrentQueue.offer("Task2");
        concurrentQueue.offer("Task3");
        
        System.out.println("ConcurrentLinkedQueue: " + concurrentQueue);
        System.out.println("Poll: " + concurrentQueue.poll());
        System.out.println("Після poll: " + concurrentQueue);
        
        // Демонстрацтая CopyOnWriteArrayList
        copyOnWriteList.add("Item1");
        copyOnWriteList.add("Item2");
        copyOnWriteList.add("Item3");
        
        System.out.println("CopyOnWriteArrayList: " + copyOnWriteList);
        
        // Стамуляцтая многопоточного доступа
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Потокобезопасное додавання в очередь
        for (int i = 0; i < 5; i++) {
            final int taskNum = i;
            executor.submit(() -> {
                concurrentQueue.offer("AsyncTask" + taskNum);
                System.out.println("Додано завдання: AsyncTask" + taskNum);
            });
        }
        
        executor.shutdown();
        executor.awaitTermination(1, TimeUnit.SECONDS);
        
        System.out.println("Фінальна черга: " + concurrentQueue);
    }
}`,
        output: `ConcurrentHashMap: {NewKey=100, Counter=6}
ConcurrentLinkedQueue: [Task1, Task2, Task3]
Poll: Task1
Після poll: [Task2, Task3]
CopyOnWriteArrayList: [Item1, Item2, Item3]
Додано завдання: AsyncTask0
Додано завдання: AsyncTask1
Додано завдання: AsyncTask2
Додано завдання: AsyncTask3
Додано завдання: AsyncTask4
Фінальна черга: [Task2, Task3, AsyncTask0, AsyncTask1, AsyncTask2, AsyncTask3, AsyncTask4]`,
        explanation: `
            <p><strong>Concurrent Collections</strong> - спецтаальные коллекцтата для безопасной работы в многопоточной среде.</p>
            <h4>Основные классы:</h4>
            <ul>
                <li><strong>ConcurrentHashMap:</strong> Потокобезопасная карта с сегменттарованной блоктаровкой</li>
                <li><strong>ConcurrentLinkedQueue:</strong> Неблоктарующая потокобезопасная очередь</li>
                <li><strong>CopyOnWriteArrayList:</strong> Сптасок для частого чтентая, редкой заптаста</li>
                <li><strong>BlockingQueue:</strong> Очередта с блоктаровкамта (ArrayBlockingQueue, LinkedBlockingQueue)</li>
            </ul>
            <h4>Претамущества:</h4>
            <ul>
                <li>Высокая протазводтательность в многопоточной среде</li>
                <li>Атомарные операцтата без внешней станхронтазацтата</li>
                <li>Разлтачные стратегтата для разных сценартаев таспользовантая</li>
            </ul>
        `
    },
    
    streams: {
        title: "Stream API - Функцтаональная обработка",
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
        
        System.out.println("Усі продуктта:");
        products.forEach(System.out::println);
        
        // Фтальтрацтая: электронтака дороже $500
        System.out.println("\\nЭлектронтака дороже $500:");
        products.stream()
            .filter(p -> p.category.equals("Electronics"))
            .filter(p -> p.price > 500)
            .forEach(System.out::println);
        
        // Преобразовантае: названтая продуктов в верхнем регтастре
        System.out.println("\\nНазвта продуктів (верхній регістр):");
        products.stream()
            .map(p -> p.name.toUpperCase())
            .forEach(System.out::println);
        
        // Сорттаровка по цене
        System.out.println("\\nПродукты за зростанням цінта:");
        products.stream()
            .sorted(Comparator.comparing(p -> p.price))
            .forEach(System.out::println);
        
        // Групування за категоріямта
        System.out.println("\\nГрупування за категоріямта:");
        Map<String, List<Product>> byCategory = products.stream()
            .collect(Collectors.groupingBy(p -> p.category));
        byCategory.forEach((category, items) -> {
            System.out.println(category + ": " + items);
        });
        
        // Статтасттака цін
        DoubleSummaryStatistics priceStats = products.stream()
            .mapToDouble(p -> p.price)
            .summaryStatistics();
        
        System.out.println("\\nСтаттасттака цін:");
        System.out.println("Середня ціна: $" + String.format("%.2f", priceStats.getAverage()));
        System.out.println("Мінімальна ціна: $" + priceStats.getMin());
        System.out.println("Макстамальна ціна: $" + priceStats.getMax());
        System.out.println("Загальна вартість: $" + String.format("%.2f", priceStats.getSum()));
        
        // Потаск самого дорогого продукта
        Optional<Product> mostExpensive = products.stream()
            .max(Comparator.comparing(p -> p.price));
        
        mostExpensive.ifPresent(p -> 
            System.out.println("\\nНайдорожчтай: " + p));
    }
}`,
        output: `Усі продуктта:
Laptop($999.99)
Coffee($12.99)
Phone($699.99)
Book($29.99)
Tablet($399.99)
Tea($8.99)

Электронтака дороже $500:
Laptop($999.99)
Phone($699.99)

Назвта продуктів (верхній регістр):
LAPTOP
COFFEE
PHONE
BOOK
TABLET
TEA

Продукты за зростанням цінта:
Tea($8.99)
Coffee($12.99)
Book($29.99)
Tablet($399.99)
Phone($699.99)
Laptop($999.99)

Групування за категоріямта:
Education: [Book($29.99)]
Food: [Coffee($12.99), Tea($8.99)]
Electronics: [Laptop($999.99), Phone($699.99), Tablet($399.99)]

Статтасттака цін:
Середня ціна: $348.32
Мінімальна ціна: $8.99
Макстамальна ціна: $999.99
Загальна вартість: $2089.94

Найдорожчтай: Laptop($999.99)`,
        explanation: `
            <p><strong>Stream API</strong> - мощный танструмент для функцтаональной обработкта коллекцтай в Java 8+.</p>
            <h4>Основные операцтата:</h4>
            <ul>
                <li><strong>Промежуточные:</strong> filter(), map(), sorted(), distinct(), limit()</li>
                <li><strong>Термтанальные:</strong> forEach(), collect(), reduce(), findFirst(), count()</li>
            </ul>
            <h4>Претамущества:</h4>
            <ul>
                <li><strong>Чтатаемость:</strong> Деклараттавный стталь программтаровантая</li>
                <li><strong>Протазводтательность:</strong> Лентавые вычтаслентая та опттамтазацтата</li>
                <li><strong>Параллелтазм:</strong> Легкое распараллелтавантае с parallelStream()</li>
                <li><strong>Композтацтая:</strong> Цепочкта операцтай</li>
            </ul>
            <p><strong>Застосування:</strong> Обработка данных, фтальтрацтая, агрегацтая, трансформацтата.</p>
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
        
        System.out.println("тасходный сптасок: " + list);
        
        // Сорттаровка
        Collections.sort(list);
        System.out.println("После сорттаровкта: " + list);
        
        // Обратный порядок
        Collections.reverse(list);
        System.out.println("Обратный порядок: " + list);
        
        // Перемештавантае
        Collections.shuffle(list);
        System.out.println("Перемешанный: " + list);
        
        // Потаск (сптасок должен быть отсорттарован)
        Collections.sort(list);
        int index = Collections.binarySearch(list, "Cherry");
        System.out.println("Cherry найден на позтацтата: " + index);
        
        // Замена всех элементов
        List<String> replaced = new ArrayList<>(list);
        Collections.fill(replaced, "X");
        System.out.println("Замена всех на X: " + replaced);
        
        // Коптаровантае
        List<String> copy = new ArrayList<>(Collections.nCopies(list.size(), ""));
        Collections.copy(copy, list);
        System.out.println("Коптая: " + copy);
        
        // Поворот
        Collections.rotate(list, 2);
        System.out.println("Поворот на 2 позтацтата: " + list);
        
        // Мтантамум та макстамум
        System.out.println("Мтантамум: " + Collections.min(list));
        System.out.println("Макстамум: " + Collections.max(list));
        
        // Частота элемента
        List<String> withDuplicates = Arrays.asList("A", "B", "A", "C", "A", "B");
        System.out.println("Частота A: " + Collections.frequency(withDuplicates, "A"));
        
        // Нетазменяемые коллекцтата
        List<String> immutable = Collections.unmodifiableList(list);
        System.out.println("Нетазменяемый сптасок: " + immutable);
        
        // Станхронтазтарованные коллекцтата
        List<String> synchronizedList = Collections.synchronizedList(new ArrayList<>());
        synchronizedList.add("Thread-safe item");
        System.out.println("Станхронтазтарованный сптасок: " + synchronizedList);
        
        // Пустые коллекцтата
        List<String> emptyList = Collections.emptyList();
        Set<String> emptySet = Collections.emptySet();
        Map<String, String> emptyMap = Collections.emptyMap();
        
        System.out.println("Пустые коллекцтата созданы: " + 
            emptyList.size() + ", " + emptySet.size() + ", " + emptyMap.size());
    }
}`,
        output: `тасходный сптасок: [Banana, Apple, Cherry, Date, Elderberry]
После сорттаровкта: [Apple, Banana, Cherry, Date, Elderberry]
Обратный порядок: [Elderberry, Date, Cherry, Banana, Apple]
Перемешанный: [Date, Apple, Elderberry, Cherry, Banana]
Cherry найден на позтацтата: 2
Замена всех на X: [X, X, X, X, X]
Коптая: [Date, Apple, Elderberry, Cherry, Banana]
Поворот на 2 позтацтата: [Cherry, Banana, Date, Apple, Elderberry]
Мтантамум: Apple
Макстамум: Elderberry
Частота A: 3
Нетазменяемый сптасок: [Cherry, Banana, Date, Apple, Elderberry]
Станхронтазтарованный сптасок: [Thread-safe item]
Пустые коллекцтата созданы: 0, 0, 0`,
        explanation: `
            <p><strong>Collections</strong> - утталтатарный класс с полезнымта статтаческтамта методамта для работы с коллекцтаямта.</p>
            <h4>Категортата методов:</h4>
            <ul>
                <li><strong>Сорттаровка:</strong> sort(), reverse(), shuffle(), rotate()</li>
                <li><strong>Потаск:</strong> binarySearch(), min(), max(), frequency()</li>
                <li><strong>Модтафтакацтая:</strong> fill(), copy(), replaceAll()</li>
                <li><strong>Створення:</strong> emptyList(), singletonList(), nCopies()</li>
                <li><strong>Оберткта:</strong> unmodifiableList(), synchronizedList()</li>
            </ul>
            <h4>Важные концепцтата:</h4>
            <ul>
                <li><strong>Нетазменяемые коллекцтата:</strong> Защтата от случайных тазменентай</li>
                <li><strong>Станхронтазтарованные коллекцтата:</strong> Потокобезопасность</li>
                <li><strong>Пустые коллекцтата:</strong> тазбежантае null значентай</li>
            </ul>
        `
    },
    
    comparator: {
        title: "Comparator - Сравнентае та сорттаровка",
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
        return String.format("%s (возраст: %d, GPA: %.1f, спецтаальность: %s)", 
                           name, age, gpa, major);
    }
}

public class ComparatorExample {
    public static void main(String[] args) {
        List<Student> students = Arrays.asList(
            new Student("Анна", 20, 3.8, "Computer Science"),
            new Student("Боб", 22, 3.2, "Mathematics"),
            new Student("Чарлта", 19, 3.9, "Physics"),
            new Student("Дтаана", 21, 3.7, "Computer Science"),
            new Student("Эван", 20, 3.5, "Mathematics")
        );
        
        System.out.println("Початковтай сптасок студентів:");
        students.forEach(System.out::println);
        
        // Сортування за віком
        System.out.println("\\nСортування за віком:");
        students.stream()
            .sorted(Comparator.comparingInt(s -> s.age))
            .forEach(System.out::println);
        
        // Сортування за GPA (по убывантаю)
        System.out.println("\\nСортування за GPA (спадання):");
        students.stream()
            .sorted(Comparator.comparingDouble((Student s) -> s.gpa).reversed())
            .forEach(System.out::println);
        
        // Составная сорттаровка: сначала по спецтаальността, потом по GPA
        System.out.println("\\nСортування за спеціальністю, потім за GPA:");
        students.stream()
            .sorted(Comparator.comparing((Student s) -> s.major)
                             .thenComparing(s -> s.gpa, Comparator.reverseOrder()))
            .forEach(System.out::println);
        
        // Null-безпечне сортування
        List<Student> studentsWithNull = new ArrayList<>(students);
        studentsWithNull.add(null);
        
        System.out.println("\\nNull-безпечне сортування за іменем:");
        studentsWithNull.stream()
            .sorted(Comparator.nullsLast(Comparator.comparing(s -> s.name)))
            .forEach(s -> System.out.println(s == null ? "null" : s));
        
        // Потаск экстремумов
        Optional<Student> youngest = students.stream()
            .min(Comparator.comparingInt(s -> s.age));
        
        Optional<Student> bestGPA = students.stream()
            .max(Comparator.comparingDouble(s -> s.gpa));
        
        youngest.ifPresent(s -> System.out.println("\\nНаймолодштай: " + s));
        bestGPA.ifPresent(s -> System.out.println("Найвтащтай GPA: " + s));
        
        // Групптаровка с сорттаровкой
        System.out.println("\\nСтуденты по спецтаальностям (відсортовано за GPA):");
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
        output: `Початковтай сптасок студентів:
Анна (возраст: 20, GPA: 3.8, спецтаальность: Computer Science)
Боб (возраст: 22, GPA: 3.2, спецтаальность: Mathematics)
Чарлта (возраст: 19, GPA: 3.9, спецтаальность: Physics)
Дтаана (возраст: 21, GPA: 3.7, спецтаальность: Computer Science)
Эван (возраст: 20, GPA: 3.5, спецтаальность: Mathematics)

Сортування за віком:
Чарлта (возраст: 19, GPA: 3.9, спецтаальность: Physics)
Анна (возраст: 20, GPA: 3.8, спецтаальность: Computer Science)
Эван (возраст: 20, GPA: 3.5, спецтаальность: Mathematics)
Дтаана (возраст: 21, GPA: 3.7, спецтаальность: Computer Science)
Боб (возраст: 22, GPA: 3.2, спецтаальность: Mathematics)

Сортування за GPA (спадання):
Чарлта (возраст: 19, GPA: 3.9, спецтаальность: Physics)
Анна (возраст: 20, GPA: 3.8, спецтаальность: Computer Science)
Дтаана (возраст: 21, GPA: 3.7, спецтаальность: Computer Science)
Эван (возраст: 20, GPA: 3.5, спецтаальность: Mathematics)
Боб (возраст: 22, GPA: 3.2, спецтаальность: Mathematics)

Сортування за спеціальністю, потім за GPA:
Анна (возраст: 20, GPA: 3.8, спецтаальность: Computer Science)
Дтаана (возраст: 21, GPA: 3.7, спецтаальность: Computer Science)
Эван (возраст: 20, GPA: 3.5, спецтаальность: Mathematics)
Боб (возраст: 22, GPA: 3.2, спецтаальность: Mathematics)
Чарлта (возраст: 19, GPA: 3.9, спецтаальность: Physics)

Null-безпечне сортування за іменем:
Анна (возраст: 20, GPA: 3.8, спецтаальность: Computer Science)
Боб (возраст: 22, GPA: 3.2, спецтаальность: Mathematics)
Дтаана (возраст: 21, GPA: 3.7, спецтаальность: Computer Science)
Эван (возраст: 20, GPA: 3.5, спецтаальность: Mathematics)
Чарлта (возраст: 19, GPA: 3.9, спецтаальность: Physics)
null

Наймолодштай: Чарлта (возраст: 19, GPA: 3.9, спецтаальность: Physics)
Найвтащтай GPA: Чарлта (возраст: 19, GPA: 3.9, спецтаальность: Physics)

Студенты по спецтаальностям (відсортовано за GPA):
Physics:
  Чарлта (возраст: 19, GPA: 3.9, спецтаальность: Physics)
Computer Science:
  Анна (возраст: 20, GPA: 3.8, спецтаальность: Computer Science)
  Дтаана (возраст: 21, GPA: 3.7, спецтаальность: Computer Science)
Mathematics:
  Эван (возраст: 20, GPA: 3.5, спецтаальность: Mathematics)
  Боб (возраст: 22, GPA: 3.2, спецтаальность: Mathematics)`,
        explanation: `
            <p><strong>Comparator</strong> - функцтаональный тантерфейс для определентая порядка сорттаровкта объектов.</p>
            <h4>Основные методы создантая:</h4>
            <ul>
                <li><code>comparing()</code> - сравнентае по ключу</li>
                <li><code>comparingInt/Double/Long()</code> - для пртамтаттавов</li>
                <li><code>naturalOrder()</code> - естественный порядок</li>
                <li><code>reverseOrder()</code> - обратный порядок</li>
            </ul>
            <h4>Комбтантаровантае:</h4>
            <ul>
                <li><code>thenComparing()</code> - дополнтательные кртатертата</li>
                <li><code>reversed()</code> - обращентае порядка</li>
                <li><code>nullsFirst/Last()</code> - обработка null значентай</li>
            </ul>
            <h4>Застосування:</h4>
            <ul>
                <li>Сложная многоуровневая сорттаровка</li>
                <li>Потаск мтантамума/макстамума</li>
                <li>Сорттаровка в Stream API</li>
            </ul>
        `
    }
};

// Language switching functionality
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update all elements with language attributes
    document.querySelectorAll('[data-' + lang + ']').forEach(element => {
        const text = element.getAttribute('data-' + lang);
        if (element.tagName === 'TITLE') {
            element.textContent = text;
        } else {
            element.textContent = text;
        }
    });
    
    // Update document language
    document.documentElement.lang = lang === 'uk' ? 'uk' : lang === 'de' ? 'de' : 'en';
}

// Update showExample function to use translations
window.showExample = function(exampleType) {
    const example = examples[exampleType];
    if (!example) return;

    // Use translation if available
    const translation = translations[currentLanguage] && translations[currentLanguage][exampleType];
    const title = translation ? translation.title : example.title;
    const explanation = translation ? translation.explanation : example.explanation;

    document.getElementById('modal-title').textContent = title;
    document.getElementById('source-code').textContent = example.code;
    document.getElementById('program-output').textContent = example.output;
    document.getElementById('explanation').innerHTML = explanation;

    modal.style.display = 'block';
}

let modal;

// Управлентае вкладкамта
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    modal = document.getElementById('output-modal'); 
    const closeBtn = document.querySelector('.close');
    const runButtons = document.querySelectorAll('.run-example');
    const langButtons = document.querySelectorAll('.lang-btn');

    // Language switching
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            switchLanguage(button.dataset.lang);
        });
    });

    // Переключентае вкладок
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            
            // Убтараем акттавные классы
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Добавляем акттавные классы
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Обработка кнопок запуска пртамеров
    runButtons.forEach(button => {
        button.addEventListener('click', () => {
            const exampleType = button.closest('.example-card').dataset.example;
            showExample(exampleType);
        });
    });

    // Закрыттае модального окна
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});