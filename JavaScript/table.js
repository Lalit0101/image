let student = [];
print();

function print(){

    let text = '';

    text += "<table border = 2px>"

    text += `<tr>
        <th>Name</th>
        <th>Roll Num</th>
        <th>Percentage</th>
        <th>School</th>
        <th>Action</th>
        <th>Update</th>
        </tr>`;

    student.forEach(function(v, i){
            text += `<tr>
                <td>${v.name}</td>
                <td>${v.roll}</td> 
                <td>${v.per}</td> 
                <td>${v.school}</td> 
                <td><input type = "button" onclick="remove(${i})" value = "Delete">
                </td>
                <td>    <input type = "button" onclick="" value = "Update" id="up"></td>
                </tr>` 
        });

        document.getElementById("demo").innerHTML = text;

        text += "</table>"
};

function add(){
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let per = document.getElementById("per").value;
    let school = document.getElementById("school").value;

    let d = {
        name : name,
        roll : roll,
        per : per,
        school : school
    }
    student.push(d);
    print();
}

function remove(i){
    student.splice(i, 1);
    print();
}