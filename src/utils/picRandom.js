

// const PicRandomAnimals = [
//     {type: "lion", path: "https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
//     {type: "fish", path: "https://images.pexels.com/photos/6927443/pexels-photo-6927443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
//     {type: "bird", path: "https://images.pexels.com/photos/1618424/pexels-photo-1618424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
//     {type: "rabit", path: "https://images.pexels.com/photos/104373/pexels-photo-104373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
   

// ];


const PicRandomAnimals = [
    "https://images.pexels.com/photos/1598377/pexels-photo-1598377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6927443/pexels-photo-6927443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1618424/pexels-photo-1618424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     "https://images.pexels.com/photos/104373/pexels-photo-104373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     "https://images.pexels.com/photos/614505/pexels-photo-614505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     "https://images.pexels.com/photos/2576761/pexels-photo-2576761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     "https://images.pexels.com/photos/34700/bear-animals-zoo-captivity.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
     "https://images.pexels.com/photos/355669/pexels-photo-355669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   "https://images.pexels.com/photos/533990/pexels-photo-533990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   "https://images.pexels.com/photos/13288957/pexels-photo-13288957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
   "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

const picRandom = () => {
    return PicRandomAnimals[Math.floor(Math.random() * PicRandomAnimals.length)]
};

export default picRandom;