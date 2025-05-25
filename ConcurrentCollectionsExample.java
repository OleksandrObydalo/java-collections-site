package org.example;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

public class ConcurrentCollectionsExample {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> wordCount = new ConcurrentHashMap<>();
        wordCount.put("java", 3);
        wordCount.put("collections", 5);
        wordCount.put("thread", 2);

        System.out.println("ConcurrentHashMap: " + wordCount);

        CopyOnWriteArrayList<String> safeList = new CopyOnWriteArrayList<>();
        safeList.add("елемент 1");
        safeList.add("елемент 2");

        // Потокобезпечно перебираємо і додаємо
        for (String s : safeList) {
            safeList.add("новий " + s); // не призводить до помилки
        }

        System.out.println("CopyOnWriteArrayList: " + safeList);
    }
}
