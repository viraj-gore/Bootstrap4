
$(document).ready(function()
{
    $("#mycarousel").carousel({ interval:2000 });
    $('#carouselButton').click(function()
    {
        if($("#carouselButton").children("span").hasClass('fa-pause')){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});
$(document).ready(function()
{
    $('#reserveTableButtton').click(function()
    {
        $('#reserveModal').modal({
            keyboard: false
        })
        $('#reserveModal').modal('toggle');
        $('#reserveModal').modal('show');
        $('#closeButton').click(function(){
            $('#reserveModal').modal('hide');
        })
        $("#cancelButton").click(function(){
            $("#reserveModal").modal("hide");
        })
    });
});
$(document).ready(function()
{
    $('#loginButton').click(function()
    {
        $('#loginModal').modal({
            keyboard: false
        })
        $('#loginModal').modal('toggle');
        $('#loginModal').modal('show');
        $('#buttonClose').click(function(){
            $("#loginModal").modal("hide");
        })
        $('#buttonCancel').click(function(){
            $("#loginModal").modal("hide");
        })
    });
});
