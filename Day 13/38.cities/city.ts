function describe_city(city: string, country: string = "Unknown"):void
{
    return console.log(`${city} is in ${country}`)
}

describe_city("karachi")
describe_city("Karachi","Pakistan")