export default class Furnitures {
    constructor() {
        this.items = [];
        this.searchString = '';
        this.searchResults = [];
    }

    async getFurnituresData() {
        const response = await fetch('http://localhost:8080/furnitures');
        const data = await response.json();
        this.items = data.furnituresList;
    }

    filterFurnitures(query) {
        this.searchString = query.toLowerCase();
        this.searchResults = this.items
            .filter((item) => item.name.includes(this.searchString) || item.type.includes(this.searchString));
    }
}
