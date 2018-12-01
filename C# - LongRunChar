//to find long run char in a string. ex: "abbbccccccd" output:c
public static char LongRunChar(string s)
{
    char currentChar = s[0], longRunChar = s[0];
    int currentCharCount = 1, longRunCharCount = 1;
    for (int i = 1; i < s.Length; i++)
    {
        var nextChar = s[i];
        if (currentChar == nextChar)
        {
            currentCharCount++;
        }
        else
        {
            if (currentCharCount > longRunCharCount)
            {
                longRunChar = currentChar;
                longRunCharCount = currentCharCount;
            }

            currentChar = nextChar;
            currentCharCount = 1;
        }
    }

    if (currentCharCount > longRunCharCount)
    {
        longRunChar = currentChar;
        longRunCharCount = currentCharCount;
    }

    return longRunChar;
}
