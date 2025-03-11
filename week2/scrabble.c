#include <stdio.h>
#include "cs50.h"
#include <ctype.h>
#include <string.h>
int calculate_value(char in[], int scores[]);
int scores[26] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};
int main(void) {
    char *input1 = get_string("What is player 1's word? \n");
    char *input2 = get_string("What is player 2's word? \n");
    int player1 = calculate_value(input1, scores);
    int player2 = calculate_value(input2, scores);
    if (player1 > player2) {
        printf("Player 1 wins with a score of %i\n", player1);
    } else if (player2 > player1) {
        printf("Player 2 wins with a score of %i\n", player2);
    } else {
        printf("It's a tie!\n");
    }
    return 0;
}
int calculate_value(char in[], int scores[]) {
    int val = 0;
    for (int i = 0, n = strlen(in); i < n; i++) {  // Use strlen to get the length of the string
        if (((int)in[i] >= 'a' && (int)in[i] <= 'z') || ((int)in[i] >= 'A' && (int)in[i] <= 'Z')) {
            int caselower = tolower(in[i]) - 'a';  // Get the index for scores
            val += scores[caselower];  // Add score
        }
    }
    return val;
}