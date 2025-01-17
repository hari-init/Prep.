const getCoordinates = async (docURL) => {
  await fetch(docURL)
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");

      const rows = doc.querySelectorAll("tr");
      const jsonResult = [];

      rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        const rowData = [];

        cells.forEach((cell) => {
          const content = cell.querySelector("span")?.textContent || "";
          rowData.push(content);
        });

        jsonResult.push(rowData);
      });

      printGrid(jsonResult);
    });
};

function printGrid(data) {
  const rows = data.slice(1);

  const points = rows.map(([x, char, y]) => ({
    x: parseInt(x, 10),
    y: parseInt(y, 10),
    char,
  }));

  const maxX = Math.max(...points.map((point) => point.x));
  const maxY = Math.max(...points.map((point) => point.y));

  const grid = Array.from({ length: maxY + 1 }, () =>
    Array(maxX + 1).fill(" ")
  );

  points.forEach(({ x, y, char }) => {
    grid[y][x] = char;
  });

  for (let y = maxY; y >= 0; y--) {
    console.log(grid[y].join(""));
  }
}
