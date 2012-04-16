using System;
namespace Product
{
    public class Calculator
    {
        public static int Add(string number)
        {
            return number == "" ? 0 : Convert.ToInt32(number);
        }
    }
}
