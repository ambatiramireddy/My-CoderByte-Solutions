public void CountNegativeIntegersInASortedMatrix()
{
    int[,] a = { { -3, -2, -1, -1 }, { -2, 2, 3, 4 }, { -4, -5, -7, -8 } };

    int negativeNumberCount = 0;
    int rowLength = a.GetLength(0), colLength = a.GetLength(1);
    int row = 0, col = colLength - 1;
    while (row < rowLength && col >= 0)
    {
        if (a[row, col] < 0)
        {
            /*since array is sorted and we are traversing in reverse order,
             * once negative valus is found in a column, all the numbers till that index 
             * must be negative. so, just increment count and move to the next row */
            negativeNumberCount = negativeNumberCount + (col + 1);
            row++;
            col = colLength - 1;
        }
        else
        {
            col--;
        }
    }
}
