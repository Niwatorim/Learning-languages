// #include <stdio.h>
// #include "cs50.h"

// int main(void){
//     int n, i, j, tabs, spaces;
    
//     do {
//         n = get_int("How many tiles?");
//     } while (n < 1 || n > 8);
    
//     spaces = n - 1;
//     tabs = 1;

//     for (i = 0; i < n; i++) {
        
//         // First loop for spaces
//         for (j = 0; j < spaces; j++) {
//             printf(" ");
//         }

//         // Second loop for the first set of hashes
//         for (j = 0; j < tabs; j++) {
//             printf("#");
//         }

//         // Print the gap between the two sets of hashes
//         printf(" ");

//         // Third loop for the second set of hashes
//         for (j = 0; j < tabs; j++) {
//             printf("#");
//         }
        
//         // Newline after each row
//         printf("\n");

//         // Decrease spaces and increase tabs for next row
//         spaces--;
//         tabs++;
//     }

//     return 0;
// }

#include <stdio.h>
#include "cs50.h"

int main(void){
    int n,i,j,tabs,spaces;
    
    do{
        n= get_int("How many tiles?");
    }while (n<1||n>8);
    spaces=n-1;
    tabs=1;

    for (i = 0; i < n; i++) {
        
        for (j=0;j<spaces;j++) {
            printf(" ");
        }

        for (j=0;j<tabs;i++){
            printf("#");
        }

        print (" ");
        
        for (j=0;i<=tabs;i++){
            printf("#");
        }

        printf("\n");
        spaces--;
        tabs++;
    }

    return 0;
}
