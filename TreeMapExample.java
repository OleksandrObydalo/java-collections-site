// Приклад TreeMap: зберігає пари ключ–значення у відсортованому порядку ключів.
package org.example;
import java.util.TreeMap;

public class TreeMapExample {
    public static void main(String[] args) {
        TreeMap<String, Integer> population = new TreeMap<>();
        population.put("Київ", 3000000);
        population.put("Львів", 800000);
        population.put("Одеса", 1000000);

        System.out.println("Населення міст (відсортовано за назвою): " + population);
    }
}
