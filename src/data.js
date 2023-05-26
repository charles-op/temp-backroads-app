import image1 from "./images/tour-1.jpeg";
import image2 from "./images/tour-2.jpeg";
import image3 from "./images/tour-3.jpeg";
import image4 from "./images/tour-4.jpeg";

export const pageLinks = [
{ id: 1, href:"#home", text : 'home'},
{ id: 2, href:"#about", text : 'about'},
{ id: 3, href:"#services", text : 'services'},
{ id: 4, href:"#tours", text : 'tours'},
];

export const socialLinks = [
    {id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook"},
    {id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter"},
    {id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace"},
];

export const services = [
    {
        id:1, 
        icon: "fas fa-wallet fa-fw", 
        title:"saving money", 
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    {
        id:1, 
        icon: "fas fa-tree fa-fw", 
        title:"endless hiking", 
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    {
        id:1, 
        icon: "fas fa-socks fa-fw", 
        title:"amazing comfort", 
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia." }
];

export const tours = [
    {
        id: 1,
        date: "august 26th, 2020",
        title: "Tibet Adventure",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
        country: "china",
        days: 6,
        price: "$2100",
        image: image1
    },
    {
        id: 2,
        date: "october 1th, 2020",
        title: "best of java",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
        country: "indonesia",
        days: 11,
        price: "$1400",
        image: image2
    },
    {
        id: 3,
        date: "september 15th, 2020",
        title: "explore hong kong",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
        country: "china",
        days: 8,
        price: "$5000",
        image: image3
    },
    {
        id: 4,
        date: "december 5th, 2019",
        title: "kenya highlights",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
        country: "kenya",
        days: 20,
        price: "$3300",
        image: image4
    },
]