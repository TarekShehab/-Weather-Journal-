/* Global Variables */ const apiKey = "fef7810e8655183989fc8bcabdf75843&units=imperial";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
// Async Get 
const getData = async (url = "")=>{
    const request = await fetch(url);
    try {
        const allData = await request.json();
    } catch (error) {
        console.log("error", error);
    }
};
getData("/all");

//# sourceMappingURL=index.bba0b65b.js.map
