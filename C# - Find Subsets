public List<string> GetSubsets(string s)
{
    List<string> subsets = new List<string>() { "" };
    for (int i = 0; i < s.Length; i++)
    {
        int count = subsets.Count;
        for (int j = 0; j < count; j++)
        {
            subsets.Add(subsets[j] + s[i]);
        }
    }

    return subsets;
}

public IEnumerable<List<T>> GetSubsets<T>(T[] array)
{
    //var possibleSubsetsCount = (int)Math.Pow(2, array.Length);
    List<List<T>> subsets = new List<List<T>>() { new List<T>() };

    for (int i = 0; i < array.Length; i++)
    {
        int count = subsets.Count;
        for (int j = 0; j < count; j++)
        {
            var subset = new List<T>(subsets[j]);
            subset.Add(array[i]);
            subsets.Add(subset);
        }
    }

    //return powerset.Where(subset => subset.Count > 1);
    return subsets;
}
