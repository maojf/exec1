
$.ajax({
    url: 'http://localhost:8000/getFile',
    type: 'get',
    contentType: false,
    processData: false,
    success: function (res) {
        console.log(res)
        if(res.code === 'success'){
            $(`<img src='data:image/jpeg;base64,${res.img}'/>`).appendTo($('body'))
        } else {
            alert(res.msg)
        }
    }
})