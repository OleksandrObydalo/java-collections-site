// Приклад використання PriorityQueue: пацієнти сортуються за рівнем болю.
// Менше число — більший пріоритет.
package org.example;
import java.util.PriorityQueue;

public class EmergencyQueueExample {
    public static void main(String[] args) {
        // Черга пацієнтів за пріоритетом (число менше — важливіше)
        PriorityQueue<Integer> emergency = new PriorityQueue<>();

        // Додаємо пацієнтів з рівнем болю (1 — найбільше болить)
        emergency.offer(5); // болить слабо
        emergency.offer(2); // болить сильно!
        emergency.offer(8); // майже не болить
        emergency.offer(1); // капець болить 😱

        // Хто буде першим?
        System.out.println("Найболючіший пацієнт: " + emergency.peek());

        // Обслуговуємо
        System.out.println("Обслуговуємо: " + emergency.poll());

        // Залишилось:
        System.out.println("Черга: " + emergency);
    }
}
