function LetterCapitalize(str) { 
    var r=str[0].toUpperCase();
    for(i=1;i<str.length;i++)
    {
        if(str[i-1]==' ' && str[i] !=' ')
            r+=str[i].toUpperCase();
        else
            r+=str[i];
    }
    return r; 
}
