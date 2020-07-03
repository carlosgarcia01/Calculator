#include <iostream>
//#include <operation.cpp>
using namespace std;

class Operation
{
  float number1;
  float number2;

  public:

    // constructor de base (null)
    Operation() {}

    // constructror parametrizado
    Operation(double number1, double number2) : number1(number1), number2(number2) {}


    double add();
    double subtract();
};


  double Operation::add(){
    return number1 + number2;
  }
  double Operation::subtract(){
    return number1 - number2;
  };


int main(){
  float num1,num2;
  char option;
  double result;
  bool pass;
  do{
    cout << "Enter number 1: "; cin>>num1;
    cout << "Enter number 2: "; cin>>num2;

    if(!isdigit(num1) || !isdigit(num2))
      pass = false;
    
  }while(pass);


  cout << "Enter: 1.Add or 2.Subtract"; cin>>option;
  Operation Operation(num1,num2);
  if(option=='1')
    result = Operation.add();
  else if(option=='2')
    result = Operation.subtract();
  cout << "anwer:" << num1 << " + "<< num2 << " = " << result << "\n";
  system("pause");
  return 0;

}