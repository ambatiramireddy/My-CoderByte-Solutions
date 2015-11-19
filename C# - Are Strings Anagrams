 //word formed from another by rearranging its letters: “Angel” is an anagram of “glean” 
public static bool AreStringsAnagrams(string a, string b)
{
    if (string.IsNullOrWhiteSpace(a) || string.IsNullOrWhiteSpace(b) || a.Length != b.Length)
        return false;

    a = a.ToLower();
    b = b.ToLower();

    if (a.Equals(b))
        return false;

    char[] ac = a.ToCharArray();
    char[] bc = b.ToCharArray();
    Array.Sort(ac);
    Array.Sort(bc);
    for (int i = 0; i < ac.Length; i++)
    {
        if (ac[i] != bc[i])
        {
            return false;
        }
    }
    return true;
}
