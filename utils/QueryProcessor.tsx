export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrew id")) {
    return ("hnguyent");
  } else if (query.toLowerCase().includes("name")) {
    return ("Ben");
  } else if (query.toLowerCase().includes("largest")) {
    let nums = query.split(":")[1].slice(0, -1).split(",");
    var n = nums.map(function(str) {
      return parseInt(str); });

    return Math.max(...n).toString();
  } 

  return "";
}
