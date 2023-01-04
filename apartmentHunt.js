function apartmentHunting(blocks, reqs) {
  let shortestDistanceToReqs = reqs.map((requirement) => shortestDistBtwEachBlockAndReq(requirement,blocks))
  //console.log(shortestDistanceToReqs)
  let longestDistanceToAllReqs = longestDistanceForAllRequirements(shortestDistanceToReqs, blocks)
  //console.log("maxDistanceList",longestDistanceToAllReqs)
  return longestDistanceToAllReqs.indexOf(Math.min(...longestDistanceToAllReqs))
  
}

function shortestDistBtwEachBlockAndReq(requirements, blocksList){
  let closeList = blocksList.map((el) => Infinity)
  //console.log(closeList)
  let currentClosest = Infinity
  for(let i = 0; i < blocksList.length; i++){
    let currBlock = blocksList[i]
    if(currBlock[requirements]===true) {
      currentClosest = i 
    } 
    closeList[i] = Math.abs(currentClosest - i)
  }
  //console.log("i",closeList)

  for(let j = blocksList.length - 2; j >= 0; j--){
    let currBlock = blocksList[j]
    if(currBlock[requirements]===true) {
      currentClosest = j
    }
    closeList[j] = Math.min(closeList[j], Math.abs(currentClosest - j))
  }
  //console.log("j",closeList)
  return closeList
}

function longestDistanceForAllRequirements(closeList, blocksList){
let maxDistanceList = []
  for(let i = 0; i < blocksList.length; i++){
      let currentMaxDistance = -Infinity
      for(let j = 0; j < closeList.length; j++){
          currentMaxDistance = Math.max(currentMaxDistance, closeList[j][i])
      }

      maxDistanceList[i] = currentMaxDistance
  }
  
  return maxDistanceList
}


const blocks=[
  {
  "gym": true,"school":false,"store": false,"college": true
  },
  {
  "gym":true,"school": false,"store": false,"college": true
  },
  {
  "gym":true,"school":true,"store": true,"college": false
  },
  {
  "gym": false, "school":true,"store": false,"college": false
  },
  {
  "gym": true,"school":true,"store":true,"college": false
  }
  ]
  const requirements=["gym","school","college","store"]
 
  console.log(apartmentHunting(blocks,requirements))
  
  // Do not edit the line below.
  exports.apartmentHunting = apartmentHunting;
  