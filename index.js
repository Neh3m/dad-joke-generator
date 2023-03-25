const btnEl  = document.getElementById("btn")
const apiKey = "ulCzHzsSzeKMI8hqK6wQ/A==TeZL695yGmVaOstC" //API key is put in the variable
const jokeEL = document.getElementById("joke")

const option= {
    method:"GET",
    headers:{
        "X-Api-Key": apiKey, // The API key is added here
    },
};

// This is The API URL
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1"  //the limit is set to 1 

//async is used here because await is being used in line 29
async function getJoke(){
    //Error handeling
    //Try and catch

    try{
    // loading screen
    jokeEL.innerText="Loading...";
    
    //disable the button while waiting for a fetch to complete
    btnEl.disabled = true;  //siable using the variable btnEl
    btnEl.innerText="Wait." //Change the inner text using innerText 
    
    //Geting The Data
    const response=await fetch(apiURL, option) //this will wait untill the api is fetched
    const data = await response.json() //The data is here

    //update the button after getting the data
    btnEl.disabled = false;
    btnEl.innerText="Tell me a joke";


    // console.log(data[0].joke)   
    jokeEL.innerText = data[0].joke;  // this is a array 

    }
    catch(error){
        //custom Error Message
        jokeEL.innerText ="There Seems to Be An Error Please try again Later :)";
        //Change Button 
        btnEl.disabled = false;
        btnEl.innerText="Tell me a joke";

        // console.log(error); //This is to see the error in the console!
    }
}

btnEl.addEventListener("click", getJoke)


// IN THIS  : [ API Request , Synchronous Function , TRY and CATCH to handle Error ,  Loading Effect]
// Create On : Sat,Mar 25 2023 | Tamil Nadu INDIA                           