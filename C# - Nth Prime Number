public long NthPrimeNumber(int n)
{
    int primeCount = 0;
    int number = 2; //first prime number
    while (true)
    {
        bool isPrimeNumber = true;
        // to check if a number is prime, we dont need to check until that number
        // checking up to square root is enough.
        // example to check 100 is prime or not. 100 can be represented in many ways
        // 2x50, 5x20, 10x10
        // in all cases, one of the factor is <= square of 100, which is 10
        // so we can find a prime number just by checking till its last factor
        for (int i = 2; i <= Math.Sqrt(number); i++)
        {
            if (number % i == 0)
            {
                isPrimeNumber = false;
                break;
            }
        }

        if (isPrimeNumber)
        {
            primeCount++;
            if (primeCount == n)
            {
                Console.WriteLine($"{n}th Prime Number is {number}");
                return number;
            }
        }

        number++;
    }
}
