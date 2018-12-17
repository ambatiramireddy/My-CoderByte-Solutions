//Find next greater element for each element in an array
public void FindNextGreaterElementUsingStack()
{
    int[] a = { 1, 5, 2, 7, 12, 8, 10, 6 };
    Stack<int> stack = new Stack<int>();

    for (int i = 0; i < a.Length; i++)
    {
        int n = a[i];
        while (stack.Count > 0 && n > stack.Peek())
        {
            Console.WriteLine("{0} Next greater element is:{1}", stack.Pop(), n);
        }
        stack.Push(n);
    }

    /*if any elements left in stack, that means there are 
     * no greater elements for them in the array */
    while (stack.Count > 0)
    {
        Console.WriteLine("{0} Next greater element is:{1}", stack.Pop(), -1);
    }
}
