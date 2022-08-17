function filterBrand() {
    let brandValue = document.getElementById("brandFilter").value;
    let allRows =  document.getElementById("tableRows").getElementsByTagName("tr");

    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];
        let rowBrandVal = row.getElementByTagName("td")[0].innerText;
        if (brandValue === "" || brandValue === rowBrandVal)
            row.hidden = false;
            else 
            row.hidden = true;
    }
}