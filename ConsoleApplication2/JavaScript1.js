$(document).ready(function () {
    $(".demo-button").kendoButton();
    $(".demo-enable").kendoButton();
    $(".demo-disable").kendoButton();
    $(".demo-target").kendoButton();

    var dataSource = new kendo.data.DataSource({
        data: [{ Id: 5, Name: "項目一" }, { Id: 4, Name: "項目二" }, { Id: 3, Name: "項目三" }, { Id: 2, Name: "項目四" }, { Id: 1, Name: "項目五" }],
        pageSize: 20
    });

    $("#book_grid").kendoGrid({
        dataSource: dataSource,
        hight: 500,
        columns: [
            { field: "Id", title: "書籍編號", width: "50%" },
             { field: "Name", title: "書籍名稱", width: "50%" }
        ],
        sortable: true
    });
});

$(".demo-button").click(function () {
    $(".demo-input").val("");
    $(".demo-text").text("");
});

$(".demo-input").on("input", function () {
    $(".demo-text").text($(this).val());
});

$(".demo-enable").click(function () {
    $(".demo-target").data("kendoButton").enable(true);
});

$(".demo-disable").click(function () {
    $(".demo-target").data("kendoButton").enable(false);
});