// Retrieve stored responses
const responses = JSON.parse(localStorage.getItem("quizResponses")) || [];

// Function to check if the user has already attempted the quiz
function hasAlreadyAttempted(roll) {
    return responses.some((response) => response.roll === roll);
}

// Sample Questions
const questions = {
    easy: [
        { question: "I am a decoration hung on a Christmas tree. What am I?", options: ["Garland", "Candy cane", "Ornament", "Wreath"], answer: "Ornament" },
{ question: "What color is Santa's belt?", options: ["Red", "White", "Black", "Green"], answer: "Black" },
{ question: "In the song 'The Twelve Days of Christmas,' what is given on the fifth day?", options: ["Five golden rings", "Five silver bells", "Five candy canes", "Five doves"], answer: "Five golden rings" },
{ question: "What is traditionally hidden inside a Christmas pudding?", options: ["A coin", "A toy", "A candy", "A nut"], answer: "A coin" },
{ question: "Riddle: You see me in December, I sparkle and I glow. I stand tall in the living room, but outside I'll never grow! What am I?", options: ["Christmas tree", "Star", "Snowman", "Candle"], answer: "Christmas tree" },
{ question: "Which pair does NOT belong together?", options: ["Santa and Reindeer", "Stockings and Fireplace", "Wreath and Table", "Snowman and Sunglasses"], answer: "Wreath and Table" },
{ question: "Santa rides a sleigh. What pulls it?", options: ["Horses", "Reindeer", "Dogs", "Goats"], answer: "Reindeer" },
{ question: "What do kids hang by the fireplace for gifts?", options: ["Hats", "Gloves", "Stockings", "Sack"], answer: "Stockings" },
{ question: "What does Santa say?", options: ["Ho Ho Ho", "Ha Ha Ha", "Hi Hi Hi", "Merry Christmas"], answer: "Ho Ho Ho" },
{ question: "I am a round decoration hung on doors. What am I?", options: ["Wreath", "Bell", "Star", "Snowflake"], answer: "Wreath" },
{ question: "Find the missing letter: R_ _ NDEER", options: ["IE", "EI", "AI", "IA"], answer: "EI" },
{ question: "Unscramble the word: 'SOCKSTING'", options: ["Snowflake", "Stockings", "Cookies", "Candy"], answer: "Stockings" },
{ question: "Riddle: I'm red and white, sweet to lick. You hang me on a tree. What am I?", options: ["Candy cane", "Christmas light", "Bell", "Ornament"], answer: "Candy cane" },
{ question: "Find the odd one out:", options: ["Star", "Tinsel", "Pumpkin", "Candy"], answer: "Pumpkin" },
{ question: "What color is Santa's suit?", options: ["Green", "Blue", "Red", "Black"], answer: "Red" },
{ question: "Which reindeer has a glowing red nose?", options: ["Dasher", "Rudolph", "Comet", "Blitzen"], answer: "Rudolph" },
{ question: "What is a Christmas tree topper?", options: ["Bow", "Star", "Bell", "Angel"], answer: "Star" },
{ question: "Find the odd pair:", options: ["Wreath and Door", "Rudolph and Sleigh", "Ice Cream and Christmas", "Hot Cocoa"], answer: "Ice Cream and Christmas" },
{ question: "Fill in the blank: Santa delivers gifts using a", options: ["Train", "Sleigh", "Bus", "Boat"], answer: "Sleigh" },
{ question: "How many points does a snowflake have?", options: ["4", "5", "6", "8"], answer: "6" },
{ question: "How does Santa enter homes on Christmas?", options: ["Through the window", "Through the door", "Through the chimney", "Through the garage"], answer: "Through the chimney" },
{ question: "Where does Santa Claus live?", options: ["The South Pole", "The North Pole", "Greenland", "Iceland"], answer: "The North Pole" },
{ question: "What does Santa say when greeting people?", options: ["Ho, ho, ho! Merry Christmas!", "Happy Holidays!", "Season's Greetings!", "Joy to the World!"], answer: "Ho, ho, ho! Merry Christmas!" },
{ question: "Which of the following is not another name for Santa Claus?", options: ["Saint Nicholas", "Saint Nick", "Kris Kringle", "Jolly Snowman"], answer: "Jolly Snowman" },
{ question: "How many reindeer does Santa Claus have?", options: ["10", "9", "8", "7"], answer: "9" },
{ question: "Which of the following is not a name of a reindeer Santa Claus has?", options: ["Dasher", "Praneer", "Vixen", "Comet"], answer: "Praneer" },
{ question: "What is it called when people sing from door to door?", options: ["Serenading", "Caroling", "Chanting", "Hymning"], answer: "Caroling" },
{ question: "What popular Christmas song was actually written for Thanksgiving?", options: ["Silent Night", "Jingle Bells", "Deck the Halls", "O Holy Night"], answer: "Jingle Bells" },
{ question: "Who helps Santa make gifts?", options: ["Christmas Elves", "Santa", "Frosty", "Fairy"], answer: "Christmas Elves" },
{ question: "Unscramble the word: IAGNREEGDBR", options: ["Gingerbread", "Bridgegrain", "Breadgrain", "Greendrab"], answer: "Gingerbread" },
{ question: "It’s green and prickly but smells so sweet. It’s hung on your door for a Christmas treat. It rhymes with teeth. It’s not something you eat. What is it?", options: ["Garland", "Wreath", "Holly", "Mistletoe"], answer: "Wreath" },
{ question: "Who is Rudolph?", options: ["Santa’s green-dressed elf", "Santa’s orange-nosed reindeer", "Santa’s red-nosed reindeer", "Snowman"], answer: "Santa’s red-nosed reindeer" },
{ question: "Find the correct spelling.", options: ["reindear", "reindeer", "reindeer", "reindeer"], answer: "reindeer" },
{ question: "Which Christmas movie features Kevin McCallister defending his house from burglars using clever traps?", options: ["Elf", "The Grinch", "Home Alone", "Miracle on 34th Street"], answer: "Home Alone" },
{ question: "Which of the following is not related to Christmas?", options: ["Garlic bread", "Reindeer", "Gifts", "Candy cane"], answer: "Garlic bread" },
{ question: "Find the missing word from the Jingle Bells song: 'Oh! What fun it is to ride in a one-horse open _______'", options: ["Carriage", "Sleigh", "Wagon", "Cart"], answer: "Sleigh" },
{ question: "I’m red and white and come with a sweet twist. I’m often hung on the tree or eaten after dinner. What am I?", options: ["A candy cane", "A peppermint", "A marshmallow stick", "A lollipop"], answer: "A candy cane" },
{ question: "Which of the following movies has no scene related to Christmas?", options: ["Harry Potter", "Home Alone", "Twilight", "The Grinch"], answer: "Twilight" },
{ question: "A bird that is often on a Christmas menu?", options: ["Turkey", "Chicken", "Duck", "Pork"], answer: "Turkey" },
{ question: "What did Frosty the Snowman do when a magic hat was placed on his head?", options: ["He began to talk", "He began to dance around", "He started to sing", "He melted away"], answer: "He began to dance around" },
{ question: "What is Frosty the Snowman's nose made of?", options: ["Carrot", "Button", "Stick", "Stone"], answer: "Button" },
{ question: "What is the name of the animated 2004 Christmas movie based on a train journey to the North Pole?", options: ["The Polar Express", "Frozen", "Home Alone", "A Christmas Carol"], answer: "The Polar Express" },
{ question: "What color are mistletoe berries?", options: ["Red", "White", "Green", "Blue"], answer: "White" },
{ question: "Who wrote the famous Christmas story 'A Christmas Carol'?", options: ["Charles Dickens", "Mark Twain", "Hans Christian Andersen", "J.R.R. Tolkien"], answer: "Charles Dickens" },
{ question: "What is traditionally hidden inside a Christmas pudding?", options: ["A coin", "A ring", "A button", "A charm"], answer: "A coin" },
{ question: "What kind of Christmas does Elvis Presley sing about?", options: ["A Blue Christmas", "A White Christmas", "A Jolly Christmas", "A Silent Christmas"], answer: "A Blue Christmas" },
{ question: "In the song 'The Twelve Days of Christmas,' what is given on the 5th day?", options: ["Golden Rings", "Swans a Swimming", "Lords a Leaping", "Turtle Doves"], answer: "Golden Rings" },
{ question: "What do you traditionally put on top of a Christmas tree?", options: ["Star", "Angel", "Bell", "Candy Cane"], answer: "Star" },
{ question: "What is the name of the Grinch's dog?", options: ["Max", "Buddy", "Charlie", "Rex"], answer: "Max" },
{ question: "Which country is credited with starting the tradition of putting up a Christmas tree?", options: ["Germany", "USA", "Norway", "England"], answer: "Germany" },
{ question: "What beverage is often left out for Santa on Christmas Eve?", options: ["Milk", "Tea", "Coffee", "Juice"], answer: "Milk" },
{ question: "What holiday drink is made with milk, sugar, and eggs?", options: ["Eggnog", "Hot Chocolate", "Apple Cider", "Mulled Wine"], answer: "Eggnog" },
{ question: "What is the name of the snowman in Disney's 'Frozen'?", options: ["Olaf", "Frosty", "Kristoff", "Sven"], answer: "Olaf" },
{ question: "In which Christmas movie does a character declare, 'Every time a bell rings, an angel gets his wings'?", options: ["It’s a Wonderful Life", "Elf", "The Polar Express", "Home Alone"], answer: "It’s a Wonderful Life" },
{ question: "What item is central to the story of 'The Nutcracker'?", options: ["A Nutcracker Doll", "A Christmas Tree", "A Snow Globe", "A Gingerbread House"], answer: "A Nutcracker Doll" },
{ question: "What red-blooming plant is often associated with Christmas?", options: ["Poinsettia", "Holly", "Amaryllis", "Mistletoe"], answer: "Poinsettia" },
{ question: "Which character brings presents to children in Italy during Christmas?", options: ["La Befana", "Santa Claus", "Saint Nicholas", "Krampus"], answer: "La Befana" },
{ question: "What is the Grinch's primary complaint about Christmas?", options: ["Noise", "Gifts", "Decorations", "Food"], answer: "Noise" },
{ question: "Which plant is known as the 'Christmas flower'?", options: ["Poinsettia", "Rose", "Lily", "Orchid"], answer: "Poinsettia" },
{ question: "What are the two main colors associated with Christmas?", options: ["Red and Green", "Blue and White", "Gold and Silver", "Black and Gold"], answer: "Red and Green" }
    ],
    medium: [
        { question: "What kind of ball doesn’t bounce?", options: ["Basketball", "Football", "Snowball", "Tennis Ball"], answer: "Snowball" },
{ question: "I’m seen in December but not in any other month. What am I?", options: ["The letter 'D'", "Snowflakes", "Santa Claus", "Mistletoe"], answer: "The letter 'D'" },
{ question: "I come with numerous colors, so lovely and bright. I transform so many homes into beautiful sights. What am I?", options: ["Christmas Lights", "Candy Canes", "Ornaments", "Snow Globes"], answer: "Christmas Lights" },
{ question: "I have no voice, but I talk to you; I tell no lies, but I inspire joy. What am I?", options: ["A Christmas Card", "A Snowflake", "A Christmas Carol", "A Present"], answer: "A Christmas Card" },
{ question: "If a lion had a Christmas music album, what would it be called?", options: ["Silent Roar", "Jungle Bells", "Roaring Christmas", "King of Christmas"], answer: "Jungle Bells" },
{ question: "What do you call an old snowman?", options: ["Frost", "Ice Cubes", "Water", "Melted Frosty"], answer: "Water" },
{ question: "I have needles all over me but cannot sew a thing. What am I?", options: ["A Porcupine", "A Christmas Tree", "A Sewing Kit", "A Cactus"], answer: "A Christmas Tree" },
{ question: "If Santa's five elves take five minutes to make five dolls, how long would it take 100 elves to make 100 dolls?", options: ["Five Minutes", "Ten Minutes", "Twenty Minutes", "One Hour"], answer: "Five Minutes" },
{ question: "Buddy and Hermey were both born on Christmas Eve. When Buddy was 6 years old, Hermey was half his age. If Buddy turns 100 years old this Christmas Eve, how old is Hermey going to be?", options: ["50", "97", "98", "99"], answer: "97" },
{ question: "Why is Santa so good at Karate?", options: ["He Practices a Lot", "Because He’s Super Strong", "Because He Has a Black Belt", "He Learns From Ninja Elves"], answer: "Because He Has a Black Belt" },
{ question: "In Chennai, I’m a place of peace, During Christmas, joy does increase. My tall spires reach up to the sky, Guess me now, as you pass by.", options: ["St. George's Cathedral", "Velankanni Church", "Santhome Basilica", "Little Mount Church"], answer: "Santhome Basilica" },
{ question: "The Christmas Delight of Tamil Nadu: I’m a rich treat that fills your plate, Full of fruits, nuts, and spice so great. Baked with care, I’ll warm your heart, Guess me now, a festive part.", options: ["tiurF ekaC", "mulP ekaC", "etalocohC ekaC", "egnopS ekaC"], answer: "mulP ekaC-Plum cake" },
{ question: "Coconut Tree Christmas Puzzle During Christmas, the decoration of coconut trees in Tamil Nadu becomes a creative display. Let’s consider the following: There are 3 coconut trees in a row. The trees are decorated in different ways: Tree 1: 2 lights, 3 flowers, 1 star Tree 2: 4 lights, 5 flowers, 2 stars Tree 3: 6 lights, 1 flower, 3 stars. Which tree has the maximum total number of decorations?", options: ["Tree 1", "Tree 2", "Tree 3", "Tree 2&3"], answer: "Tree 2" },
{ question: "I am a classic Christmas song that tells the story of joy, peace, and good will. My verses often mention the birth of a special child in a humble setting. I’ve been sung for centuries and bring cheer to all who hear me. What am I?", options: ["O Holy Night", "Silent Night", "Jingle Bells", "Joy to the World"], answer: "Silent Night" },
{ question: "I’m a heartbeat of rhythm, in the Christmas parade, My sound fills the air, as carols are played. I’m not a bell, nor a stringed tune, But I keep the beat under the moon. What am I?", options: ["Tambourine", "Drum", "Trumpet", "Violin"], answer: "Drum" },
{ question: "Let’s guess the Santa’s Efficient Vehicle in Tamil Nadu according to Chat-GPT: In Tamil Nadu, the sleigh is swapped, For a vehicle that’s quick, not stopped. I’m small and nimble, with a cheerful sound, Carrying gifts and joy all around. Not on snow, but on roads I roam, What am I, Santa’s gift-giving home?", options: ["Auto-rickshaw", "Motorcycle", "Bullock Cart", "Bicycle"], answer: "Auto-rickshaw" },
{ question: "Santa Myth Puzzle: I’m a jolly figure with gifts to bring, But some say I’m just a magical thing. I fly with reindeer, on a sleigh in the night, And my visits are part of Christmas delight. Though I’m not real, I make spirits bright, What am I?", options: ["Santa's sleigh", "Santa Claus", "Rudolph", "Christmas Elf"], answer: "Santa Claus" },
{ question: "Can you guess the Christmas event from the emojis below? 🎭👑🍼👼", options: ["Christmas Parade", "Christmas Play", "Christmas Caroling", "Christmas Eve Service"], answer: "Christmas Play" },
{ question: "I stand for compassion, with a color so bright, Found in Santa’s suit and a symbol of light. I bring cheer in Christmas and aid in need, A club that works with the color of care and deed. What am I?", options: ["Rotract club", "Lion club", "Enactus", "Youth Red Cross"], answer: "Youth Red Cross" },
{ question: "What is traditionally hidden inside a Christmas pudding?", options: ["A coin", "A ring", "A bell", "A key"], answer: "A coin" },
{ question: "Which country is credited with starting the tradition of putting up a Christmas tree?", options: ["Germany", "Sweden", "Norway", "United Kingdom"], answer: "Germany" },
{ question: "Which of these is an anagram of a popular Christmas song?", options: ["Silent Niag", "Singet Let", "Listen Night", "Silent Night"], answer: "Silent Night" },
{ question: "How many ghosts visit Scrooge in A Christmas Carol?", options: ["3", "4", "2", "5"], answer: "4" },
{ question: "In the song The Twelve Days of Christmas, how many total gifts are given?", options: ["78", "94", "364", "280"], answer: "364" },
{ question: "Which one of these Christmas items is not symmetrical?", options: ["A star", "A candy cane", "A snowflake", "A bauble"], answer: "A candy cane" },
{ question: "What is the meaning of the word 'Noël' in French?", options: ["Santa", "Joy", "Christmas", "Winter"], answer: "Christmas" },
{ question: "What is the missing word in this Christmas carol? '________ the red-nosed reindeer had a very shiny nose.'", options: ["Dasher", "Rudolph", "Blitzen", "Comet"], answer: "Rudolph" },
{ question: "Rearrange the letters to form a Christmas-related word: 'A N T S A'", options: ["Santa", "Tans", "Ants", "Stand"], answer: "Santa" },
{ question: "What day follows Christmas Day?", options: ["Boxing Day", "St. Nicholas Day", "New Year’s Eve", "Epiphany"], answer: "Boxing Day" },
{ question: "In Home Alone, where do the McCallisters go for their Christmas vacation?", options: ["London", "Paris", "Rome", "New York"], answer: "Paris" },
{ question: "Solve the riddle: 'I’m made of white, but I’m not paper. I come in flakes, but I’m not cereal. What am I?'", options: ["Ice", "Frost", "Snow", "Cotton"], answer: "Snow" },
{ question: "What is the main ingredient in a gingerbread house?", options: ["Sugar", "Chocolate", "Gingerbread", "Biscuit"], answer: "Gingerbread" },
{ question: "Which reindeer name is also a term used in weather forecasts?", options: ["Dasher", "Blitzen", "Vixen", "Stormy"], answer: "Blitzen" },
{ question: "Solve the puzzle: Unscramble 'EICNODHLE' to reveal a Christmas decoration.", options: ["Ice Holder", "Reindeer", "Chandelier", "Candle"], answer: "Ice Holder" },
{ question: "Which ocean is Christmas Island located in?", options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Southern Ocean"], answer: "Indian Ocean" },
{ question: "What do people traditionally put on top of a Christmas tree?", options: ["Angel", "Star", "Snowflake", "Santa's Hat"], answer: "Angel" },
{ question: "I bring joy to your heart, I am tiny and sweet, With sugar and spice, I'm a Christmas treat. What am I?", options: ["Candy Cane", "Gingerbread Cookie", "Sugar Plum", "Chocolate Truffle"], answer: "Candy Cane" },
{ question: "Which Christmas decoration is traditionally hung over a doorway?", options: ["Wreath", "Garland", "Stocking", "Tinsel"], answer: "Wreath" },
{ question: "Which song features the lyrics 'Let it snow, let it snow, let it snow'?", options: ["Winter Wonderland", "Let It Snow!", "Frosty the Snowman", "Jingle Bells"], answer: "Let It Snow!" },
{ question: "What Christmas item is also called 'Yule log'?", options: ["A cake", "A tree", "A gift", "A fire"], answer: "A cake" },
{ question: "Who wrote the famous book 'A Christmas Carol'?", options: ["Charles Dickens", "J.K. Rowling", "Mark Twain", "Ernest Hemingway"], answer: "Charles Dickens" },
{ question: "Which reindeer is known for having a red nose?", options: ["Rudolph", "Dasher", "Prancer", "Comet"], answer: "Rudolph" },
{ question: "What is the traditional food eaten in England on Christmas Day?", options: ["Roast Turkey", "Pasta", "Hamburgers", "Fried Chicken"], answer: "Roast Turkey" },
{ question: "Which of these is not a traditional Christmas flower?", options: ["Poinsettia", "Daisy", "Holly", "Christmas Cactus"], answer: "Daisy" },
{ question: "Which holiday movie features a character named 'Buddy' who was raised by elves?", options: ["Elf", "Home Alone", "The Polar Express", "Miracle on 34th Street"], answer: "Elf" },
{ question: "Which Christmas tradition is associated with the act of kissing under a mistletoe?", options: ["Exchange of gifts", "Singing carols", "Exchanging love", "Hanging stockings"], answer: "Exchanging love" },
{ question: "Which of these is a popular Christmas Eve dish in Italy?", options: ["Lasagna", "Fried Fish", "Roast Lamb", "Spaghetti"], answer: "Fried Fish" },
{ question: "In the song 'The Twelve Days of Christmas,' what is given on the 5th day?", options: ["Gold Rings", "Pipers Piping", "Doves", "Swans"], answer: "Gold Rings" },
{ question: "What type of tree is most commonly associated with Christmas?", options: ["Fir", "Pine", "Oak", "Maple"], answer: "Fir" },
{ question: "Which of the following is NOT a traditional Christmas carol?", options: ["Silent Night", "Jingle Bells", "Rudolph the Red-Nosed Reindeer", "Happy Birthday"], answer: "Happy Birthday" },
{ question: "Which Christmas decoration is hung on a tree and shaped like a bell?", options: ["Angel", "Star", "Tinsel", "Bell"], answer: "Bell" },
{ question: "Which country is home to the tradition of the 'Christmas pickle' ornament?", options: ["Germany", "France", "United States", "Italy"], answer: "Germany" },
{ question: "What popular Christmas drink is made with eggs, milk, and spices?", options: ["Hot Chocolate", "Eggnog", "Cider", "Mulled Wine"], answer: "Eggnog" },
{ question: "What is the name of the Grinch's dog?", options: ["Snoopy", "Max", "Fido", "Buddy"], answer: "Max" },
{ question: "In 'How the Grinch Stole Christmas', what is the Grinch's heart size before he has a change of heart?", options: ["Two sizes too small", "One size too small", "Normal", "Three sizes too big"], answer: "Two sizes too small" },
{ question: "What Christmas song contains the lyrics 'And may all your Christmases be white'?", options: ["White Christmas", "Jingle Bells", "Silent Night", "Deck the Halls"], answer: "White Christmas" },
{ question: "What is the name of the reindeer who is always last in the team, following Rudolph?", options: ["Blitzen", "Vixen", "Comet", "Prancer"], answer: "Blitzen" },
{ question: "Which country is credited with creating the first modern Christmas card?", options: ["England", "Germany", "United States", "France"], answer: "England" },
{ question: "In 'The Nutcracker' ballet, who is the main character?", options: ["The Sugar Plum Fairy", "Clara", "The Nutcracker", "The Mouse King"], answer: "Clara" },
{ question: "What type of animal pulls Santa's sleigh?", options: ["Deer", "Reindeer", "Horses", "Dogs"], answer: "Reindeer" },
{ question: "What food is typically left out for Santa on Christmas Eve?", options: ["Cookies and Milk", "Carrots", "Pie", "Cheese and Crackers"], answer: "Cookies and Milk" },
{ question: "What is the name of the snowman in the song 'Frosty the Snowman'?", options: ["Snowy", "Frosty", "Flurry", "Chilly"], answer: "Frosty" },
{ question: "In what movie is the famous line 'Every time a bell rings, an angel gets his wings' from?", options: ["It's a Wonderful Life", "Home Alone", "The Polar Express", "Miracle on 34th Street"], answer: "It's a Wonderful Life" },
{ question: "What is the most popular Christmas carol of all time?", options: ["Silent Night", "Jingle Bells", "Hark! The Herald Angels Sing", "O Holy Night"], answer: "Silent Night" }
    ],
    hard:[
        { question: "What is the creamy beverage considered a Christmas delicacy?", options: ["Milkshake", "Hot chocolate", "Eggnog", "Latte"], answer: "Eggnog" },
{ question: "What are the three wise men called?", options: ["Scholars", "Magi", "Kings", "Shepherds"], answer: "Magi" },
{ question: "It’s a ____________ Life, classic Christmas film.", options: ["Wonderful", "Great", "Amazing", "Blessed"], answer: "Wonderful" },
{ question: "What is the dried grape used in Christmas pudding?", options: ["Raisin", "Currant", "Sultana", "Prune"], answer: "Raisin" },
{ question: "A type of tree with straight, needle-like leaves.", options: ["Pine", "Oak", "Maple", "Birch"], answer: "Pine" },
{ question: "Believed to be the birthplace of Jesus.", options: ["Bethlehem", "Jerusalem", "Nazareth", "Galilee"], answer: "Bethlehem" },
{ question: "Early December zodiac sign.", options: ["Sagittarius", "Pisces", "Capricorn", "Scorpio"], answer: "Sagittarius" },
{ question: "What is the traditional Milanese Christmas bread?", options: ["Gingerbread", "Panettone", "Brioche", "Pumpernickel"], answer: "Panettone" },
{ question: "Christmas Song: Silent _____.", options: ["Night", "Eve", "Prayer", "Bell"], answer: "Night" },
{ question: "Orthodox Christmas is celebrated on:", options: ["January 7", "December 25", "January 6", "December 26"], answer: "January 7" },
{ question: "A traditional song, usually sung at Christmas.", options: ["Carol", "Hymn", "Anthem", "Tune"], answer: "Carol" },
{ question: "Shiny metal foil strips to hang on Christmas trees.", options: ["Tinsel", "Ribbon", "Garland", "Lights"], answer: "Tinsel" },
{ question: "Landing pad for Santa.", options: ["Roof", "Chimney", "Lawn", "Porch"], answer: "Roof" },
{ question: "Common Christmas gift.", options: ["Toys", "Clothes", "Shoes", "Books"], answer: "Toys" },
{ question: "Decorative circle of branches popular at Christmas.", options: ["Wreath", "Garland", "Bouquet", "Crown"], answer: "Wreath" },
{ question: "Decorations or baubles hung on a Christmas tree.", options: ["Ornaments", "Lights", "Tinsel", "Garland"], answer: "Ornaments" },
{ question: "Who tried to steal Christmas from the Whos in Dr. Seuss' famous book?", options: ["The Grinch", "Scrooge", "Santa", "Jack Frost"], answer: "The Grinch" },
{ question: "In the movie It's a Wonderful Life, what happens every time a bell rings?", options: ["An angel gets its wings", "A wish is granted", "Snow falls", "A gift is opened"], answer: "An angel gets its wings" },
{ question: "Which country first popularized the tradition of Christmas crackers?", options: ["UK", "USA", "France", "Germany"], answer: "UK" },
{ question: "In The Polar Express, what is the first gift of Christmas?", options: ["A silver bell from Santa's sleigh", "A golden ticket", "A toy train", "A Christmas tree"], answer: "A silver bell from Santa's sleigh" },
{ question: "What is the name of the Grinch's dog?", options: ["Max", "Buddy", "Sam", "Jack"], answer: "Max" },
{ question: "What color are the berries of the mistletoe plant?", options: ["White", "Red", "Green", "Blue"], answer: "White" },
{ question: "What is the name of Rudolph's dad?", options: ["Donner", "Dasher", "Blitzen", "Vixen"], answer: "Donner" },
{ question: "Which of the following gift is not given by the Wise Men to baby Jesus?", options: ["Gold", "Frankincense", "Myrrh", "Silver"], answer: "Silver" },
{ question: "What type of food is traditionally left out for Santa on Christmas Eve?", options: ["Cookies and milk", "Carrots", "Bread", "Cake"], answer: "Cookies and milk" },
{ question: "Which carol includes the lyrics Joy to the world, the Lord is come?", options: ["Joy to the World", "Silent Night", "O Holy Night", "Hark! The Herald Angels Sing"], answer: "Joy to the World" },
{ question: "Who wrote the famous Christmas story A Christmas Carol?", options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"], answer: "Charles Dickens" },
{ question: "What is the name of the traditional German Christmas cake made with dried fruits and nuts?", options: ["Panettone", "Stollen", "Yule Log", "Fruitcake"], answer: "Stollen" },
{ question: "Who is the villain trying to ruin Christmas in A Christmas Carol?", options: ["The Grinch", "Ebenezer Scrooge", "Jack Frost", "Frosty"], answer: "Ebenezer Scrooge" },
{ question: "What plant is known as the Christmas flower?", options: ["Poinsettia", "Holly", "Mistletoe", "Amaryllis"], answer: "Poinsettia" },
{ question: "Which country has a tradition of a witch dropping gifts for children through the chimney at Christmas?", options: ["Italy", "Spain", "Germany", "France"], answer: "Italy" },
{ question: "Which country is credited with popularizing Christmas lights?", options: ["Germany", "USA", "England", "France"], answer: "USA" },
{ question: "Which reindeer’s name means lightning in German?", options: ["Donner", "Blitzen", "Rudolph", "Dasher"], answer: "Blitzen" },
{ question: "What is the famous Christmas dessert made with dried fruit and alcohol?", options: ["Fruitcake", "Mince Pie", "Pudding", "Yule Log"], answer: "Pudding" },
{ question: "What is Frosty the Snowman’s hat made of?", options: ["Silk", "Wool", "Felt", "Cotton"], answer: "Silk" },
{ question: "What is the name of a witch dropping gifts for children through the chimney at Christmas?", options: ["Befana", "La Llorona", "Frau Holle", "Gryla"], answer: "Befana" },
{ question: "Which Christmas carol contains the lyrics Silent night, holy night...?", options: ["Jingle Bells", "Silent Night", "The Christmas Song", "Winter Wonderland"], answer: "Silent Night" },
{ question: "In Home Alone, where is the McCallister family traveling when they accidentally leave Kevin behind?", options: ["Paris", "New York", "London", "Rome"], answer: "Paris" },
{ question: "What powers Santa’s sleigh according to legend?", options: ["Magic Dust", "Flying Reindeer", "A Jet Engine", "Snowflakes"], answer: "Flying Reindeer" },
{ question: "Which carol includes the lyrics O tidings of comfort and joy?", options: ["God Rest Ye Merry, Gentlemen", "Silent Night", "O Holy Night", "Hark! The Herald Angels Sing"], answer: "God Rest Ye Merry, Gentlemen" },
{ question: "What ancient Roman festival, celebrated from December 17 to 23, involved gift-giving, feasting, and merriment?", options: ["Saturnalia", "Festivus", "Yule", "Epiphany"], answer: "Saturnalia" },
{ question: "What was the highest-grossing Christmas movie of all time (as of 2024)?", options: ["Home Alone", "The Grinch", "Elf", "The Polar Express"], answer: "Home Alone" },
{ question: "What famous scientist was born on Christmas Day in 1642?", options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"], answer: "Isaac Newton" },
{ question: "Word Scramble: RTCAE (Hint: What Santa's elves do for his big night!)", options: ["Cater", "Create", "Actor", "React"], answer: "Cater" },
{ question: "Which animal is considered a symbol of Christmas in Sweden?", options: ["The Yule Goat", "The Reindeer", "The Bear", "The Owl"], answer: "The Yule Goat" },
{ question: "Word Scramble: TSIAF (Hint: What many people celebrate during Christmas!)", options: ["Faiths", "Facts", "Stiff", "Fast"], answer: "Faiths" },
{ question: "Which Christmas tradition is believed to have originated in 16th-century Germany?", options: ["Decorating Christmas Trees", "Singing Christmas Carols", "Exchanging Christmas Gifts", "Cooking Christmas Cookies"], answer: "Decorating Christmas Trees" },
{ question: "Which Christmas carol contains the lyrics Chestnuts roasting on an open fire...?", options: ["Jingle Bells", "Silent Night", "The Christmas Song", "Winter Wonderland"], answer: "The Christmas Song" },
{ question: "In Mexico, what flower is known as the flower of the holy night?", options: ["Poinsettia", "Holly", "Lily", "Rose"], answer: "Poinsettia" },
{ question: "What day of the week does Christmas fall on in 2024?", options: ["Monday", "Wednesday", "Thursday", "Friday"], answer: "Wednesday" },
{ question: "What fruit is traditionally placed in a Christmas stocking?", options: ["Apple", "Orange", "Banana", "Grape"], answer: "Orange" },
{ question: "What holiday movie features a character named Buddy the Elf?", options: ["Elf", "Home Alone", "The Grinch", "Polar Express"], answer: "Elf" },
{ question: "Which popular Christmas beverage is also called milk punch?", options: ["Eggnog", "Hot Chocolate", "Mulled Wine", "Apple Cider"], answer: "Eggnog" },
{ question: "What is the French name for Santa Claus?", options: ["Père Noël", "Papa Claus", "Monsieur Noël", "Saint Claus"], answer: "Père Noël" },
{ question: "What is the best-selling Christmas song of all time?", options: ["White Christmas", "Jingle Bells", "Silent Night", "All I Want for Christmas Is You"], answer: "White Christmas" },
{ question: "In the song '12 Days of Christmas,' how many golden rings are there?", options: ["5", "7", "6", "4"], answer: "5" },
{ question: "What was the original title of 'The Night Before Christmas' poem?", options: ["A Visit from St. Nicholas", "A Christmas Tale", "Santa’s Visit", "The Christmas Eve"], answer: "A Visit from St. Nicholas" },
{ question: "What is traditionally hidden inside a Christmas pudding?", options: ["A coin", "A key", "A ring", "A charm"], answer: "A coin" },
{ question: "Which country is credited with starting the Christmas tree tradition?", options: ["Germany", "France", "England", "USA"], answer: "Germany" },
{ question: "What color suit did Santa wear before Coca-Cola popularized the red suit?", options: ["Green", "Blue", "Black", "Yellow"], answer: "Green" },
{ question: "What holiday dessert is shaped like a shepherd’s staff?", options: ["Candy Cane", "Yule Log", "Gingerbread", "Fruitcake"], answer: "Candy Cane" },
{ question: "What is the name of the horse in the song 'Jingle Bells'?", options: ["Bobtail", "Comet", "Dasher", "Rudolph"], answer: "Bobtail" },
{ question: "What is the name of Scrooge’s deceased business partner in 'A Christmas Carol'?", options: ["Jacob Marley", "Ebenezer Marley", "John Cratchit", "Fred Fezziwig"], answer: "Jacob Marley" },
{ question: "What Christmas plant has the scientific name Ilex?", options: ["Holly", "Mistletoe", "Poinsettia", "Fir"], answer: "Holly" },
{ question: "In what country is KFC a traditional Christmas dinner?", options: ["Japan", "China", "South Korea", "USA"], answer: "Japan" },
{ question: "In the movie 'Elf,' what are the four main food groups according to Buddy?", options: ["Candy, Candy Canes, Candy Corn, Syrup", "Cookies, Cake, Ice Cream, Syrup", "Chocolate, Candy, Marshmallows, Syrup", "Candy, Chocolate, Ice Cream, Syrup"], answer: "Candy, Candy Canes, Candy Corn, Syrup" },
{ question: "What is the name of the famous ballet performed around Christmas?", options: ["The Nutcracker", "Swan Lake", "Sleeping Beauty", "The Firebird"], answer: "The Nutcracker" },
{ question: "What is the name of the guardian angel in 'It’s a Wonderful Life'?", options: ["Clarence", "Michael", "Gabriel", "George"], answer: "Clarence" },
{ question: "Which country is known for the Christmas tradition of 'The Yule Lads'?", options: ["Iceland", "Norway", "Denmark", "Sweden"], answer: "Iceland" },
{ question: "What is the Grinch’s catchphrase in 'How the Grinch Stole Christmas'?", options: ["Bah, Humbug!", "I hate Christmas!", "You’re a mean one, Mr. Grinch!", "It came without ribbons!"], answer: "It came without ribbons!" },
{ question: "What do the letters 'X' in 'Xmas' stand for?", options: ["Christ", "Cross", "Christmas", "Xenon"], answer: "Christ" },
{ question: "What is the traditional Yule Log made of?", options: ["Wood", "Cake", "Chocolate", "Candy"], answer: "Wood" },
{ question: "What does the red color of Christmas symbolize?", options: ["Blood of Christ", "Santa’s Suit", "Holly Berries", "Love"], answer: "Blood of Christ" },
{ question: "Who created Rudolph the Red-Nosed Reindeer?", options: ["Robert L. May", "Johnny Marks", "Clement Clarke Moore", "Charles Dickens"], answer: "Robert L. May" }
      ]
};

// Switch between forms (Step 1: User details, Step 2: Quiz)
function switchToQuiz() {
    document.getElementById("userDetailsForm").style.display = "none";
    document.getElementById("quizForm").style.display = "block";
}

// Randomize Questions
function getRandomQuestions() {
    const easyIndex = Math.floor(Math.random() * questions.easy.length);
    const mediumIndex = Math.floor(Math.random() * questions.medium.length);
    const hardIndex = Math.floor(Math.random() * questions.hard.length);

    return {
        easy: questions.easy[easyIndex],
        medium: questions.medium[mediumIndex],
        hard: questions.hard[hardIndex]
    };
}

// Load Random Questions
function loadQuestions() {
    const { easy, medium, hard } = getRandomQuestions();

    document.getElementById("easyQuestion").textContent = easy.question;
    document.getElementById("mediumQuestion").textContent = medium.question;
    document.getElementById("hardQuestion").textContent = hard.question;

    createOptions("easyOptions", easy.options);
    createOptions("mediumOptions", medium.options);
    createOptions("hardOptions", hard.options);

    return { easy, medium, hard };
}

// Create Options for a Question
function createOptions(elementId, options) {
    const container = document.getElementById(elementId);
    container.innerHTML = ""; // Clear existing options
    options.forEach((option) => {
        const optionElement = document.createElement("div");
        optionElement.innerHTML = `
            <label>
                <input type="radio" name="${elementId}" value="${option}" required> ${option}
            </label>`;
        container.appendChild(optionElement);
    });
}

let currentQuestions = loadQuestions();

// Step 1: Submit User Details
document.getElementById("userDetailsForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Collect form data
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const dept = document.getElementById("dept").value;
    const phone = document.getElementById("phone").value;

    // var Regex='/^[^a-zA-Z]*$/';

    if(name.match(/^[^a-zA-Z]*$/))
    {
    alert("Enter a Valid Name");
    return;
    }

    if(dept.match(/^[^a-zA-Z]*$/))
    {
    alert("Enter a Valid Department");
    return;
    }

    if(!roll.match(/^\d{9}$/)) {
    alert("Enter a Valid Roll Number");
    return;
    }

    if(!phone.match(/^\d{10}$/)) {
    alert("Enter a Valid Phone Number");
    return;
    }

    // Check if the user has already attempted the quiz
    if (hasAlreadyAttempted(roll)) {
        alert("You have already attempted the quiz.");
        return;
    }

    try {
        // Send user details to the server
        const response = await fetch("http://localhost:3000/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                roll,
                dept,
                phone,
                score: 0, // Default score
                answers: {
                    easy: "",
                    medium: "",
                    hard: "",
                },
            }),
        });

        if (response.ok) {
            // Save user details in sessionStorage
            sessionStorage.setItem(
                "userDetails",
                JSON.stringify({ name, roll, dept, phone })
            );

            // Switch to the quiz form if submission is successful
            switchToQuiz();
        } else {
            const errorData = await response.json();
            alert(errorData.message || "Failed to submit details.");
        }
    } catch (error) {
        console.error("Error submitting user details:", error);
        alert("An error occurred while submitting your details. Please try again.");
    }
});

// Step 2: Submit Quiz Answers
document.getElementById("quizForm").addEventListener("submit", async(e) => {
    e.preventDefault();

    const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    if (!userDetails) {
        alert("User details are missing. Please refresh and try again.");
        return;
    }

    const easyAnswer = document.querySelector("input[name='easyOptions']:checked")?.value || "";
    const mediumAnswer = document.querySelector("input[name='mediumOptions']:checked")?.value || "";
    const hardAnswer = document.querySelector("input[name='hardOptions']:checked")?.value || "";

    const score =
        (easyAnswer === currentQuestions.easy.answer ? 1 : 0) +
        (mediumAnswer === currentQuestions.medium.answer ? 1 : 0) +
        (hardAnswer === currentQuestions.hard.answer ? 1 : 0);  
        console.log(userDetails);
        try {
            // Send user details to the server
            const response = await fetch("http://localhost:3000/submitQuiz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    userDetails,
                    score,
                    answers: { easy: easyAnswer, medium: mediumAnswer, hard: hardAnswer }
                }),
            });
    
        } catch (error) {
            console.error("Error submitting user details:", error);
            alert("An error occurred while submitting your details. Please try again.");
        }

    // responses.push({
    //     ...userDetails,
    //     score,
    //     answers: { easy: easyAnswer, medium: mediumAnswer, hard: hardAnswer }
    // });

    // Save responses to localStorage
    localStorage.setItem("quizResponses", JSON.stringify(responses));

   
    // Display Thank You message
    function showThankYouMessage(score) {
        // Update the container's content
        document.querySelector(".container").innerHTML = `
            <h1>Thank you for attempting the quiz!</h1>
            <p>Your Score: ${score}</p>
        `;
    
        // Trigger redirection after content update
        setTimeout(() => {
            window.location.href = "https://rajalakshmi.org/yrcrec/team.html";
        }, 3000);
    }
    
    // Call this function when you need to display the thank-you message and redirect
    showThankYouMessage(score);
    

});

document.getElementById("clearResponses").addEventListener("click", async () => {
    const confirmClear = confirm("Are you sure you want to clear all responses?");
    if (!confirmClear) return;

    try {
        const response = await fetch('http://localhost:3000/clearResponses', {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        alert("All responses cleared successfully.");
        document.querySelector("#responsesTable tbody").innerHTML = ""; // Clear the table
    } catch (err) {
        console.error('Error clearing responses:', err);
        alert("Failed to clear responses. Please try again.");
    }
});
