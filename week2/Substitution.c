#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include "cs50.h"

int main(int argc, string argv[]){
    int alpha, unique;

    // Check if there is exactly one argument
    if (argc != 2) {
        printf("Usage: ./substitution key\n");
        return 1;
    }
    
    char *key = argv[1];
    alpha = 0;
    unique = 0;

    // Check if key contains only alphabetic characters
    for (int i = 0, l = strlen(key); i < l; i++){
        if (!isalpha(key[i])){ // Properly check if character is alphabetic
            alpha = 1;
            break;
        }
    }

    // Check for uniqueness
    for (int i = 'a'; i <= 'z'; i++){
        int count = 0;  // Reset count for each letter
        for (int j = 0, k = strlen(key); j < k; j++){
            if (i == tolower(key[j])){ // Compare case-insensitively
                count++;
            }
        }
        if (count > 1){ // More than one occurrence of the same letter
            unique = 1;
            break;
        }
    }

    // Validate key length and uniqueness
    if (strlen(key) != 26 || alpha == 1 || unique == 1){
        printf("INVALID KEY\n");
        return 1;
    }

    // Get plaintext input
    char *word = get_string("Tell word plaintext: ");
    printf("cypher text is: ");

    // Process the plaintext
    for (int i = 0, ln = strlen(word); i < ln; i++){
        if (islower(word[i])){ // If it's a lowercase letter
            int let = word[i] - 'a';
            char ch = tolower(key[let]);
            printf("%c", ch);
        }
        else if (isupper(word[i])){ // If it's an uppercase letter
            int let = word[i] - 'A';
            char ch = toupper(key[let]);
            printf("%c", ch);
        }
        else { // If it's not a letter, print as is
            printf("%c", word[i]);
        }
    }
    printf("\n");
    return 0;
}



// DECLARE key: STRING
// DECLARE alpha: BOOLEAN
// DECLARE unique: BOOLEAN
// DECLARE letter: INTEGER
// USING CONSOLE TO ASK USERS
// INPUT key
// alpha = TRUE
// unique = FALSE
// letter = 0
// 
// FOR (i=0,l=LENGTH(key);i<l;i++)
//      IF isalpha(key[i]) = 0 THEN
//          alpha = FALSE
//          break
// 
// Check if alphabet is unique:
// DECLARE count: INTEGER
// count=0
// FOR (i=a;i<=z;i++)
//      FOR (j=0, k=LENGTH(key);j<k;j++)
//          IF (i == key[j]) THEN
//              count++
//      IF (count==2) THEN
//          unqiue=FALSE
//          break
// 
// IF LENGTH(key) != 26 || alpha == FALSE || unique == TRUE THEN
//      OUTPUT "Nah kys"
//      RETURN 1
// ELSE
//      OUTPUT "Tell word plaintext"
//      INPUT word
//      OUTPUT "cyphertext is:"
//      FOR (i=0,ln=LENGTH(word);i<ln;i++) THEN
//          IF word[i] >= a && word[i]<= 'z' THEN
//              OUTPUT TOLOWER(key[TOLOWER(word[i])-'a'])
//              RETURN 0
//          ELSE
//              OUTPUT TOUPPER(key[TOLOWER(word[i])-'a'])
//              RETURN 0