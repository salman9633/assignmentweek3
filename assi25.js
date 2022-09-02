var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    },
];
library.map((item)=>{
    if (item.readingStatus==true){
        console.log("You already read " + item.title + " by " + item.author);
    }else{
        console.log("You still need to read " + item.title + " by " + item.author);
    }

})