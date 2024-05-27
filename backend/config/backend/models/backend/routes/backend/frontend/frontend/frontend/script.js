const propertyForm = document.getElementById('propertyForm');
const propertyList = document.getElementById('propertyList');

propertyForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const address = document.getElementById('address').value;
    const price = document.getElementById('price').value;
    const owner = document.getElementById('owner').value;

    const response = await fetch('http://localhost:5000/api/properties/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description, address, price, owner }),
    });

    const property = await response.json();

    const li = document.createElement('li');
    li.textContent = `${property.title} - ${property.description} - ${property.address} - $${property.price} - Owner: ${property.owner}`;
    propertyList.appendChild(li);

    propertyForm.reset();
});

async function fetchProperties() {
    const response = await fetch('http://localhost:5000/api/properties');
    const properties = await response.json();

    properties.forEach(property => {
        const li = document.createElement('li');
        li.textContent = `${property.title} - ${property.description} - ${property.address} - $${property.price} - Owner: ${property.owner}`;
        propertyList.appendChild(li);
    });
}

fetchProperties();
