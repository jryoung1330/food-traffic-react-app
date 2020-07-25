class FoodTruck {
    constructor(
        id,
        foodTruckName,
        displayName,
        company,
        longitude,
        latitude,
        streetAddress,
        city,
        state,
        county,
        zipCode,
        locationDetails,
        description,
        status,
        image,
        tags,
    ) {
        this.id = id;
        this.foodTruckName = foodTruckName;
        this.displayName = displayName;
        this.company = company;
        this.longitude = longitude;
        this.latitude = latitude;
        this.streetAddress = streetAddress;
        this.city = city;
        this.state = state;
        this.county = county;
        this.zipCode = zipCode;
        this.locationDetails = locationDetails;
        this.description = description;
        this.status = status;
        this.image = image;
        this.tags = tags;
    }
}

export default FoodTruck;