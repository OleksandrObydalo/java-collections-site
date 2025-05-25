// Приклад двосторонньої черги (Deque): можна додавати/видаляти з обох кінців.
package org.example;
import java.util.ArrayDeque;
import java.util.Deque;

public class DequeExample {
    public static void main(String[] args) {
        Deque<String> tasks = new ArrayDeque<>();

        tasks.addFirst("🧹 Прибрати");
        tasks.addLast("📚 Почитати");
        tasks.addFirst("🍽 Приготувати вечерю");

        System.out.println("Першочергова задача: " + tasks.peekFirst());
        System.out.println("Остання задача: " + tasks.peekLast());

        tasks.pollFirst(); // виконуємо першу
        System.out.println("Залишилось: " + tasks);
    }
}
