// find product of 2 integers without using * or / operators
public int ProductOfNumbers(int a, int b)
{
    if (a == 0 || b == 0)
    {
        return 0;
    }

    int smaller = a < b ? a : b;
    int bigger = a < b ? b : a;

    return ProductOfNumbersRecursion(smaller, bigger);
}

public int ProductOfNumbersRecursion(int smaller, int bigger)
{
    if (smaller == 1)
    {
        return bigger;
    }

    int s = smaller >> 1; //right shift once to devide by 2
    int halfProd = ProductOfNumbersRecursion(s, bigger);

    if (smaller % 2 == 0)
    {
        return halfProd + halfProd;
    }
    else
    {
        // if a=11 and b=20
        // find product for a=10, b=20 then add bigger number
        // 10*20=200, 11*20=10*20+20
        return halfProd + halfProd + bigger;
    }
}
