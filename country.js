class Country 
{
    constructor(name, lang, greeting, colors) 
    {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])
let rwanda = new Country ("Rwanda", "Ikinyarwanda", "Muraho Isi", ["skyblue","yellow","green"])
let sweden = new Country("Sweden", "Swedish", "Hej varlden", ["blue","yellow"])

function SwitchCountry() 
{
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") 
    {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") 
    {
        country = mexico;
    }
    else if (input === "Algeria") 
    {
        country = algeria;
    }
    else if (input === "Rwanda") 
    {
        country = rwanda;
    }
    else if (input === "Sweden") 
    {
        country = sweden;
    }

    DisplayColors(country);    
}

function DisplayColors(country)
{

    document.getElementById("CountryName").innerHTML = country.name;
    document.getElementById("OfficialLanguage").innerHTML = country.lang;
    document.getElementById("Hello World").innerHTML = country.greeting;
    document.getElementById("Color1").style="background-color: "+country.colors[0];

    if (country.colors.length === 2) 
    {
        document.getElementById("Color2").style="background-color: "+country.colors[1];
        document.getElementById("Color3").style="background-color: "+country.colors[1];
    }
    else if (country.colors.length === 3)
    {
        document.getElementById("Color2").style="background-color: "+country.colors[1];
        document.getElementById("Color3").style="background-color: "+country.colors[2];
    }
}

