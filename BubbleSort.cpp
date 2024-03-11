#include <iostream>
#include <vector>

using namespace std;

void bubbleSort(vector<int>& arr){
    int n= arr.size();
    for(int i=1;i<n;i++){
        bool swap = false;
        for(int j=0;j<n-i;j++){
            if(arr[j] > arr[j+1]){
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap = true;
            }
        }
        if(swap == false){
            break;
        }
    }
}
int main(){
    vector<int> arr {12, 6,13,1,9,5};
    bubbleSort(arr);
    for(int i=0;i<arr.size();i++){
        cout<< arr[i]<<" ";
    }
    cout << endl;
}