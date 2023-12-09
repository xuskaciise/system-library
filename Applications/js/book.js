
btnAction="Insert";
Readbook();
$("#addnew").on("click",function(){
    $("#bookModal").modal("show");
})
$("#bookFrom").on("submit",function(e){
    e.preventDefault();
    let data="";
     data=new FormData($("#bookFrom")[0]);
    if(btnAction=="Insert"){
     data=new FormData($("#bookFrom")[0]);
    data.append("action","addbook")
    }else{
         data=new FormData($("#bookFrom")[0]);
        data.append("action","Updatebook")
    }
  
    $.ajax({
        method:"POST",
        dataType:"JSON",
        url:"../api/book.php",
        data:data,
        contentType:false,
        processData:false,
        success:function(data){
            let status=data.status;
            let response=data.data;
            if(status){
                alert("success",response)
                Readbook()
                btnAction="Insert";
            }else{
                alert("danger",response)
            }

        },error:function(data){
            alert("danger",data.responseText)
        }
    })
})
 function Readbook(){
    $(".bookTable tbody").html("");
    let data={
        "action":"Readbook"
        
    }
    $.ajax({
        method:"POST",
        dataType:"JSON",
        url:"../api/book.php",
        data:data,
        success:function(data){
            let status=data.status;
            let response=data.data;
            let html="";
            
            if(status){
                response.forEach(res=>{
                    html="<tr>";
                    for(let i in res){
                        html+=`<td>${res[i]}</td>`
                    }
                    html+=`<td >
                    <a class='btn btn-success btn-round update_info'update_id="${res['id']}"style='color:#fff'><i class="fa fa-edit"></i>
                
                    <a class='btn btn-danger btn-round delete_info' delete_id=${res['id']} style='color:#fff; margin-left:10px;'><i class="fa fa-trash"></i>
                    </td>`
                    html+="</tr>"
                    $(".bookTable tbody").append(html);
                })
         
                $("#basic-col-reorder").DataTable();
            }else{
               console.log(response);
            }

        },error:function(data){
            console.log(data.responseText);
        }
    })
 }
 function Feachbook(id){
  let data={
    "action":"Feachbook",
    "id":id
  }
    $.ajax({
        method:"POST",
        dataType:"JSON",
        url:"../api/book.php",
        data:data,
        success:function(data){
            let status=data.status;
            let response=data.data;
            if(status){
                btnAction="Update";
                $("#update_id").val(response['id'])
                $("#name").val(response['name']);
                $("#author").val(response['author']);
                $("#edition").val(response['edition']);
                $("#publish").val(response['publish']);
                $("#cost").val(response['cost']);
                $("#ISBN").val(response['ISBN']);
                $("#qty").val(response['qty']);
                $("#description").val(response['description']);
                 $("#bookModal").modal("show")
            }else{
               console.log(response);
            }

        },error:function(data){
           console.log(data.responseText);
        }
    })
}
 
function Deletebook(id){
    let data={
      "action":"Deletebook",
      "id":id   
     
    }
      $.ajax({
          method:"POST",
          dataType:"JSON",
          url:"../api/book.php",
          data:data,
          success:function(data){
              let status=data.status;
              let response=data.data;
              if(status){
                Readbook();
              }else{
                 console.log(response);
              }
  
          },error:function(data){
             console.log(data.responseText);
          }
      })
  }
   

 $(".bookTable tbody").on("click","a.update_info",function(){
    let id=$(this).attr("update_id");
   
    Feachbook(id)
 })
 $(".bookTable tbody").on("click","a.delete_info",function(){
    let id=$(this).attr("delete_id");
    
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#fa3f1b",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      },
      function(){
        swal("Deleted!", "Deleted SuccessFully", "success");
          
        Deletebook(id)
      });
    
 })




function alert(type,messege){
    let success=document.querySelector(".alert-success");
    let danger =document.querySelector(".alert-danger");
    if(type=="success"){
        success.classList="alert alert-success background-success";
        success.innerHTML=messege;
        danger.classList="alert alert-danger background-danger d-none";
        setTimeout(function(){
            $("#bookFrom")[0].reset()
            $("#bookModal").modal("hide");
            success.classList="alert alert-success background-success d-none"

        },2000)
    }else{
        danger.classList="alert alert-danger background-danger";
        danger.innerHTML=messege;

    }
}