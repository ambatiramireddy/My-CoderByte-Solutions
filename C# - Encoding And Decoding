public void ASCIIEncodingAndDecodingTest()
{
    //encode and write file
    string filesFolder = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "../../Files/");
    var ASCIIText = File.ReadAllText(filesFolder + "ASCIIText.txt");
    var byteArray = Encoding.ASCII.GetBytes(ASCIIText);
    string[] b = byteArray.Select(x => Convert.ToString(x, 2).PadLeft(8, '0')).ToArray();
    File.WriteAllText(filesFolder + "EncodedASCIIText.txt", string.Join("", b));

    //read and decode file without using ASCII decoder
    var encodedASCIIText = File.ReadAllText(filesFolder + "EncodedASCIIText.txt");
    var blockSize = 8;
    var noOf8BitBlocks = encodedASCIIText.Length / blockSize;
    var decodedString = "";
    int blockIndex = 0;
    while(blockIndex < noOf8BitBlocks)
    {
        var bytestring = encodedASCIIText.Substring(blockIndex * blockSize, blockSize);
        decodedString = decodedString + (char)Convert.ToInt32(bytestring, 2);

        blockIndex++;
    }
}

public void UTF8EncodingAndDecodingTest()
{
    //encode and write file
    string filesFolder = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "../../Files/");
    var ASCIIText = File.ReadAllText(filesFolder + "UTF8Text.txt");
    var byteArray = Encoding.UTF8.GetBytes(ASCIIText);
    string[] b = byteArray.Select(x => Convert.ToString(x, 2).PadLeft(8, '0')).ToArray();
    File.WriteAllText(filesFolder + "EncodedUTF8Text.txt", string.Join("", b));

    //read and decode file without using UTF8 decoder
    var encodedText = File.ReadAllText(filesFolder + "EncodedUTF8Text.txt");
    var blockSize = 8;
    var noOf8BitBlocks = encodedText.Length / blockSize;
    var decodedString = "";
    int blockIndex = 0;
    while (blockIndex < noOf8BitBlocks)
    {
        int startIndex = blockIndex * blockSize;
        var bytestring = encodedText.Substring(startIndex, blockSize);
        if (bytestring.StartsWith("110")) //this starting byte is for a 2-byte char
        {
            bytestring = encodedText.Substring(startIndex, 2 * blockSize);
            blockIndex = blockIndex + 2;
        }
        else if (bytestring.StartsWith("1110")) //this starting byte is for a 3-byte char
        {
            bytestring = encodedText.Substring(startIndex, 3 * blockSize);
            blockIndex = blockIndex + 3;
        }
        else if (bytestring.StartsWith("11110")) //this starting byte is for a 4-byte char
        {
            bytestring = encodedText.Substring(startIndex, 4 * blockSize);
            blockIndex = blockIndex + 4;
        }
        else
        {
            blockIndex = blockIndex + 1;
        }
        decodedString = decodedString + (char)ConvertUTF8BinaryToDecimal(bytestring);
    }
}

public int ConvertUTF8BinaryToDecimal(string bytestring)
{
    var resultBits = "";
    // ignore header bits which are used to determine no.of bytes required to represent a char 
    // and take bits which actually reperesent the unicode char
    if (bytestring.StartsWith("110")) //char needs 2 bytes
    {
        resultBits = bytestring.Substring(3, 5) + bytestring.Substring(10, 6);
    }
    else if (bytestring.StartsWith("1110")) //char needs 3 bytes
    {
        resultBits = bytestring.Substring(4, 4) + bytestring.Substring(10, 6) + bytestring.Substring(18, 6);
    }
    else if (bytestring.StartsWith("11110")) //char needs 4 bytes
    {
        resultBits = bytestring.Substring(5, 3) + bytestring.Substring(10, 6) + bytestring.Substring(26, 6);
    }
    else
    {
        resultBits = bytestring;
    }

    return Convert.ToInt32(resultBits, 2);
}
