let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
    console.log(library);
    function sortByTitle(){
        library.sort(function(a, b){
            let x = a.title, y = b.title;
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        })
        console.log(library);
    }
sortByTitle();