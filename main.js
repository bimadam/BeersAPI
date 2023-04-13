let beers = [];

for (let i = 0; i < 10; i++) {
  fetch('https://random-data-api.com/api/v2/beers')
    .then(response => response.json())
    .then(data => {
      const arr = Object.values(data);
      beers.push({
        brand: arr[2],
        name: arr[3],
        alcohol: parseFloat(arr[9])
      });

      if (beers.length === 10) {
        beers.sort((a, b) => a.alcohol - b.alcohol);

        const table = document.getElementById('beer-table');
        const tbody = table.querySelector('tbody');
        tbody.innerHTML = '';

        beers.forEach(beer => {
          const row = document.createElement('tr');
          const brandCell = document.createElement('td');
          brandCell.textContent = beer.brand;
          const nameCell = document.createElement('td');
          nameCell.textContent = beer.name;
          const alcoholCell = document.createElement('td');
          alcoholCell.textContent = beer.alcohol;

          row.appendChild(brandCell);
          row.appendChild(nameCell);
          row.appendChild(alcoholCell);
          tbody.appendChild(row);
        });
      }
    });
}
