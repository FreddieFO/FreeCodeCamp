var quotes = [
"I invented the term \'Object-Oriented\', and I can tell you I did not have C++ in mind. - Alan Kay",
"Learning to program has no more to do with designing interactive software than learning to touch type has to do with writing poetry - Ted Nelson",
"The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability. - Randall E. Stross",
"If McDonalds were run like a software company, one out of every hundred Big Macs would give you food poisoning, and the response would be, \‘We’re sorry, here\’s a coupon for two more.\’  - Mark Minasi",
"Beware of bugs in the above code; I have only proved it correct, not tried it. - Donald E. Knuth.",
"Computer system analysis is like child-rearing; you can do grievous damage, but you cannot ensure success. - Tom DeMarco",
"I don\'t care if it works on your machine! We are not shipping your machine! - Vidiu Platon.",
"Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday\'s code. - Christopher Thompson", 
"Measuring programming progress by lines of code is like measuring aircraft building progress by weight. - Bill Gates",
"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. - Brian W. Kernighan.",
"People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones. - Donald Knuth",
"First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack. - George Carrette",
"“Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris. - Larry Wall",
"Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves. - Alan Kay",
"The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. - Seymour Cray",
"To iterate is human, to recurse divine. - L. Peter Deutsch",
"On two occasions I have been asked [by members of Parliament]: \'Pray, Mr. Babbage, if you put into the machine wrong figures, will the right answers come out?\' I am not able rightly to apprehend the kind of confusion of ideas that could provoke such a question. - Charles Babbage",
"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. - Linus Torvalds",
"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - Martin Golding",
"There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies. - C.A.R. Hoare"
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}