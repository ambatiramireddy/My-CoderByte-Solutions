using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TempConsoleApp
{
    //counter to find no.of times event/operation occured within last 5 mins
    class HitCounter
    {
        private enum EventType
        {
            Get,
            Put,
            Post,
            Delete
        }

        private Dictionary<EventType, long[,]> EventCounter = new Dictionary<EventType, long[,]>();
        private int SlidingWindowInSeconds = 300; //5 mins

        public void Hit(string eventTypeName)
        {
            var eventType = (EventType)Enum.Parse(typeof(EventType), eventTypeName, true);
            var timestamp = GetTimestamp();
            var bucketIndex = timestamp % SlidingWindowInSeconds;

            if (EventCounter.ContainsKey(eventType))
            {
                long[,] timestampsAndHits = EventCounter[eventType];
                if(timestampsAndHits[0, bucketIndex] == timestamp)
                {
                    timestampsAndHits[1, bucketIndex]++;
                }
                else
                {
                    //if timestamp doesn't match, set new timestamp and reset counter to 1;
                    timestampsAndHits[0, bucketIndex] = timestamp;
                    timestampsAndHits[1, bucketIndex] = 1;
                }
            }
            else
            {
                long[,] timestampsAndHits = new long[2, SlidingWindowInSeconds];
                //for storing timestamps
                timestampsAndHits[0, bucketIndex] = timestamp;
                //for storing hits
                timestampsAndHits[1, bucketIndex] = 1;
                EventCounter.Add(eventType, timestampsAndHits);
            }
        }

        public long GetHits(string eventTypeName)
        {
            var eventType = (EventType)Enum.Parse(typeof(EventType), eventTypeName, true);
            var timestamp = GetTimestamp();
            if (EventCounter.ContainsKey(eventType))
            {
                long[,] timestampsAndHits = EventCounter[eventType];
                long sum = 0;
                for (int i = 0; i < 300; i++)
                {
                    //to find hits within last 300 seconds
                    if (timestamp - timestampsAndHits[0, i] < 300)
                    {
                        sum = sum + timestampsAndHits[1, i];
                    }
                }

                return sum;
            }

            return -1;
        }

        private long GetTimestamp()
        {
            return Convert.ToInt64(DateTime.UtcNow.ToString("yyyyMMddHHmmss"));
        }
    }

    class HitCounterTest
    {
        static void Main()
        {
            HitCounter counter = new HitCounter();
            counter.Hit("Get");
            counter.Hit("GET");
            counter.Hit("get");
            counter.Hit("put");
            counter.Hit("post");
            counter.Hit("delete"); 

            Console.WriteLine("No.of hits for event GET within last 5 mins:{0}", counter.GetHits("get"));
            Console.ReadLine();
        }
    }
}
