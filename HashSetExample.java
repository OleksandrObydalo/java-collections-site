// Приклад HashSet: множина унікальних елементів без впорядкування.
package org.example;
import java.util.HashSet;

public class HashSetExample {
    public static void main(String[] args) {
        HashSet<String> colors = new HashSet<>();
        colors.add("Червоний");
        colors.add("Синій");
        colors.add("Зелений");
        colors.add("Синій"); // дублікат не додасться

        System.out.println("Унікальні кольори: " + colors);
    }
}
