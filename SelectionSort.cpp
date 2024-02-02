#include <iostream>
#include <vector>

using namespace std;

void selectionSort(vector<int>&arr) {
    // Write your code here.
    int min;
    int n = arr.size();
    for(int i=0;i<=n-2;i++){
        min = i;
        for(int j=i;j<=n-1;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        int temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}
int main()
{
    vector<int> msg {12, 6,13,1,9,5};
    selectionSort(msg);
    for(int i=0;i<msg.size();i++){
        cout<< msg[i]<<" ";
    }
    cout << endl;
}