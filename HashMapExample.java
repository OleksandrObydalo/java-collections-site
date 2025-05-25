// Приклад HashMap: зберігає пари ключ–значення без гарантії порядку.
package org.example;
import java.util.HashMap;

public class HashMapExample {
    public static void main(String[] args) {
        HashMap<String, String> capitals = new HashMap<>();
        capitals.put("Франція", "Париж");
        capitals.put("Німеччина", "Берлін");
        capitals.put("Італія", "Рим");

        System.out.println("Столиця Франції: " + capitals.get("Франція"));
        System.out.println("Всі столиці: " + capitals);
    }
}
