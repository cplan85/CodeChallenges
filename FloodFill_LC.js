var floodFill = function(image, sr, sc, color) {
    // sr = source row, sc = source column
    let original = image[sr][sc];

    function recurse(image, sr, sc) {
        //checking index bounds for row, and for columns or that image doesn't equal original value or that image doesn't equal 0
        if (sr <0 || sr > image.length-1 || sc < 0 || sc > image[0].length -1 || image[sr][sc] !== original || image[sr][sc] === color) return image;

        image[sr][sc] = color;

        recurse(image, sr, sc-1)
        recurse(image, sr, sc+1)
        recurse(image, sr-1, sc)
        recurse(image, sr+1, sc)

        return image;

    }

   //left == image[sr][sc - 1]
   // right == image [sr][sc + 1]
   // top == image[sr-1][sc]
   // bottom == image[sr+1][sc]
   return recurse(image, sr, sc);
};

floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)