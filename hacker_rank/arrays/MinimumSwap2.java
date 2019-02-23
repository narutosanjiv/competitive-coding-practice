import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;
import java.util.Arrays;
import java.util.HashMap;

public class MinimumSwap2 {

    // Complete the minimumSwaps function below.
    static int minimumSwaps(int[] arr) {
        int count=0;
        int temp=0;
        int current_val_index=0;
        HashMap<Integer, Integer> map = new HashMap<>(); 
        for(int i=0;i<arr.length;i++){
            map.put((Integer)arr[i], i);
        }
        for(int i=0;i<arr.length;i++){
            // if(arr[i] != i + 1){

            // }
            if(arr[i] != i +1){
                current_val_index = map.get(i + 1);
                temp = arr[i];
                arr[i] = arr[current_val_index];
                arr[current_val_index] = temp;
                map.put(temp, current_val_index);
                count++;
            }
        }

        // for(int i =0 ;i < arr.length; i++){
        //     for(int j= i + 1;j< arr.length;j++){
                
        //         if(arr[i] != i+1){
        //             temp = arr[arr[i] - 1];
        //             arr[arr[i] - 1] = arr[i];
        //             arr[i] = temp;
        //             count++;
        //         }
        //     }
                
        // }
		return count;
    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) throws IOException {
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter("output.txt"));

        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        int[] arr = new int[n];

        String[] arrItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int i = 0; i < n; i++) {
            int arrItem = Integer.parseInt(arrItems[i]);
            arr[i] = arrItem;
        }

        int res = minimumSwaps(arr);
        System.out.println(res);
        bufferedWriter.write(String.valueOf(res));
        bufferedWriter.newLine();

        bufferedWriter.close();

        scanner.close();
    }
}
