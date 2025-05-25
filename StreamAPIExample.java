package org.example;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class StreamAPIExample {
    public static void main(String[] args) {
        List<String> fruits = Arrays.asList("яблуко", "груша", "апельсин", "банан");

        // Фільтруємо ті, що довші за 5 символів, перетворюємо на великі літери
        List<String> result = fruits.stream()
                .filter(fruit -> fruit.length() > 5)
                .map(String::toUpperCase)
                .collect(Collectors.toList());

        System.out.println("Результат Stream API: " + result);
    }
}
