$('#save').click(() => {
    console.log($("#file")[0].files)
    var formData = new FormData();
    formData.append("avatar", $("#file")[0].files[0]);
    $.ajax({
        url: 'http://localhost:8000/upLoad',
        type: 'post',
        data: formData,
        contentType: false,
        processData: false,
        success: function (res) {
            console.log(res)
            alert(res.msg);
        }
    })
})

$('#filePage').click(() => {
    location.href = './file.html'
})