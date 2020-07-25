class MenuItem {
    constructor(
        id,
        menuId,
        name,
        description,
        price,
        calories,
        ingredients,
        remarks,
        vegan,
        vegetarian,
        glutenFree,
        dairyFree,
        containsNuts,
        image
    ) {
        this.id = id;
        this.menuId = menuId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.calories = calories;
        this.ingredients = ingredients;
        this.remarks = remarks;
        this.vegan = vegan;
        this.vegetarian = vegetarian;
        this.glutenFree = glutenFree;
        this.dairyFree = dairyFree;
        this.containsNuts = containsNuts;
        this.image = image;
    }
}

export default MenuItem;