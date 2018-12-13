public int FindNthMinimumValue(int[] a, int n)
{
    if (n > a.Length)
    {
        return -1;
    }

    List<int> alreadyFoundMinValueIndices = new List<int>();
    for (int i = 1; i <= n; i++)
    {
        int min = int.MaxValue; int minIndex = -1;
        for (int j = 0; j < a.Length; j++)
        {
            if (!alreadyFoundMinValueIndices.Contains(j) && a[j] < min)
            {
                min = a[j];
                minIndex = j;
            }
        }
        alreadyFoundMinValueIndices.Add(minIndex);

        if (i == n)
        {
            return min;
        }
    }

    return -1;
}
