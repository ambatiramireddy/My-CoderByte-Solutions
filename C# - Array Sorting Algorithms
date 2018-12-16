using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsoleApp
{
    class SortingAlgorithms
    {
        public void BubbleSort(int[] a)
        {
            int temp;
            for (int i = 0; i < a.Length; i++)
            {
                bool swapped = false;
                for (int j = 0; j < a.Length - 1; j++)
                {
                    if (a[j] > a[j + 1])
                    {
                        temp = a[j];
                        a[j] = a[j + 1];
                        a[j + 1] = temp;

                        swapped = true;
                    }
                }

                /*if no number was swapped that means 
                array is sorted now, break the loop.*/
                if (!swapped)
                {
                    break;
                }
            }
        }

        public void InsertionSort(int[] a)
        {
            int temp;
            for (int i = 1; i < a.Length; i++)
            {
                temp = a[i];
                int j = i - 1;
                while (j >= 0 && a[j] > temp)
                {
                    a[j + 1] = a[j];
                    j--;
                }
                a[j + 1] = temp;
            }
        }

        public void QuickSort(int[] a, int start, int end)
        {
            if (start >= end)
            {
                return;
            }

            int pIndex = Partition(a, start, end);
            QuickSort(a, start, pIndex - 1);
            QuickSort(a, pIndex + 1, end);
        }

        public int Partition(int[] a, int start, int end)
        {
            int pIndex = start;
            int pivot = a[end];
            for (int i = start; i < end; i++)
            {
                if (a[i] <= pivot)
                {
                    Swap(a, pIndex, i);
                    pIndex++;
                }
            }

            Swap(a, pIndex, end);
            return pIndex;
        }

        void Swap(int[] a, int i, int j)
        {
            int temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }

        /*Given an array A[] consisting 0s, 1s and 2s, write a function that sorts A[]. 
         * The functions should put all 0s first, then all 1s and all 2s in last.
         * */
        public int[] ThreeTypeElementSort(int[] a)
        {
            int zerosIndex = 0, onesIndex = 0;
            int twosIndex = a.Length - 1;
            while (onesIndex <= twosIndex)
            {
                if (a[onesIndex] == 0)
                {
                    Swap(a, onesIndex, zerosIndex);
                    zerosIndex++;
                    onesIndex++;
                }
                else if (a[onesIndex] == 1)
                {
                    onesIndex++;
                }
                else if (a[onesIndex] == 2)
                {
                    Swap(a, onesIndex, twosIndex);
                    twosIndex--;
                }
            }

            return a;
        }

        //2 type element sort { -1, 1, -4, -3, 2, 3 }
        public int[] TwoTypeElementSort(int[] a)
        {
            int negativesIndex = 0;
            int positivesIndex = a.Length - 1;
            while (negativesIndex <= positivesIndex)
            {
                if (a[negativesIndex] < 0)
                {
                    //negative exists in negative position, just move forward
                    negativesIndex++;
                }
                else if (a[negativesIndex] > -1)
                {
                    Swap(a, negativesIndex, positivesIndex);
                    positivesIndex--;

                    if (a[negativesIndex] < 0)
                    {
                        //after swapping, if value comes to the negatives index location is negative
                        negativesIndex++;
                    }
                }
            }

            return a;
        }
    }

    class SortingAlgorithmsTest
    {
        static void Main1()
        {
            SortingAlgorithms obj = new SortingAlgorithms();
            int[] a = new[] { 7, 2, 1, 6, 8, 5, 3, 4 };
            
            obj.QuickSort(a, 0, a.Length - 1);
            obj.BubbleSort(a);
            obj.InsertionSort(a);

            int[] rearrangedArray = obj.TwoTypeElementSort(new[] { -1, 1, -4, -3, 2, 3 });
            var sortArray = obj.ThreeTypeElementSort(new[] { 2, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 });
        }
    }
}
