function filter() {
    let brandValue = document.getElementById("brandFilter");
    let colorValue = document.getElementById("colorFilter");
    let allRows =  document.getElementById("tableRows").getElementsByTagName("tr");

    for (let i = 0; i < allRows.length; i++) {
        let row = allRows[i];
        let rowBrandVal = row.getElementByTagName("td")[0].innerText;
        let rowColorVal = row.getElementByTagName("td")[1].innerText;



        if ((brandValue.value === "" || brandValue.selectedOptions[0].innerText === rowBrandVal) && 
            (colorValue.value === "" || colorValue.selectedOptions[0].innerText === rowColorVal) )
            row.hidden = false;
            else 
            row.hidden = true;
    }
}