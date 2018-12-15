using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsoleApp
{
    class SearchingAlgorithms
    {
        //Find x using binary search
        public int BinarySearch(int[] a, int x)
        {
            int start = 0, end = a.Length - 1;
            while (start <= end)
            {
                int mid = (start + end) / 2;
                if (x == a[mid])
                {
                    return mid;
                }
                else if (x < a[mid])
                {
                    end = mid - 1;
                }
                else
                {
                    start = mid + 1;
                }
            }

            return -1;
        }

        /*
         *  Jump search also works for ordered lists. It selects a block and tries to find the element
         *  in that block. If the element is not found, then it goes o the next block. The block size is 
         *  square root of the array size (√arrayLength). After finding a correct
         *  block, it finds the element using a linear search technique. The jump search lies between linear search
         *   and binary search according to its performance.
         */
        public int JumpSearch(int[] a, int x)
        {
            int blocksize = (int)Math.Sqrt(a.Length);
            int start = 0, end = blocksize;
            while (end < a.Length && a[end] <= x)
            {
                start = end;
                end = end + blocksize;

                if (end > a.Length - 1)
                {
                    //set end to array length to break the loop
                    end = a.Length;
                }
            }

            //linear search from start to end
            for (int i = start; i < end; i++)
            {
                if (a[i] == x)
                {
                    return i;
                }
            }

            return -1;
        }
    }

    class SearchingAlgorithmsTest
    {
        static void Main()
        {
            SearchingAlgorithms obj = new SearchingAlgorithms();
            var indexByJumpSearch = obj.JumpSearch(new[] { 2, 6, 13, 21, 36, 47, 63, 81, 97 }, 97);
            var indexByBinarySearch = obj.BinarySearch(new[] { 2, 6, 13, 21, 36, 47, 63, 81, 97 }, 97);
        }
    }
}
