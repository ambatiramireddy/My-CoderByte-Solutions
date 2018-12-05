/*
 There are N gas stations along a circular route, where the amount of gas at station i is gas[i].
 You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to
 its next station (i+1). You begin the journey with an empty tank at one of the gas stations.
 Return the starting gas station's index if you can travel around the circuit once, otherwise return -1.
*/
public static int GasStation(int[] gas, int[] cost)
{
    for (var i = 0; i < gas.Length; i++)
    {
        int startingStationIndex = i, stationsCovered = 0, totalGas = 0;
        while (stationsCovered < gas.Length)
        {
            //fill the gas
            totalGas += gas[i];

            //check if gas is enough to reach next station
            int gasNeeded = cost[i];
            if (totalGas < gasNeeded)
            {
                //no enough gas. so circuit can't be completed from this station.
                break;
            }
            else
            {
                totalGas = totalGas - gasNeeded;
                stationsCovered++;
                startingStationIndex++;

                if (startingStationIndex == gas.Length)
                {
                    startingStationIndex = 0;
                }
            }
        }

        if (stationsCovered == gas.Length)
        {
            return i + 1; //station index is i and i+1 is station number
        }
    }

    return -1;
}
