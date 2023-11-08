let HTMLString='<p><p><strong><strong><em>PHP Exercises</em></strong></strong></strong></strong></p>';

function removeTags(HTMLString){
    res = HTMLString.replace(/<p>|<strong>|<em>/g, "");
    indexTagLetter=res.indexOf('<');
    res=res.slice(0,indexTagLetter);
    return res;
}

console.log(removeTags(HTMLString));
