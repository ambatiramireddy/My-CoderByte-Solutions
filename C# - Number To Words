static string[] OnesMap = { "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" };
static string[] TensMap = { "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" };
public static string NumberToWords(int number)
{
    string words = "";

    int millions = number / 1000000;
    if (millions > 0)
    {
        words += NumberToWords(millions) + " million ";
        number %= 1000000;
    }

    int thousands = number / 1000;
    if (thousands > 0)
    {
        words += NumberToWords(thousands)+ " thousand ";
        number %= 1000;
    }

    int hundreds = number / 100;
    if (hundreds > 0)
    {
        words += NumberToWords(hundreds) + " hundred ";
        number %= 100;
    }

    if (number > 0)
    {
        if (words != "")
        {
            words += "and ";
        }

        if (number < 20)
        {
            words += OnesMap[number];
        }
        else
        {
            words += TensMap[number / 10] + " " + OnesMap[number % 10];
        }
    }

    return words;
}

 public static void Main(string[] args)
 {
    var NumberInWords = NumberToWords(7654321).TrimEnd();
 }
