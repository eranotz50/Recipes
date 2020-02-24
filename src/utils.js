
function groupBy(arr,keySelector){

    var dic  = {};

    for(var i = 0 ; i < arr.length; i++){

        var item = arr[i];
        var key = item[keySelector];
        
        if( !(key in dic)){
            dic[key] = [];    
        }

        dic[key].push(item)
    }

    return dic;
}

function toHierarchical(dic){

    var roots = [];
    
    for (var key in dic) {
        if (dic.hasOwnProperty(key)) {
            //console.log(key + " -> " + dic[key]);

            var root = { id : key , children : [] , name : key};
            roots.push(root);

            var items = dic[key];

            for(var i = 0 ; i < items.length; i++){
                var child  = { id : i +1 , name : items[i]};
                root.children.push(child);
                                
            }
        }
    }

    return roots;
}

exports.groupBy = groupBy;
exports.toHierarchical = toHierarchical;
