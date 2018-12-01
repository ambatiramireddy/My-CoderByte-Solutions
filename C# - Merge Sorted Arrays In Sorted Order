static void MergeSortedArraysInSortedOrder()
{
    int[] array1 = { 1, 5, 9, 15 };
    int[] array2 = { 2, 3, 7, 11, 14 };
    var mergedArray = new int[array1.Length + array2.Length];
    int i = 0, j = 0;
    while (i + j < mergedArray.Length)
    {
        //if array2 index goes out of bounds or if array1 value is less than array2 value 
        //then take value from array1, otherwise take from array 2
        if (j == array2.Length || (i < array1.Length && array1[i] < array2[j]))
            mergedArray[i + j] = array1[i++];
        else
            mergedArray[i + j] = array2[j++];
    }
}
