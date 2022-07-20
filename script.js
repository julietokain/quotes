function generate(){
    var quotes = {
        "- Albert Einstein" : '“For everything that is really great and inspiring is created by the individual who can labour in freedom.”',
        "- Herbert Hoover" : '“Freedom is the open window through which pours the sunlight of the human spirit and human dignity."',
        "- Kahlil Gibran" : '“Life without liberty is like a body without spirit.”'
       
    }
  var authors = Object.keys(quotes);
  var author = authors[Math.floor(Math.random() * authors.length)];
  var quote = quotes [author];

  document.getElementById("quote") .innerHTML = quote;
  document.getElementById("author") .innerHTML = author;
}
