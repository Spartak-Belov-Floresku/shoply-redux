const FormatPrice = (price) => {

    const digitsRev = [];
    let head_tail = [];
    price = parseFloat((price).toFixed(2))
    let tagPrice = price.toString();
    

    if(tagPrice.length >= 5 && tagPrice.includes('.'))
        head_tail = tagPrice.split(".");

    if(head_tail.length)
        tagPrice = head_tail[0];
    
    if(tagPrice.length >= 4){ 
        let arrNums = tagPrice.split("");
        arrNums = arrNums.reverse() 
      for (let i = 0; i <= arrNums.length - 1; i++) {
          digitsRev.push(arrNums[i]);
          if (i > 0 && (i+1) % 3 === 0 && (i+1) < arrNums.length) digitsRev.push(",");
      }
      tagPrice = digitsRev.reverse().join("");
    }

    if(head_tail.length)
        tagPrice = `${tagPrice}.${head_tail[1]}`;
    else
        tagPrice = `${tagPrice}.00`;

    return `$${tagPrice}`;
}

export default FormatPrice;