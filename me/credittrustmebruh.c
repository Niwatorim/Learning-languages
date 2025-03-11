#include <stdio.h>
#include "cs50.h"
#include <string.h>

int main(void){
    int n;
    string input;
    do {
        string input = get_string("What is your number: "); // use 'string' if using CS50 library
        char j = input[0]; // get the first character
        n = j - '0'; // convert character to integer
    } while (n > 2 || n < 6); // this checks if n is greater than 2 or less than 6

    string cardtype;
    if (n == 3){
        cardtype= "American Express";
    }
    else if(n == 5){
        cardtype= "MasterCard";
    }
    else if (n == 4){
        cardtype= "Visa";
    }
    
    int length = strlen(input);
    int result = length%2;
    int rep;
    int checksum = 0;

    if(result == 0){//use first value
        rep= (int)length/2;
        for (int i = 0; i<rep;i=i+2){ // for all digits to be multiplied by 2
            int j = input[i]*2;
            if(input[i]>=5){ // these digits are double digits so those need to be separated
                string n = (string) j;
                int killmeplease =  (int) n[0];
                int killmeplease2= (int) n[1];
                checksum += killmeplease + killmeplease2;
            }
            else{
                checksum+=j;
            }
        }
        for (int i=1;i<rep;i+=2){//for the remaining digits
            int j = input[i];
            if(input[i]>5){ // these digits are double digits so those need to be separated
                string n = (string) j;
                int killmeplease =  (int) n[0];
                int killmeplease2= (int) n[1];
                checksum += killmeplease + killmeplease2;
            }
            else{
                checksum+=j;
            }
        }
    }
    else{//use second value onwards
        for (int i = 1; i<rep;i=i+2){ // for all digits being multiplied by 2
            int j = input[i]*2;
            if(input[i]>5){ // these digits are double digits so those need to be separated
                string n = (string) j;
                int killmeplease =  (int) n[0];
                int killmeplease2= (int) n[1];
                checksum += killmeplease + killmeplease2;
            }
            else{
                checksum+=j;
            }

        }
        for (int i=0;i<rep;i+=2){//for the remaining digits
            int j = input[i];
            if(input[i]>5){ // these digits are double digits so those need to be separated
                string n = (string) j;
                int killmeplease =  (int) n[0];
                int killmeplease2= (int) n[1];
                checksum += killmeplease + killmeplease2;
            }
            else{
                checksum+=j;
            }
        }
    }
    string sum = (string) checksum;
    int index= strlen(sum)-1;
    int check = (int) sum[index-1];
    if(check==0){
        printf("card is valid;");
    }
    else{
        printf("card is invalid");
    }

    return 0;
}