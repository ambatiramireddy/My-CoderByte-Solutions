static int[] FindDistinctNumbersInArray(int[] a)
{
    List<int> distinctNumbers = new List<int>();
    for (int i = 0; i < a.Length; i++)
    {
        int c = 1;
        for (int j = 0; j < a.Length; j++)
        {
            if (i != j && a[i] == a[j])
            {
                c++;
                break;
            }
        }

        if (c == 1)
        {
            distinctNumbers.Add(a[i]);
        }
    }

    return distinctNumbers.ToArray();
}
