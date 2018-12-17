public bool CheckIfAnArrayIsPolindrome()
{
    int[] a = { 1, 23, 45, 43, 2, 1 };

    /* idea: convert all array values (right-left) into a single decimal number  
     * if number and its reverse number are equal, then array is polindrome */
    int powerIndex = 0;
    int number = 0;
    for (int i = a.Length - 1; i >= 0; i--)
    {
        int n = a[i];
        while (n > 0)
        {
            int rem = n % 10;
            number = number + rem * (int)Math.Pow(10, powerIndex++);
            n = n / 10;
        }
    }

    int reverseNumber = ReverseNumber(number);
    if (number == ReverseNumber(number))
    {
        return true;
    }

    return false;
}

public int ReverseNumber(int n)
{
    int result = 0;
    while (n > 0)
    {
        int rem = n % 10;
        result = result * 10 + rem;
        n = n / 10;
    }

    return result;
}
