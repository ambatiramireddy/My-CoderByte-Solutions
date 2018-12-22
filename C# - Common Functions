using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;

namespace AddAppAPI.Helpers
{
    public class CommonFunctions
    {
        public static bool IsNullableType(Type input)
        {
            if (!input.IsValueType) return true; // Reference Type 
            if (Nullable.GetUnderlyingType(input) != null) return true; // Nullable<T> 
            return false;   // Value Type 
        }

        public static Type GetType(Type type)
        {
            if (type.IsGenericType && IsNullableType(type))
            {   // If Nullable<>, this is how we get the underlying Type...
                return type.GenericTypeArguments.FirstOrDefault();
            }
            else
            {
                return type;
            }
        }

        public static bool IsCollectionEmpty<T>(IEnumerable<T> iInput)
        {
            return (iInput == null || iInput.Count() < 1) ? true : false;
        }
    }
}
