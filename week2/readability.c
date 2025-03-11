#include <stdio.h>
#include "cs50.h"
#include <ctype.h>
#include <string.h>

int main(void){
    char *word= get_string("Please input your text");
    int isletter,ispunct,words,isstop;
    isletter=0;
    isstop=0;
    words=0;

    for (int i = 0, l=strlen(word);i<l;i++){
        if (isalpha((int)word[i])){
            isletter++;
        }
        else{
            if ((int) word[i] == ' '){
                words++;
            }
            else{
                if ((int) word[i] == '.' || (int) word[i] == '?' || (int) word[i] == '!'){
                    isstop++;
                    words++;
                    if((int) word[i+1] == ' '){
                        words--;
                    }
                }
            }
        }
    }

    float l,s;
    l=(float) isletter/ (float) words;
    l=l*100.0;
    s= (float) isstop/ (float) words;
    s=s*100.0;

    float final = (0.0588 * l - 0.296 * s - 15.8);
    int index = (int) final;
    if (index<1){
        printf("Value is below Grade 1\n");
    }
    else if (index>=1 && index < 16){
        printf("Value is Grade %i\n",index);
    }
    else{
        printf("Value is Grade 16+\n");
    }

    return 0;
}

// OUTPUT please enter ur sentence
// INPUT word
// DECLARE wordsum: INTEGER
// DECLARE sentencesum: INTEGER
// DECLARE letterssum: INTEGER
// DECLARE Spaces: INTEGER
// DECLARE stops: INTeGER
// wordsum=0
// sentencesum=0
// stops=0
// spaces=0
// 
// FOR i in len(word):
//      IF word[i] = " " THEN
//          wordsum+=1
//          Spaces+=1
//      ELSE IF word[i] = "." THEN
//          wordsum+=1
//          sentencesum+=1
//          stops+=1
//              IF word[i+1] == " " THEN
//                  wordsum-=1
//              ENDIF
// lettersum=len(word)-wordsum
// DECLARE L: FLOAT
// DECLARE S: FLOAT
// L = lettersum/wordsum x 100
// S = sentencesum/wordsum x 100
// DECLARE index: Float
// index = 0.058 * L - 0.296 * S - 15.8
// IF index<1 THEN
//      OUTPUT Grade below 1
// ELSE IF index >= 1 && index < 16 THEN
//      OUTPUT Grade is, INT index
// ELSE
//      OUTPUT Grade is 16+