/*Given an array A of N elements. Find the majority element in the array. 
  A majority element in an array A of size N is an element that appears more than N/2 times.*/
public static int MajorityEelementInAnArray(int[] a)
{
    int len = a.Length;
    for (int i = 0; i < len; i++)
    {
        int e = a[i], c = 1;
        for (int j = 0; j < len; j++)
        {
            if (i != j && e == a[j])
            {
                c++;
            }

            if (c > len / 2)
            {
                return e;
            }
        }
    }

    return -1;
}
