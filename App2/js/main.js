function longestWord(word) {
    //splitword will split the argument into an array of every word
    var splitword = word.split(" ");
    //this will hold the longest word from the array
    var temp = " ";
    //this will run everytime for each string
    for (var i = 0; i < splitword.length; i++) {
        //this will assign the longest string to the temp variable
        if (splitword[i].length >= temp.length) {
            temp = splitword[i]
        };
    };
    //this will log the longest word
    console.log(temp);  
};
longestWord("hello worlds");

