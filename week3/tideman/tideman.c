#include "cs50.h"
#include <stdio.h>
#include <string.h>

// Max number of candidates
#define MAX 9

// preferences[i][j] is number of voters who prefer i over j
int preferences[MAX][MAX];

// locked[i][j] means i is locked in over j
bool locked[MAX][MAX];

// Each pair has a winner, loser
typedef struct
{
    int winner;
    int loser;
} pair;

// Array of candidates
char *candidates[MAX];
pair pairs[MAX * (MAX - 1) / 2];

int pair_count;
int candidate_count;

// Function prototypes
bool vote(int rank, string name, int ranks[]);
void record_preferences(int ranks[]);
void add_pairs(void);
void sort_pairs(void);
void lock_pairs(void);
void print_winner(void);
bool cycle(int winner, int loser);

int main(int argc, char *argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: tideman [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX)
    {
        printf("Maximum number of candidates is %i\n", MAX);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i] = argv[i + 1];
    }

    // Clear graph of locked in pairs
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = 0; j < candidate_count; j++)
        {
            locked[i][j] = false;
        }
    }

    pair_count = 0;
    int voter_count = get_int("Number of voters: ");

    // Query for votes
    for (int i = 0; i < voter_count; i++)
    {
        // ranks[i] is voter's ith preference
        int ranks[candidate_count];

        // Query for each rank
        for (int j = 0; j < candidate_count; j++)
        {
            char *name = get_string("Rank %i: ", j + 1);

            if (!vote(j, name, ranks))
            {
                printf("Invalid vote.\n");
                return 3;
            }
        }

        record_preferences(ranks);

        printf("\n");
    }

    add_pairs();
    sort_pairs();
    lock_pairs();
    print_winner();
    return 0;
}
 
// Update ranks given a new vote
bool vote(int rank, char *name, int ranks[])
{    
    for (int i =0; i< candidate_count; i++){
        if (strcmp(name,candidates[i])==0){
            ranks[rank] == i;
            return true;
        }
    }
    return false;

    // for i = 0 -> candidates
    //      check if name is in candidates
    //      if yes:
    //          ranks[j] = candidate_number aka i
    //          return true
    //      if not:
    //          return false
    return false;
}

// Update preferences given one voter's ranks
void record_preferences(int ranks[])
{
    // TODO
    for (int i=0; i<candidate_count; i++){
        for (int j = i; j< candidate_count; j ++){
            preferences[ranks[i]][ranks[j]]++;
        }
    }
    // for (i = 0; i< len(rank)){
    //      for (j=i; j < (rank))
    //          preference[rank[i]][rank[j]]++;

    return;
}

// Record pairs of candidates where one is preferred over the other
void add_pairs(void)
{
    // TODO
    for (int i = 0; i < candidate_count; i++)
    {
        for (int j = 0; j<candidate_count; j ++){
            if (preferences[i][j] > preferences[j][i]){
                pairs[i].winner=i;
                pairs[i].loser=j;
            }
        }
    }
    
    // for (i = 0, i < candidate, i++)
    //      for j = 0, j < candidate, j++
    //          if preference[i][j] > preference[j][i]
    //              preference[i].winner=i
    //              preference[j].lose=j
    //
    
    return;
}

// Sort pairs in decreasing order by strength of victory
void sort_pairs(void)
{
    // TODO
    int strength[pair_count];
    for (int i = 0; i < pair_count; i++){
        strength[i] = preferences[pairs[i].winner][pairs[i].loser];
        int highest=0;
        int location = 0;
        for(int j = i; j< pair_count; j++){
            if (strength[j] > highest){
                highest= strength[j];
                location = j;
            }
        }
        int temporary = strength[i];
        strength[i]=strength[location];
        strength[location]=temporary;
        pair temp;
        temp =pairs[i];
        pairs[i]=pairs[location];
        pairs[location]=temp;

    }
    // int strenth[pair count]
    // for i in range paircount
    //      strength[i] = preferemces[pairs[i].winner][pairs[i].lose]
    //      int highest;
    //      for j = i , j< pair count
    //          if strength[j] > highest
    //              highest = strength[j]
    //              location = j 
    //      temporary=strenght[i]
    //      strength[i]=strength[location]
    //      strength[location]=temporary
    //      temporary=pairs[i]
    //      pairs[i]=pairs[location]
    //      pairs[location]=temporary


    return;
}

// Lock pairs into the candidate graph in order, without creating cycles
void lock_pairs(void)
{
    for (int i =0; i< pair_count; i++){
        if (cycle(pairs[i].winner, pairs[i].loser) == false){
            locked[pairs[i].winner][pairs[i].loser] == true;
        }
    }
    // TODO
    /* 
    for every value:
        check if (cycle(pairs[i].winner,pairs[i].loser) == false):
            lockedpairs[pairs[i].winner][pairs[i].loser] == true 
    */
    return;
}

bool cycle(int winner, int loser){
    if (loser == winner){
        return true;
    }
    for (int i = 0; i< candidate_count; i ++){
        if (locked[loser][i] == true){
            if (cycle(winner,i) == true){
                return true;
            }
        }
    }
    return false;
}
/*
bool cycle(int winner, int loser)
{
    if (loser == winner){
        return true;
    }
    for (int i = 0; i< candidate_count; i++)
    {
        if (locked[loser][i] == true)
        {
            if (cycle(winner, i) = true)
            {
                return true; 
            }
        }
    }
    return false;

}


*/



// Print the winner of the election
void print_winner(void)
{
    // TODO

    int count[MAX] = {0};

    for (int i = 0; i < candidate_count; i ++){
        for (int j = 0; j < candidate_count; j++){
            if (locked[i][j] == true){
                candidates[i]++;
            }

        }
    }

    for (int i = 0; i < candidate_count; i++){
        if (candidates[i] == 0){
            printf("winner is %s", candidates[i]);
            return;
        }
    }
    /*
    int counters[candidate count]={0};
    for i in range (candidates){
        for j in range(candidates){
            if locked[i][j] == true
            candidate[i]++;  
        }
    }
    for i in range (candidates){
        if candidates[i]==0{
            printf("winner is %s", candidates[i])
        }
    }
    */
    return;
}
