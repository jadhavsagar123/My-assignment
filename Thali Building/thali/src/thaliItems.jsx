const thaliItems = [
    {
        "id":1,
        "item":'Dal',
        "image":'https://th.bing.com/th/id/OIP.9SphR9OSEAuR3Qq3r7vpIQHaJQ?pid=ImgDet&rs=1',
        'price':120,
       
    },
    {
        "id":2,
        "item":'Chapati',
        "image":'https://th.bing.com/th/id/OIP.7AsXZ8z-BkiwnrnI1pNDsAHaFm?pid=ImgDet&rs=1',
        "price":17,
        

    },
    {
        "id":3,
        "item":'Pickel',
        "image":'https://th.bing.com/th/id/OIP.blir96zPSinUdKE6X5Kx7gHaFj?w=231&h=180&c=7&r=0&o=5&pid=1.7',
        "price":20,
        
    
    },
    {
        "id":4,
        "item":'Curd',
        "image":'https://vanitascorner.com/wp-content/uploads/2019/06/Making-curd.jpg',
        'price':80,
        
    },
    {
        "id":5,
        "item":'Sweet',
        'image':'https://www.transparentpng.com/thumb/sweets/sweets-png-transparent-images--0.png',
        "price":20,
        
    },
    {
        "id":6,
        "item":'Paneer Item',
        'image':'https://i.pinimg.com/736x/1a/9d/18/1a9d18045ea071ad830aeb090d454d93--indian-india-paneer-dishes.jpg',
        'price':350,
        
    },
    
        {
            "id":7,
            "item":"Rajasthani Thali",
            "description":"From gatte ki sabzi to daal-baati churma to khichda to laal maas to bajre ki roti to lahsun ki chutney... to... well, you get the point. The Rajasthani thali is the qunitessential Indian thali. You have stellar dishes like the mawa kachori from Jodhpur, juicy sweet rasgulle from Bikaner and malpuas from Pushkar. tasty treats from every nook and cranny of Rajasthan come together on plate for a food experience of a lifetime.",
            "price":350,
            "image":"https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/son/thali/rajasthani.JPG.webp"
        },
        {
            "id":8,
            "item":"South Indian Thali",
            "description":"Indians are known for elaborate meals and the South Indian thali is the best example of it. There is no 'rule' to this thali and it contains liberal helpings of rice, sambhar, kootu ( vegetables curry cooked with lentils), kosumri, paapad, curd and for desert, there's akkaravadisal ( a sweet made with rice and lentils) to complete the meal.",
            "price":280,
            "image":"https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/son/thali/south.jpg.webp"
        },
        {
            "id":9,
            "item":"Chhattisgarhi Thali",
            "description":"Chattisgarhi thalis are a long, drawn out yet totally delicious affair. You'll be spoilt for choice with dishes like fara, rice pakoras, dehati vada and muthiya. The Chattisgarhi Thali stands out with it's variet of breads like angakar poori, paan roti and chusela. In desserts, watch out for the gulgulle, kusli and sweet fara.",
            "price":250,
            "image":"https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/son/thali/chattis.jpg.webp"
        },
        {
            "id":10,
            "item":"Haryanvi Thali",
            "description":"The Haryanvi thali is really simple. And it is really tasty! Of course, there are large helpings of home made ghee, curd and butter. The specialities are; kachri ki sabzi, hara dhania cholia, mithey chawal, alsi ki pinni, malpuas, khichdi and kachi lassi.",
            "price":450,
            "image":"https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/son/thali/haryana.jpg.webp"
        },
        {
            "id":11,
            "item":"Kathiawadi Thali",
            "description":"This plate can be a bit intimidating. Mostly because the names of these sumptuous Gujrati dishes are so hard to  pronounce. Most of the dishes have a sweet taste to them, even the ones which are supposed to be savory or spicy! Signature dishes include raasawala dhokla, bajra bhakri, methi thepla, kathiawadi akha adad, Gujarati dal, chaas and gol papdi. Phew!",
            "price":350,
            "image":"https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/son/thali/gujju.jpg.webp"
        },
        {
            "id":12,
            "item":" Bhojpuri Thali",
            "description":"The Bhojpuri thali can surprise you with its multitude of flavours. The crispy bharbhara,the usual dahi chura for breakfast, golden brown sattu ka paratha, ghugni, the kala channa curry, besan ki sabji/  besan ki machhli and the sweet raw mango curries will take you on a culinary journey like no other.",
            "price":250,
            "image":"https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/son/thali/bhojpuri.jpg.webp"
        },
        {
            "id":13,
            "item":"Maharashtrian Thali",
            "description":"Maharashtrian cuisine is characterized by mildly spicy food. It usually features a few non-veg items and the dishes actually vary in different parts of Maharashtra. With sweets like aamras and sheera, the thali is certinaly not lacking when it comes to desserts.  Maharashtrian thali automatically goes up by a level. Then you have your sabudaana vada,  a refreshing glass of mattha, kanda poha, danyachi usal and the awesome pav bhaji, which rounds up this spectacular all-in-one meal.",
            "price":550,
            "image":"https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/son/thali/maharas.jpg.webp"
        },
        {
            "id":14,
            "item":" Assamese Thali",
            "description":"A traditional Assamese Thali presents a burst of fresh and unusual herby flavours. Rice  is accompanied by the popular masor tenga (fish in a sour gravy) and khar, a vegetable preparation made using dried banana skin and a meat dish, usually either a chicken curry or duck curry with ash-gourd. Kharoli , a paste mustard seeds rolled into little balls and bamboo shoot chutney is offered as a taste-enhancer on the side. Typical Assamese aloo pitika (mashed potato) consists of boiled egg and mustard oil. The sumptuous meal is to be finished with Assamese payox (kheer).",
            "price":370,
            "image":"https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/shon/AT.jpg.webp"
        },
        {
            "id":15,
            "item":"Goan Thali",
            "description":"Who knew Goa's cuisine could be as awesome as Goa's beaches? Goan food is synonymous with sea food, rice, coconut, fish and yes, kokum! You have Goan rice bhakri, Goan daali thoy, kele ambat, vegetable vindaloo, Goan kokum curry and Goan banana halwa to top it up!",
            "price":590,
            "image":"https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/son/thali/goa.jpg.webp"
        },
        {
            "id":16,
            "item":" Meghalaya Thali",
            "description":"People from Meghalaya like boiled veggies a lot as they are considered to be very healthy. Puklein is another delicious snack available all over Meghalaya. Black sesame is used in almost very dish. For example, the special dal, daineiiong is incomplete without it.",
            "price":470,
            "image":"https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/son/thali/meghalaya.jpg.webp"
        }
    ]
    
    
    


export default thaliItems