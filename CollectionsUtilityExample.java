// Приклад використання утиліт Collections: сортування, реверс, бінарний пошук.
package org.example;
import java.util.ArrayList;
import java.util.Collections;

public class CollectionsUtilityExample {
    public static void main(String[] args) {
        ArrayList<String> cities = new ArrayList<>();
        cities.add("Київ");
        cities.add("Львів");
        cities.add("Одеса");
        cities.add("Харків");

        // Сортування
        Collections.sort(cities);
        System.out.println("Відсортовані міста: " + cities);

        // Пошук
        int index = Collections.binarySearch(cities, "Одеса");
        System.out.println("Індекс 'Одеса': " + index);

        // Реверс
        Collections.reverse(cities);
        System.out.println("Міста у зворотному порядку: " + cities);
    }
}
