// Приклад TreeSet: зберігає унікальні елементи в алфавітному порядку.
package org.example;
import java.util.TreeSet;

public class TreeSetExample {
    public static void main(String[] args) {
        TreeSet<String> names = new TreeSet<>();
        names.add("Іван");
        names.add("Оля");
        names.add("Богдан");
        names.add("Іван"); // дубль не буде додано

        System.out.println("Імена в алфавітному порядку: " + names);
    }
}
