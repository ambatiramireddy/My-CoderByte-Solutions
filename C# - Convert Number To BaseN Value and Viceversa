using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TempConsoleApp
{
    class BaseConversion
    {
        private char[] GetMap(int baseN)
        {
            char[] map = null;

            if (baseN == 2)
            {
                map = "01".ToCharArray();
            }
            else if (baseN == 10)
            {
                map = "0123456789".ToCharArray();
            }
            else if (baseN == 16)
            {
                map = "0123456789abcdef".ToCharArray();
            }
            else if (baseN == 62)
            {
                // Map to store 62 possible characters 
                map = ("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ").ToCharArray();
            }

            return map;
        }

        public string NumberToBaseNValue(long n, int baseN)
        {
            var map = GetMap(baseN);
            string result = string.Empty;

            // Convert given integer id to a base N value 
            while (n > 0)
            {
                result += map[n % baseN];
                n = n / baseN;
            }

            // Reverse result to complete base conversion 
            return string.Join("", result.Reverse());
        }

        public long BaseNValueToNumber(string n, int baseN)
        {
            var map = GetMap(baseN);
            long number = 0;
            for (int i = n.Length - 1, j = 0; i >= 0; i--, j++)
            {
                number += Array.IndexOf(map, n[i]) * (long)Math.Pow(baseN, j);
            }

            return number;
        }

    }

    class BaseConversionTest
    {
        static void Main(string[] args)
        {
            BaseConversion obj = new BaseConversion();
            int number = 12345, baseN = 62;
            var numberToBaseN = obj.NumberToBaseNValue(number, baseN);
            var baseNValueToNumber = obj.BaseNValueToNumber(numberToBaseN, baseN);
        }
    }
}
