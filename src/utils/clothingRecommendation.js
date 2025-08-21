export default function getClothingRecommendation (temparature, feelslike, condition, wind) {
    const clothes = [
        {temp:-10, feelslike: -12, condition:"Cloudy", wind:10, hat: "Beanie", top: "Coat", bottom: "Jeans", shoes: "Boots" },
        {temp:20, feelslike: 23, condition:"Sunny", wind:16, hat: null, top: "T-shirt", bottom: "Shorts", shoes: "Sneakers" },
        {temp:16, feelslike: 23, condition:"Cloudy", wind:10, hat: null, top: "takki", bottom: "Shorts", shoes: "Sneakers" },
        {temp:-50, feelslike: 23, condition:"Sunny", wind:16, hat: null, top: "T-shirt", bottom: "Shorts", shoes: "Sneakers" },
    ]

     const conditionMap = {
        "sunny": "Sunny",
        "clear": "Sunny",
        "partly cloudy": "Partly Cloudy",
        "cloudy": "Cloudy",
        "overcast": "Cloudy",
        "rainy": "Rainy",
        "drizzle": "Rainy",
        "snowy": "Snowy",
        "stormy": "Stormy",
        "thunderstorm": "Stormy",
        "foggy": "Foggy",
        "mist": "Foggy"
    };

    const todaysCondition = condition.toLowerCase().trim();
    const mappedCondition = conditionMap[todaysCondition] || "Unknown";


    let totalScore = 0;
    let returningClothes = [];

    for (let i = 0; i < clothes.length; i++) {
        let tempScore = 0
        let conditionScore = 0
        let windScore = 0

        if(Math.abs(temparature - clothes[i].temp) <= 1)
            tempScore = 10
        else if (Math.abs(temparature - clothes[i].temp) <= 5)
            tempScore = 5
        else if (Math.abs(temparature - clothes[i].temp) <= 8)
            tempScore = 1
        else
            tempScore = 0
             
        if(Math.abs(wind - clothes[i].wind) <= 1)
            windScore = 5
        else if (Math.abs(wind - clothes[i].wind) <= 3)
            windScore = 3
        else if (Math.abs(wind - clothes[i].wind) <= 5)
            windScore = 1
        else
            windScore = 0
        
        if(clothes[i].condition === mappedCondition)
            conditionScore = 2;

        totalScore = tempScore + windScore + conditionScore

        console.log(totalScore);

        returningClothes.push({...clothes[i], score: totalScore})
    }

    return returningClothes.sort((a,b) => b.score - a.score).slice(0,3)

}