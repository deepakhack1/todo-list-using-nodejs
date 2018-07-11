$(document).ready(function(){
    let input = $('#inp');
    let btn = $('#btn');
    let result = $('#result');

    btn.click(function(){
        console.log(input.val());
        let value = `<li>
                    <input type="hidden">
                    <span onclick="changeType(this)">${input.val()}</span>
                    <button onclick="update(this)">Update</button>
                  </li>`;
        result.append(value);
        addserver(input.val());
    })
});

function update(el) {
    let sibling = $(el).prev();
    let grandSibling = sibling.prev();
    let val = grandSibling.val();
    if(val) {
        $(el).prev().text(val);

        let i=$(el).parent().index();
        updateserver(val,i);
    }

    grandSibling.attr('type', 'hidden');
}

function changeType(el){
    $(el).prev().attr('type', 'text');
}
function dispaly()
{
    let value=""
}
function addserver(value) {
    $.ajax({
        url:"/add",
        method:"post",
        data:{todo:value},
        success:function (data) {
            console.log(data);
        }
    })
}
function updateserver(value,i)
{
    $.ajax({
        url:"/update",
        method:"post",
        data:{todo:value ,index:i},
        success:function (data) {
            console.log(data);
        }
    })
}