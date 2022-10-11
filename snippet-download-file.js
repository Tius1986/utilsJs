// E.g data in csv format separated by comma
const data = `id,firstname,lastname,email
1,Jhon,Doe,jhon.doe@gmail.com
2,Jane,Doe,jane.doe@gmail.com
3,Bob Smith,bob.smith@hotmail.com`

function downloadFile(data, name = 'data.csv') {

    // Create new blob file
    const blob = new Blob([data], { type: 'octet-stream' })

    // create href link with unique example output:
    // http://localhost:3000/ab5606db-551c-aa4d-dbc1-bc10b79a90de
    const href = URL.createObjectURL(blob)

    // create new <a></a> element with specific properties example:
    // <a href="http://localhost:3000/ab5606db-551c-aa4d-dbc1-bc10b79a90de" style="display:none" download="data.csv"></a>
    const a = Object.assign(document.createElement('a'), {
        href,
        style: 'display:none',
        download: name
    })

    // Append <a></a> element in body
    document.body.appendChild(a)

    // trigger action
    a.click()

    /**
     * IMPORTANT!!
     * 
     * The URL.revokeObjectURL() static method releases an existing object URL 
     * which was previously created by calling URL.createObjectURL().
     * Call this method when you've finished using an object URL 
     * to let the browser know not to keep the reference to the file any longer.
     */

    URL.revokeObjectURL(href)
    a.remove()

}