package org.example;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class ComparatorExample {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Оля");
        names.add("Іван");
        names.add("Андрій");
        names.add("Юля");

        // Сортування за довжиною імені
        Collections.sort(names, new Comparator<String>() {
            public int compare(String a, String b) {
                return Integer.compare(a.length(), b.length());
            }
        });

        System.out.println("Імена, відсортовані за довжиною: " + names);
    }
}
