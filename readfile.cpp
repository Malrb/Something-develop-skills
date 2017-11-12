#include <fstream>
#include <string>
#include <stdlib.h>
#include <iostream>
using namespace std;

int main(){
    ifstream file("eatbd_imp.txt");
    string str;
    while(getline(file,str))
    {
        cout << "'$" << str << "',";
    }

    return 0;
}
