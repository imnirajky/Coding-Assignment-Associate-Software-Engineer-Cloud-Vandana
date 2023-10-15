import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class One {
    public static void main(String[] args) {
        // Shuffle an array
        Integer[] originalArray = {1, 2, 3, 4, 5, 6, 7};
        List<Integer> list = Arrays.asList(originalArray);
        Collections.shuffle(list);
        System.out.println("Shuffled Array: " + Arrays.toString(list.toArray()));

        // Convert a Roman Numeral to an Integer
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int number = scanner.nextInt();
        String roman = integerToRoman(number);
        System.out.println("Roman Numeral: " + roman);

        // Check for a Pangram
        System.out.print("Enter a sentence to check if it's a pangram: ");
        String inputText = scanner.nextLine();
        boolean isPangram = isPangram(inputText);
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    // Roman to Integer conversion
    public static String integerToRoman(int num) {
        String[] thousands = {"", "M", "MM", "MMM"};
        String[] hundreds = {"", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"};
        String[] tens = {"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"};
        String[] ones = {"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"};

        return thousands[num / 1000] + hundreds[(num % 1000) / 100] + tens[(num % 100) / 10] + ones[num % 10];
    }

    // Pangram checking
    public static boolean isPangram(String text) {
        String alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        text = text.toUpperCase();
        for (char letter : alphabet.toCharArray()) {
            if (text.indexOf(letter) == -1) {
                return false;
            }
        }
        return true;
    }
}



    
