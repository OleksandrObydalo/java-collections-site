// Приклад LinkedHashSet: множина без дублікатів, але з порядком додавання.
package org.example;
import java.util.LinkedHashSet;

public class LinkedHashSetExample {
    public static void main(String[] args) {
        LinkedHashSet<String> animals = new LinkedHashSet<>();
        animals.add("🐶 Собака");
        animals.add("🐱 Кіт");
        animals.add("🐰 Кролик");
        animals.add("🐶 Собака"); // дублікат

        System.out.println("Тварини без повторів (із збереженням порядку): " + animals);
    }
}
