// this function sends a GET request to the url specified using AJAX
// and automatically updates the table
// notice the table is cleared before fetching the data
function buildTable() {
    let table = document.getElementById("main-table")

    $.getJSON("https://aimtell.com/files/sites.json", function(data) {
        $('#main-table tbody').empty()
        let sites_data = data.sites
        $.each(sites_data, function(key, value) {
            let row_data = 
                `<tr>
                    <td class="table_ids">${value.id}</td>
                    <td>${value.name}</td> 
                    <td>${value.url}</td>
                </tr>`

            $('#main-table').append(row_data)
        })
    })
}