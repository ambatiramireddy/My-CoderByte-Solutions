public static void RemoveCommentsFromFile()
{
    var inputFilepath = Path.Combine(System.AppDomain.CurrentDomain.BaseDirectory, "../../Files/CodeFileWithComments.txt");
    var outputFilepath = Path.Combine(System.AppDomain.CurrentDomain.BaseDirectory, "../../Files/CodeFileWithoutComments.txt");
    var data = File.ReadAllText(inputFilepath);
    var lines = data.Split(new[] { Environment.NewLine }, StringSplitOptions.None);
    List<string> outputLines = new List<string>();
    bool multilineCommentFound = false;

    for (int i = 0; i < lines.Length; i++)
    {
        var line = lines[i];
        for (int c = 0; c < line.Length - 1; c++)
        {
            if (!multilineCommentFound)
            {
                if (line[c] == '/' && line[c + 1] == '/')
                {
                    line = line.Substring(0, (c == 0) ? 0 : c - 1);
                    break;
                }

                if (line[c] == '/' && line[c + 1] == '*')
                {
                    //dont break multi line comment may end on the same line
                    multilineCommentFound = true;
                }
            }
            else if (line[c] == '*' && line[c + 1] == '/')
            {
                multilineCommentFound = false;
                line = line.Substring((c + 2 == line.Length - 1) ? line.Length - 1 : c + 2);
                break;
            }
        }

        if (!multilineCommentFound)
        {
            outputLines.Add(line);
        }
    }

    File.WriteAllText(outputFilepath, string.Join(Environment.NewLine, outputLines));
}

public static void RemoveCommentsFromFileUsingRegex()
{
    var inputFilepath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "../../Files/CodeFileWithComments.txt");
    var outputFilepath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "../../Files/CodeFileWithoutComments.txt");

    var data = File.ReadAllText(inputFilepath);

    var lineComments = @"//(.*?)\r?\n";
    Regex regex = new Regex(lineComments);
    data = regex.Replace(data, "");

    var blockComments = @"/\*(.*?)\*/";
    regex = new Regex(blockComments, RegexOptions.Singleline);
    data = regex.Replace(data, "");

    File.WriteAllText(outputFilepath, string.Join(Environment.NewLine, data));
}
