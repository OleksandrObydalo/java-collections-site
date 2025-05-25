// Приклад LinkedHashMap: зберігає порядок додавання пар ключ–значення.
package org.example;
import java.util.LinkedHashMap;

public class LinkedHashMapExample {
    public static void main(String[] args) {
        LinkedHashMap<String, Integer> scores = new LinkedHashMap<>();
        scores.put("Оля", 85);
        scores.put("Іра", 92);
        scores.put("Макс", 78);

        System.out.println("Оцінки (в порядку додавання): " + scores);
    }
}
