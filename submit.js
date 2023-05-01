$(() => {
    $('#submitFile').on("click",function(){
        var form = $('#inputFile')[0].files[0];
        var formData = new FormData();
        formData.append('files', form);

        $.ajax({
            type: "POST", //or GET
            enctype: 'multipart/form-data', //모든 문자를 인코딩 하지 않는다.
            url: "/",
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
            timeout: 600000,
            // traditional : true, 배열넘김
            success: function (data) {
                minValue(data);
                maxValue(data);
                avgValue(data);
                alert("성공");
            },
            error: function (e) {
                alert("실패");
            }
        });
    });
})